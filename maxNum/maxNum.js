function getCombinations(arr, selected) {
  const result = [];
  if (selected === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, idx, origin) => {
    const rest = origin.slice(idx + 1);
    const combination = getCombinations(rest, selected - 1);
    const addition = combination.map((el) => [fixed, ...el]);
    result.push(...addition);
  });
  return result;
}

function solution(numbers) {
  var answer = '';
  let max = Number.MAX_SAFE_INTEGER;
  console.log(getCombinations(numbers, numbers.length));
}

console.log(solution([6, 10, 2]));
// answer == 6210
