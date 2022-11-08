## 기능 요구사항 분석

---

#### part 1. computer input

1. MissionUtils.Random의 pikNumberInRange메서드를 사용해서 배열에 컴퓨터 Number를 추가

---

#### part 2. user input & game start

2. 게임 시작 - `startGame(getComputerNumber())`
3. 사용자 input을 받는다. - startGame function내부 - `MissionUtils.Console.readLine`
4. 사용자 input 유효성 검사 - `userInputCheck`
   1. 3자리, 숫자 - `!NUMBER_INPUT_CHECK.test(*Number*(*userInput*))`
   2. 서로 다른 수 - **`new** _Set_(_userInput_).size !== 3`
5. 숫자가 맞으면 strike, ball 갯수 count - `countStrikeBall()`
   1. 스트라이크 - `checkStrike()`
   2. 볼 - `checkBall()`

---

#### part3. Re-Game or stop

6. 게임 계속 여부를 받는다. - `checkContinue()`
