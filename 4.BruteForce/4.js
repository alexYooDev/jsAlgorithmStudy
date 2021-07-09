function solution(m, product) {
  let answer = 0;
  let n = product.length;
  // a[0] 상품 가격, a[1] 배송비 => 총 비용으로 정렬
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  for (let i = 0; i < n; i++) {
    // 할인 금액을 적용한 모든 금액을 예산에서 제함 (상품가격은 항상짝수)
    let budget = m - (product[i][0] / 2 + product[i][1]);
    let cnt = 1;
    for (let j = 0; j < n; j++) {
      // 가격 + 배송비 값이 예산보다 클 경우 탈출
      if (product[j][0] + product[j][1] > budget) break;
      // 나머지 제할 값이 할인 받은 값이 아니고, 총 비용이 예산보다 작거나 같을 경우
      if (j !== i && product[j][0] + product[j][1] <= budget) {
        // 예산에서 비용을 뺀다
        budget -= product[j][0] + product[j][1];
        // 뺄때마다 카운트 1씩 더함
        cnt++;
      }
    }
    // answer와 cnt중 가장 큰 값을 할당
    answer = Math.max(answer, cnt);
  }
  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
