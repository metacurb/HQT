import scan from './scan';
import parse from './parse';

const data = {
  question: 'Which of these rivers is in italy?',
  answers: [
    'Tiber',
    'Thames',
    'Nile',
  ],
};

const init = async () => Promise.resolve(parse(data));

export default {
  init,
};
