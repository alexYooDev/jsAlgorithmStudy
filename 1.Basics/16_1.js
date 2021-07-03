function solution(s) {
  let answer = '';
  // indexOf() 첫번째로 발견된 인덱스 반환, 인자를 넘겨주면 특정 인덱스 이후에 발견한 것
  // 발견 못하면 -1 리턴
  for (let i = 0; i < s.length; i++) {
    // 중복된 문자는 indexOf 값이 본래 인덱스와 다름 (앞인덱스의 같은 값의 인덱스 가리킴)
    // 중복되지 않은 문자, indexOf의 값과 본래 인덱스 값이 같은 것만 answer에 추가한다.
    if (s.indexOf(s[i]) === i) answer += s[i];
  }
  return answer;
}
console.log(solution('ksekkset'));
