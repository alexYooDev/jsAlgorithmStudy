function solution(s) {
  // set 집합자료형은 중복을 허용하지 않음
  let set = new Set(s);
  // 집합자료형을 배열로 변환
  let answer = Array.from(set);
  return answer;
}
let str = ['good', 'time', 'good', 'time', 'student'];
console.log(solution(str));
