function solution(s){
    let answer=s;
    let arr = s.split('');
    let converted = arr.map((i) => i.replace('A','#'));
    answer = converted.join('');
    return answer;
}

let str="BANANA";
console.log(solution(str));