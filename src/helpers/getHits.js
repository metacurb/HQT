export default function getHits(question, text) {
  const words = question.split(' ');
  return words.reduce((hits, word) => {
    const re = new RegExp(word, 'g');
    return hits + (text.match(re) || []).length;
  }, 0);
}
