function solution(s) {
  let answer = '';
  for (let x of s) {
    let alph = x.charCodeAt();
    if (alph >= 65 && alph <= 90) {
      answer += String.fromCharCode(alph) + 32;
    } else if (alph >= 97 && alph <= 122) {
      answer += String.fromCharCode(alph) - 32;
    }
  }
  return answer;
}
console.log(solution('StuDY'));
