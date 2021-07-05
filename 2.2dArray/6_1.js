function solution(arr) {
  // 최대값을 저장해야 되기 때문에 가장 작은 값 할당
  let answer = Number.MIN_SAFE_INTEGER;
  // 행렬 내 배열 개수
  let n = arr.length;
  // 행의합과 열의 합
  let sum1 = 0,
    sum2 = 0;

  //행 탐색과 열 탐색
  for (let i = 0; i < n; i++) {
    // 내부 for문을 돌고 sum1 과 sum2의 값을 0으로 초기화 해야 각 행과 열의 요소합을 구할 수 있음
    sum1 = sum2 = 0;
    for (let j = 0; j < n; j++) {
      //행의 총합
      sum1 += arr[i][j];
      // 열의 총합
      sum2 += arr[j][i];
    }
    answer = Math.max(answer, sum1, sum2);
  }
  sum1 = sum2 = 0;
  for (let i = 0; i < n; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][n - i - 1];
  }
  answer = Math.max(answer, sum1, sum2);
  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));

//시간 복잡도 O(N^2)
