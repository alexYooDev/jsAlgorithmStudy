function solution(arr){         
    let answer = Math.min(...arr); //if using min function for array: use '...' (전개연산자)
    let answer2 = Math.min.apply(null, arr); // .apply(object(this), arr)
    return answer;

}

let arr=[5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));