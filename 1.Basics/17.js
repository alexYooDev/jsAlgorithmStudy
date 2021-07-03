function solution(s) {
  let set = new Set(s);
  let answer = Array.from(set);
  return answer;
}
let str = ['good', 'time', 'good', 'time', 'student'];
console.log(solution(str));
