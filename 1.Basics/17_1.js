function solution(s) {
  let answer;
  // filter 함수는 콜백함수가 참일 경우, 새로운 배열을 만들어 반환
  answer = s.filter((v, i) => {
    // indexOf는 뒤에 나온 값이 앞과 같은 값이면 먼저 순회한 인덱스를 반환한다. => 중복 요소 확인 가능
    return s.indexOf(v) === i;
  });
  return answer;
}
let str = ['good', 'time', 'good', 'time', 'student'];
console.log(solution(str));
