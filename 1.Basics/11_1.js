function solution(s){         
  let answer=0;
  for(let x of s){
    // ascii 코드 값을 넘겨줌 => 대문자는 아스키코드에서 65~90(25+1 개)까지 | 소문자는 97 ~ 122(25+1 개) 까지
    let num = x.charCodeAt();
    if(num >= 65 && num <=90) answer++;
  }
  return answer;
}

let str="KoreaTimeGood";
console.log(solution(str));