import type { NextApiRequest, NextApiResponse } from 'next'
import { Client } from '@notionhq/client';

type Photo = {
    date: string;
    url: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 8);

    const notion = new Client({ auth: process.env.NOTION_TOKEN });
    const response = await notion.databases.query({
        database_id: process.env.NOTION_PHOTOS_DATABASE_ID as string,
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

    res.status(200).json(photos);
}
