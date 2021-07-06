function solution(s) {
  let answer = 'YES';
  let arr = s
    .toLowerCase()
    .replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi, '')
    .split(' ');
  let norm = arr.slice(0, parseInt(arr.length / 2)).join(' ');
  let rev = arr
    .slice(parseInt(arr.length / 2), arr.length)
    .join(' ')
    .split('')
    .reverse()
    .join('');
  if (norm !== rev) {
    answer = 'NO';
  }

  return answer;
}

let str = 'found7, time: study; Yduts; emit, 7Dnuof';
console.log(solution(str));
