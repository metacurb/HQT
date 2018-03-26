import axios from 'axios';

export default async function wikipedia(question, answer) {
  let hits = 0;
  const words = question.split(' ');
  const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${answer}&prop=extracts&exchars=750&explaintext=true&format=json&formatversion=2`;
  try {
    const response = await axios.get(url);
    const snippet = response.data.query.pages[0].extract;
    words.forEach((word) => {
      if (snippet.indexOf(word) === -1) return;
      hits += 1;
    });
    return { hits };
  } catch (err) {
    return { hits };
  }
}
