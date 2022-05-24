import axios, { AxiosResponse } from 'axios';

const chat_id = '-668255285';

export const sendMessage = (text: string) =>
    axios
        .post(
            `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`,
            {
                chat_id,
                text,
                parse_mode: 'MarkdownV2',
            },
        )
        .then(({ status }) => status)
        .catch(({ response }) => response.status);
