import 'babel-polyfill';
import chalk from 'chalk';
import reader from './reader';
import resolvers from './resolvers';
import log from './log';

require('dotenv').config();


(async () => {
  try {
    const questionData = await reader.init();
    const results = await resolvers.init(questionData);
    log.reset();
    console.log(results);
  } catch (err) {
    console.log(chalk.red.bold('Failed to read question.'));
  }
})();
