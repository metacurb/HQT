import google from './google';
import wikipedia from './wikipedia';
import score from './score';
import getHits from '../helpers/getHits';
// import wolfram from './wolfram';

const init = async ({ question, answers }) => {
  const results = {
    wikiHits: [],
    googleHitsWithAnswers: [],
    googleHitsWithoutAnswers: [],
    numResults: [],
  };
  const googleQuestionResults = await google(question);
  await Promise.all(answers.map(async (answer) => {
    const answerLower = answer.toLowerCase();
    const googleWithAnswerResults = await google(question, answerLower);
    results.wikiHits.push([`${answer}`, await wikipedia(question, answer)]);
    results.googleHitsWithAnswers.push([`${answer}`, googleWithAnswerResults.hits]);
    results.googleHitsWithoutAnswers.push([`${answer}`, getHits(answerLower, googleQuestionResults)]);
    results.numResults.push([`${answer}`, googleWithAnswerResults.numResults]);
  }));
  // return score(answers, results, question.negative);
  return results;
};

export default {
  init,
};
