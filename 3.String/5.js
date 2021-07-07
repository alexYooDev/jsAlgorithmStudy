function solution(s) {
  let answer = '';
  let cnt = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      cnt++;
    } else {
      if (cnt > 1) {
        answer += s[i];
        answer += cnt;
      } else {
        answer += s[i];
      }
      cnt = 1;
    }
  }
  return answer;
}

let str = 'KKHSSSSSSSE';
console.log(solution(str));
