function solution(str1, str2) {
  let answer = 'YES';
  let sH1 = new Map();
  let sH2 = new Map();

  for (let x of str1) {
    if (sH1.has(x)) {
      sH1.set(x, sH1.get(x) + 1);
    } else {
      sH1.set(x, 1);
    }
  }
  for (let y of str2) {
    if (sH2.has(y)) {
      sH2.set(y, sH2.get(y) + 1);
    } else {
      sH2.set(y, 1);
    }
  }

  let sH1sorted = new Map([...sH1.entries()].sort());
  let sH2sorted = new Map([...sH2.entries()].sort());
  console.log(sH1sorted);
  console.log(sH2sorted);
  if (sH1sorted.values() === sH2sorted.values()) answer = 'YES';
  else answer = 'NO';
  return answer;
}

let a = 'AbaAeCe';
let b = 'baeeACA';
console.log(solution(a, b));
