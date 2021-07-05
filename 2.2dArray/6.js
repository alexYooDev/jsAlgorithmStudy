function solution(arr) {
  let answer = [];
  let sum_h = [];
  let sum_v = [];
  let num = 0;
  let sum_angle_l = 0;
  let sum_angle_r = 0;
  let x = 0;

  // 각 행의 합
  // 이차원 배열 내 배열들의 인덱스
  for (let i = 0; i < arr.length; i++) {
    // 그 배열의 요소 인덱스
    for (let j = 0; j < arr[i].length; j++) {
      // 임시 컨테이너 변수 num에 배열 요소의 합을 누적
      num += arr[i][j];
    }
    // 한 배열으로 부터 누적해 더한 요소 값을 배열에 넣음
    sum_h.push(num);
    // 임시 변수를 초기화 -> 다음 배열 탐색으로 반복
    num = 0;
  }

  // 이차원 배열 내 각 배열 인덱스
  for (let i = 0; i < arr.length; i++) {
    // 그 배열의 요소 인덱스
    for (let j = 0; j < arr[i].length; j++) {
      //i와 j를 반전하면 행렬을 세로로 탐색 -> 다른 배열의 0번째 인덱스...4번째 인덱스 값끼리 더해 누적한다.
      num += arr[j][i];
    }
    // 그 결과를 배열에 한 값씩 넣는다.
    sum_v.push(num);
    // 임시 변수 0으로 초기화
    num = 0;
  }
  // 왼쪽 위에서 오른쪽 아래까지의 대각선
  for (let i = 0; i < arr.length; i++) {
    // 각자 같은 숫자를 가리키는 것을 이용, 더한 값 누적
    sum_angle_l += arr[i][i];
  }

  //오른쪽 위에서 왼쪽 아래까지의 대각선
  for (let i = arr.length - 1; i >= 0; i--) {
    //배열 거꾸로 돌림
    sum_angle_r += arr[i][x];
    x++;
  }
  answer.push(Math.max(...sum_h), Math.max(...sum_v), sum_angle_l, sum_angle_r);
  return Math.max(...answer);
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
