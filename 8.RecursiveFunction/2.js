function solution(n) {
  let answer = '';
  function DFS(n) {
    // 먼저 재귀함수의 종료조건을 if문으로 명시
    if (n === 0) return;
    else {
      // n/2 한 값을 주어 재귀한다.
      DFS(parseInt(n / 2));
      // 이 작업은 재귀가 종료된 후 최상단 작업부터 실행
      answer += n % 2;
    }
  }
  DFS(n);
  return answer;
}

console.log(solution(11));
