function solution(s) {
  let answer = 'YES';
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(s[i]);
      // s[i] 가 닫는 괄호일 경우
    } else {
      // 여는 괄호 짝이 제일 상단에 있다면
      if (stack[stack.length - 1] === '(') {
        // 최상단 값을 뺌
        stack.pop();
        // 그렇지 않다면
      } else {
        // 닫는 괄호 넣어줌
        stack.push(s[i]);
      }
    }
  }
  console.log(stack);
  if (stack.length === 0) answer = 'YES';
  else answer = 'NO';
  return answer;
}

let a = '(())())';
console.log(solution(a));
