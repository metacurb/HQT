import axios from 'axios';
import helpers from '../helpers';

export default async function google(question, answer = false) {
  const queryString = answer ? `${question} ${answer}` : question;
  const url = `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_KEY}&cx=${process.env.GOOGLE_ENGINE_ID}&q=${queryString}`;
  try {
    const response = await axios.get(url);
    const snippetText = response.data.items.reduce((text, item) => `${text}${item.snippet}`, '').toLowerCase();
    if (!answer) return snippetText;
    return {
      numResults: helpers.formatNumber(response.data.searchInformation.formattedTotalResults),
      hits: helpers.getHits(question, snippetText),
    };
  } catch (err) {
    return Promise.reject();
  }
}
