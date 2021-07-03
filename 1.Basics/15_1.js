function solution(s){  
  let answer = '';
  let mid = Math.floor(s.length/2);
  // substring = 문자열 자르기 ( idx부터, idx전까지)
  // substr = 문자열 뽑아내기 (idx부터, n개 뽑기)
  if(s.length%2==1) {
    // answer=s.substring(mid,mid+1);
    answer=s.substr(mid,1)
  } else {
    // answer=s.substring(mid-1,mid+1)
    answer=s.substr(mid-1,2)
  }
  return answer;
}
console.log(solution("studys"));