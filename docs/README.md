### 요구 기능 분석

- 컴퓨터가 임의의 수를 지정
  - missionUtils의 `Random.pickNumberInRange()` 사용
- 시작 시 게임 시작 문구 출력
  - missionUtils의 `Console.print` 사용
- 사용자에게 세자리 숫자 입력 받기
  - missionUtils의 `Console.readLine` 사용
- 잘못된 입력 시 예외 발생 종료
- 입력에 따라 결과 출력
- 숫자를 맞히면 종료 문구 출력
- 게임 재시작 or 종료 문구 출력
- 사용자의 입력에 따른 게임 재시작 or 종료

<br/>

### 코드 구현에서 유의해야 할 사항

- indent는 2 이하
- 함수로 기능 분리
- jest로 기능 테스트

<br/>

### 구현 로직

1. 랜덤의 수를 추출해 변수에 저장한다.
2. 시작 문구를 출력한다.
3. `isGamePlaying` 변수에 true를 할당한다.
4. `while`문을 돌며 `isGamePlaying`이 true일 때에만 아래 내용을 실행한다.
5. `startGame()`을 호출한다.
6. `startGame()` 내부에서 `getInput()`을 호출해 리턴값 변수에 저장한다.
7. 위의 결과로 `getResult(inputNumber)`를 호출한다.
8. `getResult(inputNumber)` 내부에서 `isStrike(inputNumber, answer)`와 `isBall(inputNumber, answer)`를 호출해 스크라이크와 볼 수에 따른 결과를 리턴한다.
9. `startGame()`의 리턴값이 정답이면 종료문구 출력 및 `exitOrRestart(input)`을 호출해 결과를 `isGamePlaying`에 할당한다.
10. `isGamePlaying`이 true이면 4번으로 돌아가 `while`문 재실행, false이면 앱 종료

### 구현할 함수

- `play()` - 컴퓨터의 임의의 수 지정, 시작 문구 출력
- `startGame()` - `try` 구문에서 사용자의 입력 받기 및 계산한 결과 출력, `catch` 구문에서 에러메세지 출력 및 `restartOrExit(2)` 호출
- `getInput()` - 사용자에게 숫자를 입력받아서 입력이 올바르지 않으면 `throw error`, 올바르면 입력값 리턴
- `getResult(inputNumber)` - 사용자가 입력한 `inputNumber`에 따른 결과 계산 및 리턴
- `isStrike(inputNumber, answer)` - 같은 수가 같은 자리에 있는지 확인
- `isBall(inputNumber, answer)` - 같은 수가 다른 자리에 있는지 확인
- `restartOrExit(input)` - 사용자의 입력에 따라 `true` 혹은 `break` 리턴
