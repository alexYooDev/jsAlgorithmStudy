function solution(arr1, arr2) {
  let answer = arr1.concat(arr2);
  // 그러나 이 시간 복잡도는 sort로 인해 O(NlogN)
  answer.sort((a, b) => a - b);
  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
