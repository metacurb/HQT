import WebSocket from 'ws';
import fs from 'fs';

export default function scan() {
  // const ws = new WebSocket('https://ws-quiz.hype.space/ws/44250');
  const ws = new WebSocket('https://ws-quiz.hype.space/ws/44250', {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE0MjIyODI0LCJ1c2VybmFtZSI6IkJlYXVndXN0IiwiYXZhdGFyVXJsIjoiczM6Ly9oeXBlc3BhY2UtcXVpei9hL2U0LzE0MjIyODI0LVh3OUl5aS5qcGciLCJ0b2tlbiI6IkRSeDNtSSIsInJvbGVzIjpbXSwiY2xpZW50IjoiIiwiZ3Vlc3RJZCI6bnVsbCwidiI6MSwiaWF0IjoxNTIyMTc4MzczLCJleHAiOjE1Mjk5NTQzNzMsImlzcyI6Imh5cGVxdWl6LzEifQ.6Ji3UlINy8j0yLYbNa77Iie8jW9qr07LoLR4tQ-MMYI',
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
