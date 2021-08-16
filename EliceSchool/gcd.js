
function gcd(a,b) {
  let i = Math.min(a,b)
  while (true){
    if (a%i === 0 && b%i===0){
      return i
    }
    i = i - 1 
  }
}

console.log(gcd(24,60))