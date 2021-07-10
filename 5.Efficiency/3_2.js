function solution(m, arr) {
  let answer = 0,
    lt = 0,
    sum = 0;
  // rt는 arr을 순회; rt는 선발로 순회하는 포인터
  for (let rt = 0; rt < arr.length; rt++) {
    // 포인터 값을 sum 변수에 누적한다.
    sum += arr[rt];
    // sum이 목표 수 m과 같으면 answer를 1씩 증가
    if (sum === m) {
      answer++;
    }
    // sum의 값이 m 이거나 m 이상이 된다면
    while (sum >= m) {
      // lt포인터 순회 시작 => sum에서 arr[lt] 값을 뺀다. lt는 1씩 증가 하며 앞으로 탐색.
      sum -= arr[lt++];
      // sum이 arr[lt]를 빼다가 목표수와 같으면 answer를 1씩 증가.
      if (sum === m) {
        answer++;
      }
    }
  }
  // 순회가 끝나면 반복문도 끝남
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
