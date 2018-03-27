import axios from 'axios';
import helpers from '../helpers';

export default async function google(question, answer) {
  const url = `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_KEY}&cx=${process.env.GOOGLE_ENGINE_ID}&q=${question} ${answer}`;
  try {
    const response = await axios.get(url);
    const snippetText = response.data.items.reduce((text, item) => `${text}${item.snippet}`, '');
    return {
      numResults: response.data.searchInformation.formattedTotalResults,
      googleHits: helpers.getHits(question, snippetText),
    };
  } catch (err) {
    return Promise.reject();
  }
}
