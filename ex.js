function solution(s) {
  // set 집합자료형은 중복을 허용하지 않음
  let set = new Set(s);
  // 집합자료형을 배열로 변환
  console.log(set);
}
let str = [1, 1, 3, 3, 0];
console.log(solution(str));
