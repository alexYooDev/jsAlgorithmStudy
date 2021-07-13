function solution(arr) {
  let answer = [];
  answer.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > answer[answer.length - 1]) {
      answer.push(arr[i]);
    }
  }
  return answer.length;
}

let students = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(students));
