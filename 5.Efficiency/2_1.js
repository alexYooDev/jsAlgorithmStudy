function solution(arr1, arr2) {
  let answer = [];
  let a = arr1.sort((a, b) => {
    return a - b;
  });
  let b = arr2.sort((a, b) => {
    return a - b;
  });

  let p1 = (p2 = 0);
  while (p1 < a.length && p2 < b.length) {
    if (a[p1] === b[p2]) {
      answer.push(a[p1]);
      p1++;
      p2++;
    } else {
      if (a[p1] > b[p2]) {
        p2++;
      } else {
        p1++;
      }
    }
  }
  return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));

// 투포인터 알고리즘 사용시 시간 복잡도는 O(N+M)
