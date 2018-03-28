import WebSocket from 'ws';
import fs from 'fs';
import parse from './parse';
import resolvers from '../resolvers';
import log from '../log';

const storeQuestion = (question) => {
  const current = JSON.parse(fs.readFile('./data/questions.json'));
  current.questions.push(JSON.parse(question));
  fs.writeFile('data.json', JSON.stringify(current, null, '\t'));
};

export default function scan(socketUrl) {
  const ws = new WebSocket(socketUrl, {
    headers: {
      Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
    },
  });

  ws.on('open', () => {
    log.success('Connected to websocket');
  });

  ws.on('close', () => {
    log.warn('Disconnected from websocket');
  });

  ws.on('message', async (data) => {
    if (data.type !== 'question') return;
    log.success('Question found, resolving... \n');
    const question = parse(data);
    const results = await resolvers.init(question);
    storeQuestion(question);
    console.log(results);
  });
}
