function solution(n, k, card) {
  let answer;
  let set = new Set();

  // n개를 뽑는 조합을 만드려면 n개의 for문 돌려야 함 = > i = 0, j = i + 1, s = j+1
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let s = j + 1; s < n; s++) {
        // Set 자료형에 card에서 3개 뽑은 i,j,s 의 값을 모두 더해 넣음
        set.add(card[i] + card[j] + card[s]);
      }
    }
  }
  //Set을 배열화 => sort함수에서 내림차순은 콜백함수 (a,b) => b-a (a-b는 오름차순)
  let arr = Array.from(set).sort((a, b) => b - a);
  answer = arr[k - 1];
  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
