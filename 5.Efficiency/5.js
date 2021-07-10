function solution(k, arr) {
  let answer = 0;
  let sum = 0;
  // 배열의 인덱스 0부터 k-1까지 합을 sum에 누적
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }

  //k부터 arr의 마지막 인덱스 까지 순회
  for (let i = k; i < arr.length; i++) {
    // sum 변수에 arr[i] 값에서 arr[i-k] 값을 뺀 것을 sum에 누적: i-k는 슬라이딩 윈도우가 뒤로 이동하면서 이전 경계값을 빼는 것
    sum += arr[i] - arr[i - k];
    // answer 변수에 answer의 값과 sum의 값 중 최대값을 매번 체크하여 큰 것을 할당
    answer = Math.max(answer, sum);
  }
  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
