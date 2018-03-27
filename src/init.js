import 'babel-polyfill';
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
    log.error('Failed to read question.');
  }
})();
