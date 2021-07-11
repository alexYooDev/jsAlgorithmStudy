function solution(v) {
  let answer = '';
  /**전위 순회
  function DFS(v) {
    if (v > 7) {
      return;
    } else {
      // 루트 처리
      console.log(v);
      // 왼쪽 처리
      DFS(v * 2);
      // 오른쪽 처리
      DFS(v * 2 + 1);
    }
  }
  */
  /** 중위순회 
  function DFS(v) {
    if (v > 7) {
      return;
    } else {
      //왼쪽 처리
      DFS(v * 2);
      //루트 처리
      console.log(v);
      // 오른쪽 처리
      DFS(v * 2 + 1);
    }
  }
  */
  function DFS(v) {
    if (v > 7) {
      return;
    } else {
      // 왼쪽 처리
      DFS(v * 2);
      // 오른쪽 처리
      DFS(v * 2 + 1);
      // 루트 처리
      console.log(v);
    }
  }
  DFS(v);
  return answer;
}

console.log(solution(1));
