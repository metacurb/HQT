import axios from 'axios';
import helpers from '../helpers';

export default async function wikipedia(question, answer) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${answer}&prop=extracts&exchars=1250&explaintext=true&format=json&formatversion=2`;
  try {
    const response = await axios.get(url);
    const snippetText = response.data.query.pages.reduce((text, page) => `${text}${page.extract}`, '');
    return helpers.getHits(question, snippetText);
  } catch (err) {
    return Promise.reject();
  }
}
