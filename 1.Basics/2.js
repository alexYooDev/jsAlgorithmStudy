function solution(a, b, c){
    let answer;
    let longest = 0
    let short1 = 0
    let short2 = 0

    if (a > b) longest = a, short1 = b, short2 = c;
    else longest = b, short1 = a, short2 = c;
    if (c > longest) longest = c, short1 = a, short2 = b;
    
    if (short1+short2 >= longest) {
        answer = "YES";
    } else {
        answer = "NO"
    }

    return answer;
}

console.log(solution(6, 7, 11));

// IOT make a triange with 3 lines, the sum of smaller 2 line should be at least bigger than the longest 1 line