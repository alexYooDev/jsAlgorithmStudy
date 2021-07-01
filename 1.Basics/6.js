function solution(arr){
  let answer = [];
  let odd = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i]%2===1) {
      odd.push(arr[i]);
    }
  }
  answer.push(odd.reduce((a,b) => a+b))
  answer.push(Math.min(...odd))
  return answer
}

console.log(solution([12,77,38,41,53,92,85]))