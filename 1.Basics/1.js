function solution(a, b, c){
    let answer = c < (a < b ? a : b) ? c : (a < b ? a : b)  
    return answer;
}
console.log(solution(6, 5, 11));

//solved on my own using ternary if 
//if c is smaller than a,b => answer = c
//else => check if a is smaller than b: if yes, answer = a else: answer = b
