const calcTotal = (accum, collection) => accum + collection[1];

const calcPercent = (index, results, totals, weight) => results.map((collection) => {
  const [key, value] = collection;
  const percentage = Math.floor((value / totals) * 100);
  const weightedPercentage = Math.floor(percentage * (weight / 100));
  return [key, weightedPercentage];
});

export default function score(results, negative) {
  const weights = {
    wikiHits: 35,
    googleHits: 35,
    numResults: 15,
  };

  const scores = Object.keys(results).forEach((source, index) => {
    const totals = results[source].reduce(calcTotal, 0);
    const percentages = calcPercent(index, results[source], totals, weights[source]);
    console.log(percentages);
  });
  // return results.negative ? ordered[ordered.length-1] : ordered[0];
}

