function solution(a, b, c){
  let answer;
  let longest = 0
  let sumOtherTwo = a+b+c 

  if (a > b) longest = a;
  else longest = b;
  if (c > longest) longest = c;
  
  if ((sumOtherTwo-longest) <= longest) {
      answer = "NO";
  } else {
      answer = "YES"
  }

  return answer;
}

console.log(solution(13, 33, 17));