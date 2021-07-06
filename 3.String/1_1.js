function solution(s) {
  let answer = 'YES';
  s = s.toLowerCase();
  let n = s.length;
  for (let i = 0; i < parseInt(n / 2); i++) {
    if (s[i] !== s[n - 1 - i]) {
      answer = 'NO';
    }
  }
  return answer;
}

let str = 'goooG';
console.log(solution(str));
