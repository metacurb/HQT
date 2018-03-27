import wordlist from './wordlist';

const removeQuestionMark = string => string.replace(/\?/g, '');

const isNegative = word => wordlist.negative.indexOf(word) !== -1;

const isBlacklisted = (questionString, word, index) => {
  if (wordlist.blacklist.indexOf(word) === -1) return index === 0 ? word : `${questionString} ${word}`;
  return questionString;
};

const cleanQuestion = (string) => {
  const words = string.split(' ');
  const question = removeQuestionMark(words.reduce(isBlacklisted, ''));

  return {
    question,
    negative: words.some(isNegative),
  };
};

const cleanAnswers = array => array.map(answer => answer.toLowerCase());

export default function parse(data) {
  const question = cleanQuestion(data.question);
  const answers = cleanAnswers(data.answers);

  return {
    ...question,
    answers,
  };
}
