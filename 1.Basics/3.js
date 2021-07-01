function solution(n){
    let answer;
    answer = n%12 ? parseInt(n/12)+1 : parseInt(n/12);
    return answer;
}
console.log(solution(25));