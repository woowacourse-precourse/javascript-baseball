## 📌 기능 목록

### 입출력 기능

#### 입력

- [x] MissionUtils - Console을 이용한 사용자 숫자 입력받는 `userInput` 함수 만들기

- [x] 서로 다른 3자리 숫자를 입력하는지 확인하는 `checkUserInput` 함수 만들기

- [x] 게임이 끝난 경우 종료/재시작을 구분하는 `continueOrEnd` 함수 만들기

#### 출력

- [x] MissionUtils - Console.print()를 이용한 문자열을 출력하는 `consolePrint` 함수 만들기

- [x] 입력한 수에 대한 결과를 볼, 스트라이크 개수로 표시하는 `gameResult` 함수 만들기

  - [x] 볼 개수를 계산하는 `countBalls` 함수 만들기

  - [x] 스트라이크 개수를 계산하는 `countStrikes` 함수 만들기

  - [x] 하나도 없는 경우 - `낫싱` 출력

  - [x] 3개의 숫자를 모두 맞힐 경우 - `3스트라이크 \n 3개의 숫자를 모두 맞히셨습니다! 게임 종료` 출력

- [x] 게임 시작 문구 출력 - `숫자 야구 게임을 시작합니다.`

### 컴퓨터 수

- [x] 서로 다른 3자리 수를 랜덤으로 정하는 `setRandomNumber` 함수 만들기

  > 랜덤 수는 [MissionUtils 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)에서 제공하는 Random.pickNumberInRange()를 활용할 것
