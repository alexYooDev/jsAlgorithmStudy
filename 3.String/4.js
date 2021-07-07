function solution(s, t) {
  let answer = [];
  let answer1 = [];
  let result = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) {
      answer.push(0);
    } else {
      answer.push(Math.abs(s.indexOf(s[i]) - s.indexOf(t, i)));
    }
  }
  for (let j = s.length - 1; j >= 0; j--) {
    if (s[j] === t) {
      answer1.push(0);
    } else {
      answer1.push(Math.abs(s.indexOf(s[j]) - s.indexOf(t, j)));
    }
  }
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] <= answer1[i]) {
      result.push(answer[i]);
    } else {
      result.push(answer1[i]);
    }
  }
  console.log(answer);
  console.log(answer1);
  return result;
}

let str = 'teachermode';
console.log(solution(str, 'e'));
