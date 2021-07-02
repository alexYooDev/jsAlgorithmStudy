function solution(s){         
  let answer=0;
  for(let x of s){
    if (x === x.toUpperCase()) {
      console.log(x.toUpperCase(),x)
    }
  }
  return answer;
}

let str="KoreaTimeGood";
console.log(solution(str));