import { type NextRequest } from 'next/server';
import { Client } from '@notionhq/client';

export const config = {
    runtime: 'experimental-edge'
};

type Photo = {
    date: string;
    url: string;
};

export default async function handler(req: NextRequest) {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 8);

    const notion = new Client({ auth: process.env.NOTION_TOKEN });
    const response = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID as string,
        filter: {
            and: [
                {
                    property: "Photo",
                    files: {
                        is_not_empty: true,
                    },
                },
                {
                    property: "Date",
                    date: {
                        on_or_after: oneWeekAgo.toISOString(),
                    },
                }
            ],
        },
        sorts: [
            {
                property: "Date",
                direction: "descending",
            },
        ],
    });

    const photos: Photo[] = response.results.map((page) => {
        // @ts-ignore
        const date = page.properties.Name.title[0].plain_text;
        // @ts-ignore
        const url = page.properties.Photo.files[0].file.url;

        const photo: Photo = {
            date,
            url,
        };

        return photo;
    });


    return new Response(
        JSON.stringify({
            photos
        }),
        {
            status: 200,
            headers: {
                'content-type': 'application/json',
                'cache-control': 'public, s-maxage=3600, stale-while-revalidate=60'
            }
        }
    );
}
