function solution(arr){
    let answer=[];
    let sum = arr.reduce((a,b) => a+b);
    let remain = sum - 100;
    let fake = []
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < i; j++){
            if (arr[i]+arr[j] == remain){
                fake.push(arr[i])
                fake.push(arr[j])
            }
        }
    }
    answer = arr.filter(x => !fake.includes(x));
    return answer
}

let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));