function solution(str) {
  let answer = 0;
  for (let x of str) {
    if (!isNaN(x)) {
      // 0*10+0 = 0, 0*10+2 = 2, 2*10+0 =20, 20*10+8 = 208
      answer = answer * 10 + Number(x);
    }
  }
  return answer;
}

let str = 'g0en2T0s8eSoft';
console.log(solution(str));
