function solution(arr) {
  let answer = 0,
    cnt = 0;
  // 배열의 요소 value를 탐색
  for (x of arr) {
    // 1이라면
    if (x === 1) {
      // 1씩 증가
      cnt += 1;
      // answer에 누적
      answer += cnt;
      // 다른 값이라면 0으로 초기화
    } else cnt = 0;
  }
  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
