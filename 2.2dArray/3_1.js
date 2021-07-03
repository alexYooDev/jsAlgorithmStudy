function solution(a, b) {
  let answer = '';
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) answer += 'D ';
    // a가 승리하는 경우 : a가 1(가위)일 때 b는 3(보), a가 2(바위)일 때, b는 가위(1), a가 3(보)일 때 b는 바위(b)
    else if (a[i] === 1 && b[i] === 3) answer += 'A ';
    else if (a[i] === 2 && b[i] === 1) answer += 'A ';
    else if (a[i] === 3 && b[i] === 2) answer += 'A ';
    else answer += 'B ';
  }
  return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));

// 경우를 분류할 때에는 기준을 잘 잡는 것이 중요하다.
