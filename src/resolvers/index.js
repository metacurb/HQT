import google from './google';
import wikipedia from './wikipedia';
import score from './score';
// import wolfram from './wolfram';

const init = async ({ question, answers }) => {
  const results = {
    wikiHits: [],
    googleHits: [],
    numResults: [],
  };
  await Promise.all(answers.map(async (answer) => {
    const googleResults = await google(question, answer);
    results.wikiHits.push([`${answer}`, await wikipedia(question, answer)]);
    results.googleHits.push([`${answer}`, googleResults.hits]);
    results.numResults.push([`${answer}`, googleResults.numResults]);
  }));
  return score(answers, results, question.negative);
};

export default {
  init,
};
