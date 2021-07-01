function solution(a, b, c){
  let answer;
  if (a<b) {
    answer = a
  } else {
    answer = b
  } if (c<answer){
    answer = c
  }
  return answer;
}
console.log(solution(6, 5, 11));


// instructor's solution: check if a is greater than b answer = a else asnwer = b
// if answer ( after checking with a and b) is greater than c, answer =c