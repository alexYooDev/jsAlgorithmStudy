// 잘못 해석한 문제

function solution(n, arr) {
  let answer = [];
  for (x of arr) {
    if (x > n) {
      answer.push(x);
    }
  }
  console.log(answer);
  return answer;
}

let n = 5;
let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(n, arr));
