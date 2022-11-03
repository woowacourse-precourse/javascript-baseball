1. 컴퓨터가 뽑은 랜덤 숫자 3개 배열로 만드는 함수
  - randomNums()
  - MissionUtils.Random.pickNumberInRange(1, 9) -> 3번 해서 배열에 push
  - 배열을 return

2. 사용자에게 숫자 3개 받는 함수
  - readNums()
  - throw문으로 숫자가 아닌 경우, 1~9 사이가 아닌 경우, 3자리수가 아닌 경우는 종료
  - 배열을 return

3. 컴퓨터 숫자와 사용자 숫자 비교하는 함수
  - compareNums(computer, user)
  - 같은 index에 같은 값이면 strike + 1
  - index는 다르지만 값이 있을 때 ball + 1
  - return [ball, strike]

4. 3번에 비교한 결과를 바탕으로 출력해주는 함수
  - printResult(score)
  - score -> [ball, strike]
  - ball, strike 둘 다 0이면 "낫싱" 출력
  - strike가 3이면 게임 종료 출력
  - ball과 strike 개수만큼 출력