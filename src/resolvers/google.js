import axios from 'axios';

export default async function google(query) {
  const url = `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_KEY}&cx=${process.env.GOOGLE_ENGINE_ID}&q=${query}`;
  try {
    const response = await axios.get(url);
    return {
      numResults: response.data.searchInformation.formattedTotalResults,
      items: [
        response.data.items[0].snippet,
        response.data.items[1].snippet,
      ],
    };
  } catch (err) {
    return Promise.reject();
  }
}
