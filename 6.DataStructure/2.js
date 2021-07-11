function solution(s) {
  let answer;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ')') {
      while (stack.pop() !== '(');
    } else stack.push(s[i]);
  }
  answer = stack.join('');
  return answer;
}

let str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
console.log(solution(str));
