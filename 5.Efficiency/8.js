function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map1) {
    // 비교 대상인 map2에 해당 키가 존재하지 않으면 거짓
    // map2의 value값이 map1의 value(개수) 값과 다를 경우 거짓
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }
  return true;
}

function solution(s, t) {
  let answer = 0;
  // t 문자열 요소를 저장하기 위한 hashMap
  let tH = new Map();
  // s 문자열의 슬라이딩 윈도우를 위한 hashMap
  let sH = new Map();

  //t로 비교대상 tH hashMap을 만든다.
  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }

  // 슬라이딩 윈도우를 위해 t의 길이를 저장
  let len = t.length - 1;

  // 0~len번 인덱스 전까지 돌며, len 크기의 슬라이딩 윈도우 해쉬맵을 만듬
  for (let i = 0; i < len; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }
  // 탐색을 위한 투 포인터 : lt 선언 (0번 인덱스부터 순회)
  let lt = 0;
  // rt 포인터는 len번 인덱스 부터 순회
  for (let rt = len; rt < s.length; rt++) {
    // len번째 요소를 sH 해쉬맵에 추가
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);
    // 비교 시작 => 같다면 answer를 1씩 증가
    if (compareMaps(sH, tH)) answer++;
    // 슬라이딩 윈도우의 끝 부분을 빼서 전진
    sH.set(s[lt], sH.get(s[lt]) - 1);
    // 해쉬맵의 값이 0인 부분 제거
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    // lt 증가
    lt++;
  }

  return answer;
}

let a = 'bacaAacba';
let b = 'abc';
console.log(solution(a, b));
