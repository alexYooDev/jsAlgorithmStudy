def solution(citations):
  # 사이테이션을 정렬
  citations.sort()
  # 
  for i in range(len(citations)):
    if citations[i] >= len(citations) - i: 
      return len(citations)-i 


print(solution([3,0,6,1,5]))