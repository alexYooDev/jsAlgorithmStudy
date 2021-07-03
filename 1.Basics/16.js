function solution(s){  
  return s.split('').filter(function(item,pos,self) {
    return self.indexOf(item) == pos;
  }).join('');
}
console.log(solution("ksekkset"));