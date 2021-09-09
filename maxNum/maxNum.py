import itertools

def solution(numbers):
  arr = itertools.permutations(numbers,len(numbers))
  arr = list(arr)
  string = ''
  candidate = []
  length = 0

  for i in numbers:
    length += len(str(i))
  for i in range(len(arr)):
    for j in range(len(arr[i])):
      string += str(arr[i][j])
      if len(string) == length:
        candidate.append(string)
        string = '';
  candidate.sort(reverse=True)
  answer = str(int(candidate[0]))
  return answer

print(solution([3, 30, 34, 5, 9]))