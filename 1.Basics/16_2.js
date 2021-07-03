function solution(s) {
  let answer = 0;
  let pos = s.indexOf('k');
  // indexOf가 -1을 반환하면 해당 요소가 없는 것
  while(pos!==-1){
    answer++;
    pos=s.indexOf('k',pos+1)
  }
  return answer;
}
console.log(solution('ksekkset'));
