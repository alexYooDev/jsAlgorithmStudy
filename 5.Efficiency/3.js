function solution(m, arr) {
  let answer = 0,
    lt = 0,
    sum = 0;
  for (let i = 0; i < arr.length; i++) {
    answer = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      answer += arr[j];
      if (answer === m) {
        lt += 1;
        break;
      }
    }
  }
  return lt;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));

// 그러나 이 방법의 시간 복잡도는 O(N^2)
