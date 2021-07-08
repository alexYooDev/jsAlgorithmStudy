function isPrime(x) {
  if (x === 1) return false;
  for (let i = 2; i < x; i++) {
    if (x % i === 0) return false;
  }
  return true;
}

function solution(arr) {
  let answer = [];
  let reverse = [];
  for (let x of arr) {
    let reversed = parseInt(x.toString().split('').reverse().join(''));
    reverse.push(reversed);
  }
  for (let y of reverse) {
    if (isPrime(y)) {
      answer.push(y);
    }
  }
  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
