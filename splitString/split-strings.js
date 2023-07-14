function solution(str) {
  const pairs = [];

  let currentPair = "";

  str.split("").forEach((char) => {
    currentPair += char;
    if (currentPair.length === 2) {
      pairs.push(currentPair);
      currentPair = "";
    }
  });
  if (currentPair.length === 1) {
    pairs.push(currentPair + "_");
  }
  return pairs;
}

module.exports = solution;
