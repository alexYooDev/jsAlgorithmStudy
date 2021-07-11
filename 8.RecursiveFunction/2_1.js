function solution(n) {
  let answer = [];
  while (n !== 0) {
    answer.push(n % 2);
    n = parseInt(n / 2);
  }
  answer = answer.reverse().join('');
  return answer;
}

console.log(solution(11));
