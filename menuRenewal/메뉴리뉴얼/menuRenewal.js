/**공통문자열을 찾는 문제
 *  문자열의 요소로 조합 (combination) 을 만드는 방법: 모든 경우의 수를 따져보는 것이기 때문에 완전탐색이다.
 * 각각의 문자열을 순회하면서 공통문자열의 길이가 2이면, 새로운 배열에 공통문자열을 추가한다.
 *  중복을 배제하고, 입출력 예의 법칙을 따라 각각으 공통문자열은 사전순으로 정렬하여 추가
 */

function comb(arr, n) {
  let result = [];

  if (n === 1) return arr.map((value) => [value]);
  arr.forEach((p, idx, org) => {
    let leftover = org.slice(idx + 1);
    let combination = comb(rest, n - 1);
  });
}

function solution(orders, course) {
  let answer = [];
  return answer;
}

console.log(
  solution(['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'], [2, 3, 4])
);
