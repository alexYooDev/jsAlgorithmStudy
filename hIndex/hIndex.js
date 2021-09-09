function solution(citations) {
  citations.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= citations.length - i) {
      return citations.length - i;
    }
  }
  return 0;
}

console.log([3, 0, 6, 1, 5]);
