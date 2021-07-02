function solution(s){
  // string 타입은 주소가 아닌 값이 복사되기 때문에 변경이 안됨
  let answer=s;
  //replace함수와 정규표현식을 사용하여 교체, 뒤에 글로벌을 붙여 전부 교체
  answer=answer.replace(/A/g, '#');
  return answer;
}

let str="BANANA";
console.log(solution(str));