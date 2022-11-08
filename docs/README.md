# 숫자 야구 게임 기능 목록

---

1. 컴퓨터가 1~9까지 중 서로 다른 임의의 수 3개 선택하기

- getRandomComputerArray()로 컴퓨터의 random array만들기
- pushUniqueNumber()을 통해 난수를 중복되지 않게 string으로 push하기

2. 유저의 input 에 응답하기

- 유저의 input과 randomComputerArray 비교하여 응답하기

3. strike를 판별하기

- 유저의 input과 randomComputerArray를 비교하여 스트라이크를 판별하여 count
- filter함수를 통해 userArray를 순회하며 computerArray와 인덱스, element가 동일한 부분만 남긴 배열 countedStrikeArr 생성
- countedStrikeArr를 return

4. ball을 판별하기

- computer의 배열에서 strike판정이 된 index를 뺀 comArrWithoutStrike 배열 생성
- userArray와 comArrWithoutStrike의 교집합 배열을 생성해 볼의 갯수 판정
- countedBallArray 를 return

5. 판별한 strike와 ball을 출력하기

- 조건에따라 스트라이크와 볼, 낫싱을 출력

6. 3스트라이크가 되면 게임종료 출력하고 재시작,종료 물어보기

- 스트라이크가 3일떄 printCorrect()를 실행하고 아니라면 다시 responeUserInput()으로 응답하기
- 정답시 입력을 받아 1이면 comArr를 비우고 다시 play()실행 2이면 종료하기

7. 유저입력 예외사항 처리하기

- 예외사항 : 유저입력 숫자가 3개보다 많거나 적을 때/ 입력값 중 0이 포함될 때/ 숫자가아닌 값을 입력했을 떄
- thorw 문으로 에러 발생시키기

---
