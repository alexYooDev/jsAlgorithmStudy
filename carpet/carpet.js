function solution(brown, yellow) {
  let answer = [];
  let tile = brown + yellow;
  for (let i = tile; i > tile.length; i--) {
    console.log(i);
  }
}

console.log(solution(10, 2));
