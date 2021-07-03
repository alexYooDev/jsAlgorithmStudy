function solution(s){  
  let answer = '';
  let mid = Math.floor(s.length/2)
  if (s.length%2==0){
    answer += s[mid-1]
  }
  answer += s[mid]
  return answer;
}
console.log(solution("lego"));