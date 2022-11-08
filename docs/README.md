## ⚾️ 숫자 야구 : 기능 요구 사항

---

### 📌 메서드

#### 숫자 야구 메서드

- `startGame()`: 숫자 야구 게임 시작
- `numberPrediction()` : 사용자에게 숫자를 입력받고 힌트를 출력, 정답을 맞췄다면 게임을 종료하고 그렇지 않다면 입력을 다시 받음
- `endGame()` : 게임 재시작/종료 입력에 따른 동작
- `endGameInputMessage()` : 게임 종료, 재시작/종료 입력을 받음
- `getResult(answers, rightAnswers)` : 사용자와 컴퓨터의 입력을 받아, `strike`와 `ball` 개수를 계산
- `getHintMessage(strike, ball)` : strike와 ball개수를 받아, 힌트 메시지를 리턴
- `setRandomNumbers()` : 3개의 서로 다른 랜덤 숫자를 받아, 컴퓨터의 수로 지정
- `readLine(message, callback)` : `mission-utils` 라이브러리의 `Console`함수 캡슐화, 사용자의 입력을 받아 `callback`함수 실행
- `print(message)` : 인자로 받은 `message`를 출력

#### 유틸

- `getRandomNumbers(n, minBound, maxBound)` : `minBound` ~ `maxBound` 사이의 `n`개의 서로 다른 랜덤한 숫자 생성
- `convertStringToNumber(string)` : 인자로 받은 `string`을 `number`로 변환
- `convertStringsToNumbers(string[]))` : 인자로 받은 `string[]`를 `number[]`로 변환

---

### 🔨 기능 구현 목록

1. 게임 시작

- [x] 게임 시작 문구 출력
- [x] 컴퓨터가 랜덤한 3개의 숫자 생성
- [x] 숫자 야구 게임 시작

2. 숫자 야구 게임

- [x] 사용자의 입력 받기
- [x] 사용자가 잘못된 값을 입력 받았는지 체크, 잘못된 값을 입력했다면 예외 발생
- [x] 사용자가 입력한 숫자와, 컴퓨터의 랜덤 숫자를 비교해 볼/스트라이크 결과 계산
- [x] 사용자에게 결과/힌트를 출력
- [x] 선택한 3개의 숫자를 모두 맞추었다면 게임 종료
- [x] 모두 맞추지 못했다면, 사용자의 입력 다시 받기

3. 게임 종료

- [x] 게임 재시작 / 종료 입력
- [x] 게임 종료
