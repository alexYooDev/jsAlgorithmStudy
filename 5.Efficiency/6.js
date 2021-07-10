function solution(s) {
  let answer;
  const result = {};
  const arr = s.split('');
  arr.forEach((x) => {
    result[x] = (result[x] || 0) + 1;
  });
  answer = Object.keys(result).reduce((a, b) =>
    result[a] > result[b] ? a : b
  );
  return answer;
}

let str = 'BACBACCACCBDEDE';
console.log(solution(str));
