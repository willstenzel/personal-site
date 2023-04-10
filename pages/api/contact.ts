import type { NextApiRequest, NextApiResponse } from 'next'
import { Client } from '@notionhq/client';
import { Twilio } from 'twilio';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Log the contact in Notion
    const logContactInNotion = async () => {
        const notion = new Client({ auth: process.env.NOTION_TOKEN });

        await notion.pages.create({
            parent: {
                database_id: process.env.NOTION_CONTACTS_DATABASE_ID as string,
            },
            properties: {
                Name: {
                    title: [
                        {
                            text: {
                                content: req.body.name,
                            },
                        },
                    ],
                },
                Email: {
                    email: req.body.email,
                },
                Message: {
                    rich_text: [
                        {
                            text: {
                                content: req.body.message,
                            },
                        },
                    ],
                },
            },
        });
    };

    // Not worth creating new ZipMessage conversation yet becuase I would need to upgrade the plan to Premium
    const createNewZipMessageConversation = async (name: string) => {
        const response = await fetch('https://zipmessage.com/api/v1/conversations/create_conversation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': process.env.ZIPMESSAGE_TOKEN,
            },
            body: JSON.stringify({
                "title": `Will / ${name}`,
                "anyone_can_post": true,
                "allow_anonymous_messages": false,
                "allow_search_engines": false
            })
        })

        const data = await response.json();
        return data.conversation_url;
    };

    const sendSMS = async (body: string) => {
        const accountSid = process.env.TWILIO_ACCOUNT_SID;
        const authToken = process.env.TWILIO_AUTH_TOKEN;
        const client = new Twilio(accountSid, authToken);

        await client.messages.create({
            body: body,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: process.env.MY_PHONE_NUMBER,
        });
    };

    const sendMessageToNotifyMyself = async (name: string, email: string, message: string) => {
        const body = `New contact submitted from website\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
        await sendSMS(body);
    };

    const sendErrorMessageToMyself = async (name: string, email: string) => {
        const body = `Error running an automation on personal site.\n\nName: ${name}\nEmail: ${email} Message: ${message}`;
        await sendSMS(body);
    };

    const body = req.body;

    const { name, email, message } = body;

    try {
        await logContactInNotion();
        // const zipMessageUrl = await createNewZipMessageConversation(name);
        await sendMessageToNotifyMyself(name, email, message);
        res.status(200).json({ success: true });
    } catch (error) {
        await sendErrorMessageToMyself(name, email);
        res.status(500).json({ success: false });
    }
}
