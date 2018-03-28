import WebSocket from 'ws';
import fs from 'fs';

export default function scan() {
  // const ws = new WebSocket('https://ws-quiz.hype.space/ws/44250');
  const ws = new WebSocket('https://ws-quiz.hype.space/ws/44250', {
    headers: {
      Authorization: 'Bearer ', // Place bearer token in here!
    },
  });

  ws.on('open', () => {
    console.log('connected');
  });

  ws.on('close', () => {
    console.log('disconnected');
  });

  ws.on('message', (data) => {
    const oData = JSON.parse(fs.readFileSync('data.json'));
    oData.messages.push(JSON.parse(data));
    const nDataJSON = JSON.stringify(oData, null, '\t');
    fs.writeFileSync('data.json', nDataJSON);
  });
}
