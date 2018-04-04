import wordlist from './wordlist';

const removeSymbols = string => string.replace(/[^a-zA-Z ]/g, '');

const isNegative = word => wordlist.negative.indexOf(word) !== -1;

const isBlacklisted = (questionString, word, index) => {
  if (wordlist.blacklist.indexOf(word) === -1) return index === 0 ? word : `${questionString} ${word}`;
  return questionString;
};

const cleanQuestion = (string) => {
  const words = string.split(' ');
  const question = removeSymbols(words.reduce(isBlacklisted, '')).toLowerCase();

  return {
    question,
    negative: words.some(isNegative),
  };
};

const cleanAnswers = array => array.map(answer => answer.text);

export default function parse(data) {
  const question = cleanQuestion(data.question);
  const answers = cleanAnswers(data.answers);

  return {
    ...question,
    answers,
  };
}
