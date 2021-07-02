function solution(s) {
  let answer = '';
  for (let x of s) {
    word = x.charCodeAt();
    if (word >= 97 && word <= 122) {
      // (97-32 = 64) 32를 빼줌으로써 소문자로 변환
      answer += String.fromCharCode(word - 32);
    } else {
      answer += x;
    }
  }
  return answer;
}

let str = 'ItisTimeToStudy';
console.log(solution(str));
