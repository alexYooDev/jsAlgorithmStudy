from itertools import combinations

def solution (orders, course):
  answer = []
  #코스요리 단품개수를 순회
  for dish in course:
    dict = {}

    # 
    for i in range(len(orders)):
      comb = [ ''.join(c) for c in combinations(sorted(orders[i]), dish)]
      for j in range(len(comb)):
        dict[comb[j]] = dict.get(comb[j], 0) +1

  # 딕셔너리를 순회하며 dict 안의 최대값을 구하고
  for k in dict:
    DICT_MAX = max(dict.values())
    #딕셔너리의 최대값이 2 이상이고 순회하는 각각 값이 최대값과 같을 경우
    if DICT_MAX >= 2 and dict[k] == DICT_MAX:
      answer.append(k)
  answer.sort()
  return answer

print(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2,3,4]))