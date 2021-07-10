function solution(str1, str2) {
  let answer = 'YES';
  let sH = new Map();

  if (str1.length !== str2.length) answer = 'NO';

  for (let x of str1) {
    if (sH.has(x)) {
      sH.set(x, sH.get(x) + 1);
    } else {
      sH.set(x, 1);
    }
  }
  for (let y of str2) {
    // 비교 해시맵에 특정 값이 없거나, 개수가 이미 0인 경우
    if (!sH.has(y) || sH.get(y) === 0) answer = 'NO';
    sH.set(y, sH.get(y) - 1);
  }

  return answer;
}

let a = 'AbaAeCe';
let b = 'baeeACA';
console.log(solution(a, b));
