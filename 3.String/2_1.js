function solution(s) {
  let answer = 'YES';
  //소문자를 제외한 모든 문자 제거 정규식
  s = s.toLowerCase().replace(/[^a-z]/g, '');
  // 공백없이 합친 문자열은 그 전체로 뒤집는 방식으로도 펠린드롬 확인 가능
  if (s.split('').reverse().join('') !== s) {
    answer = 'NO';
  }
  console.log(s);
  return answer;
}

let str = 'found7, time: study; Yduts; emit, 7Dnuof';
console.log(solution(str));
