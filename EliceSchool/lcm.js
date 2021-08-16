function gcd(a, b) {
  let i = Math.min(a, b);
  while (true) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
    i = i - 1;
  }
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

console.log(gcd(60, 24));
console.log(lcm(60, 24));
