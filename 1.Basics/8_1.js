function solution(arr){
  // 얕은 복사 --> arr을 수정하면 answer또한 수정됨 (같은 값을 바라보기 때문)
  let answer=arr; 
  //(20)+7+23+19.... thisArg(두번재 매개변수) = 초기화 값
  let sum = arr.reduce((a,b) => a+b, 0);
  // 내부로 돌 j가 배열 끝 요소까지 순회할 것이기 때문에 i는 arr.length-1만큼 순회하면 됨
  for(let i=0; i<arr.length-1; i++){
    // j는 i뒤 인덱스 부터 순회하여s 배열 끝까지 돔
    for(let j=i+1; j<arr.length; j++){
      if((sum-(arr[i]+arr[j]))===100){
//요소를 제거 (앞 인덱스를 먼저 삭제하면 뒤에 삭제할 인덱스가 앞으로 당겨지기 때문에 뒤 인덱스 먼저 제거)
        arr.splice(j, 1);
        arr.splice(i, 1);
      }
    }
  }
  return answer
}

let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));