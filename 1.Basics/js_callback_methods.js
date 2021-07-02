
/* 
forEach, map, filter, reduce
위의 메서드들은 고차함수 (매개변수로 콜백함수를 전달받음)

(predicate, thisArg) 함수는 필수적으로 넘겨받아야 함

forEach === 배열의 요소들을 탐색, 확인하며 특정 함수를 수행해야 할 때 반복문 대신 사용할 수 있다.

function forEach(predicate, thisArg){
  for(let i=0; i <a.length; i++){
    predicate(a[i], i); 콜백함수는 value (값)= a[i], index(인덱스) = i 로 매개변수를 받음
  }
}

map = 배열의 요소들을 탐색, 확인하며 특정 함수를 수행한 새로운 배열을 생성하여 반환

function map(predicate, thisArg){
  빈 배열을 생성
  let list = [] 
  배열의 요소를 하나씩 탐색
  for(let i = 0; i<a.length; i++){
    콜백함수에 값과 인덱스를 받아 실행한 값을 리스트에 추가
    list.push(predicate(a[i], i));
    리스트를 반환
  } return list;
}

let answer = a.map(function(v,i){
    if(v%2===0) return v;
  }, [1,2]);
  console.log(answer)
[10, 12, undefined, 14, undefined] 새로 생성한 배열은 항상 원본 배열과 길이가 같다


filter = 배열의 각 요소에 콜백함수를 적용하여 새로운 배열을 만드는 점에서는 map과 동일
콜백함수가 참으로 리턴하는 요소만 새로운 배열의 요소로 함
원본 배열에서 원하는 값만 새로 만들어 뽑아낼 때 사용
그러나 새로 생성된 배열의 길이가 원본 배열의 길이와 같지 않아도 됨

function filter(predicate, thisArg){
  let list = []
  for (let i = 0; i<a.length; i++){
    if(predicate(a[i], i)) list.push(a[i]);
  }
  return list;
}

reduce = 축적된 값을 반환

function reduce(predicate, val){
  val 값으로 초기화
  let result = val;
  배열의 요소들에 
  for (let i = 0; i < a.length; i++){
    result를 콜백함수로 실행한 값 축적하여 할당
    result = predicate(result, a[i]);
  }
  result 값 반환
  return result;
}
*/

  a = [10,11,12,13,14,15];

  answer=a.reduce(function(acc,val){
    return acc+val;
  }, 0);
  console.log(answer);