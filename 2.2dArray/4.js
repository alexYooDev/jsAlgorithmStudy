function solution(arr) {
  let answer = [],
    cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    // arr[i]가 1일 경우, cnt에 1씩 더한 값을 answer에 넣음
    if (arr[i] === 1) {
      cnt += 1;
      answer.push(cnt);
      // arr[i]가 0일 경우, cnt를 0으로 초기화
    } else if (arr[i] === 0) {
      cnt = 0;
    }
  }
  //reduce 고차함수로 각 요소 값을 누적함
  answer = answer.reduce((a, b) => a + b);
  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
