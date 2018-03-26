import scan from './scan';
import parse from './parse';

const questionData = {
  question: 'Which of these rivers is in italy?',
  answers: [
    'Tiber',
    'Thames',
    'Nile',
  ],
};

const init = () => new Promise((resolve, reject) => {
  resolve(questionData);
  reject();
});

export default {
  init,
};
