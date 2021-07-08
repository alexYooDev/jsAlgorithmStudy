function solution(a, b) {
  let answer = '';
  for (let i = 0; i < a.length; i++) {
    // a와 b가 같으면 비김(D)
    if (a[i] === b[i]) answer += 'D\n';
    // a의 값이 b보다 1만큼 크거나, 2만큼 작으면 A 승리
    else if (a[i] - 1 === b[i] || a[i] + 2 === b[i]) answer += 'A\n';
    // b의 값이 a보다 1만큼 크거나, 2만큼 작으면 B 승리
    else if (b[i] - 1 === a[i] || b[i] + 2 === a[i]) answer += 'B\n';
  }
  return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
