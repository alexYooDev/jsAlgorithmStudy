function solution(s) {
  let answer = 'YES';
  s = s.toLowerCase();
  let reversed = s.split('').reverse().join('');
  if (reversed !== s) {
    answer = 'NO';
  }
  return answer;
}

let str = 'goooG';
console.log(solution(str));
