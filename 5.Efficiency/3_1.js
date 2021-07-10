function solution(m, arr) {
  let answer = 0,
    lt = 0,
    rt = 0,
    sum = 0;
  for (let i = 0; i < arr.length; i++) {
    rt = arr[i];
    sum += rt;
    if (sum > m) {
      lt = arr[i];
      sum -= lt;
    }
    if (sum === m) {
      answer += 1;
      console.log(lt, rt);
    }
  }
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
