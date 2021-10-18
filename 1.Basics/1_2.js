function solution(a, b, c) {
  let answer = Number.MAX_SAFE_INTEGER;
  if (a < answer) {
    answer = a;
  }
  if (b < answer) {
    answer = b;
  }
  if (c < answer) {
    answer = c;
  }
  return answer;
}

console.log(solution(11, 5, 6));
