function solution(s, t) {
  let answer = [];
  let min = 1000;
  for (let x of s) {
    if (x === t) {
      min = 0;
      answer.push(min);
    } else {
      min++;
      answer.push(min);
    }
  }
  min = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      min = 0;
      answer[i] = min;
    } else {
      min++;
      answer[i] = Math.min(answer[i], min);
    }
  }
  return answer;
}

let str = 'teachermode';
console.log(solution(str, 'e'));
