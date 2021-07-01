
/* forEach, map, filter, reduce
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
*/
a = [10,12,13,14,15]

let answer = a.map(function(v,i){
  return v*v;
}, [1,2]);
console.log(answer)

