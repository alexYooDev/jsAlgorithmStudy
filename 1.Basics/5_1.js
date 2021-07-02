function solution(arr){         
  
  // initialize with the safe biggest num
  let answer, min = Number.MAX_SAFE_INTEGER; 
  for(let i=0; i<arr.length; i++){
    // if the elements in arr are smaller than the value of min, put arr[i] in min
    if(arr[i]<min) min=arr[i];  
  }
  answer = min
  return answer ;

}

let arr=[5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));