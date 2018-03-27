export default function getHits(question, text) {
  const words = question.split(' ');
  let hits = 0;
  words.forEach((word) => {
    if (text.toLowerCase().indexOf(word) === -1) return;
    hits += 1;
  });
  return hits;
}
