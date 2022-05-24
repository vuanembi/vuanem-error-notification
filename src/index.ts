import { HttpFunction } from '@google-cloud/functions-framework';
import YAML from 'yaml';

import { sendMessage } from './telegram';

const encodeMessage = (message: Record<string, any>) => {
    const _message = YAML.stringify(message, { indent: 4 });
    return ['```', _message, '```'].join('\n');
};

export const service = (body: Record<string, any>) =>
    sendMessage(encodeMessage(body));

export const main: HttpFunction = (req, res) => {
    const { body } = req;

    console.log({ body });

    service(body).then((status) => res.send({ status }));
};
