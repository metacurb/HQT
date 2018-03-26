import chalk from 'chalk';
import google from './google';
import wikipedia from './wikipedia';
import wolfram from './wolfram';

const init = async ({ question, answers }) => {
  const results = {};
  await Promise.all(answers.map(async (answer) => {
    results[answer] = {
      google: await google(`${question} ${answer}`),
      wikipedia: await wikipedia(question, answer),
    };
  }));
  return results;
};

export default {
  init,
};
