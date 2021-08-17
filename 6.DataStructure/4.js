function solution(s) {
  let answer;
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) {
      stack.push(Number(s[i]));
    } else {
      let rt = stack.pop();
      let lt = stack.pop();
      if (s[i] === '+') {
        stack.push(lt + rt);
      } else if (s[i] === '-') {
        stack.push(lt - rt);
      } else if (s[i] === '*') {
        stack.push(lt * rt);
      } else if (s[i] === '/') {
        stack.push(lt / rt);
      }
    }
  }
  answer = stack[0];
  return answer;
}
let str = '352+*9-';
console.log(solution(str));
