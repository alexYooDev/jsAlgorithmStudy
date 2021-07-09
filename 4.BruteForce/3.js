function solution(test) {
  let answer = 0;
  let m = test.length;
  let n = test[0].length;
  //  4개의 점수중 2명을 추릴 수 있는 모든 경우의 수
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      // 카운트 할 변수
      let cnt = 0;
      // 시험의 횟수
      for (let k = 0; k < m; k++) {
        let pi = 0;
        let pj = 0;
        // 시험점수 개수
        for (let s = 0; s < n; s++) {
          // 경우의 수 (i,j) 중 i와 일치하는 점수를 pi에 저장
          if (test[k][s] === i) pi = s;
          // 경우의 수 (i,j) 중 j와 일치하는 점수를 pj에 저장
          if (test[k][s] === j) pj = s;
        }
        // pi표본이 pj보다 높을 경우 cnt를 1증가
        if (pi < pj) cnt++;
      }
      // 반복 후 cnt가 시험 횟수와 동일할 경우 => 모든 경우에서 pj가 점수가 높음
      if (cnt === m) {
        //멘토 멘티 관계가 성립하는 경우의 수 증가
        answer++;
      }
    }
  }
  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
