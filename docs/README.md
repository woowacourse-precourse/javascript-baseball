# 미션 - 숫자 야구

## ⛰ 순서도

![img](../docs/imgs/순서도.png)

## ⚾️ 기능 목록

### 🎯 Computer.js

- [x] 랜덤 숫자 생성하기
  - 중복 불가 세 자리 수
- [x] 유저가 입력된 숫자 유효성 검사하기
  - 숫자 데이터
  - 세 자리
  - 중복 불가
- [x] 스트라이크, 볼 갯수 계산하기
  - 맵 {strike, ball}
- [x] 정답(3스트라이크)인지 확인하기
  - strike 3개면 정답
- [x] 유저 재시작 선택값 판단하기
  - 1, 2 이외의 값은 예외처리

### 🎯 App.js

- [x] 게임 시작 메세지 출력하기
  - 앱 시작하자마자 메세지 출력
- [x] 입력 메세지 출력하기
  - 세 숫자를 받기 위한 출력
- [x] 스트라이크, 볼 결과 메세지 출력하기
  - computer에서 맵 자료형을 받아서 메세지 출력
- [x] 정답 메세지 출력하기
  - computer에서 정답임을 판단하면 메세지 출력
- [x] 재시작 선택 여부 메세지 출력하기
  - 정답 메세지 출력 후에 재시작 선택 여부 출력하기
- [x] 재시작 선택 여부 입력 받기
  - 1또는 2의 값 받기

## 구현 설명

### 📦 Computer 클래스

- constructor
  - answerNumber: 정답값을 저장합니다.
  - resultMap: 매 매치마다 유저가 입력된 값을 ball/strike 형태로 저장합니다.
- computeMatchInput(): 유저가 입력한 숫자를 계산하여 ball 과 strike 개수를 파악합니다.
- getResultMessage(): ball과 strike 개수 파악된 값을 통해 메세지 내용을 반환합니다.
- initNumber(): 랜덤으로 정답값을 계산하여 반환합니다.
- checkValidationSetGameInput(inputNumber): 유저가 입력한 숫자게임 숫자에 오류일 경우 콘솔을 닫고 에러를 출력합니다.
- checkValidationNewGameInput(inputAnswer): 유저가 입력한 재시작 여부 답에 오류일 경우 콘솔을 닫고 에러를 출력합니다.

### 📦 App 클래스

- constructor: 인스턴스 생성하자마자 게임 시작 메세지를 출력합니다.
- play(): 전체적인 게임 플레이 메소드입니다.
- playMatches(computer): 유저로부터 숫자를 받고 이를 평가하여 결과 메세지를 반환하는 한 사이클을 담고 있습니다.
- askNewGame(computer): 정답을 맞출 경우 재시작 여부를 묻습니다.

### 📦 Error 함수

- setGameInputError(answer):유저가 입력한 숫자게임 숫자가 오류인지 확인합니다.
- newGameInputError(answer): 유저가 입력한 재시작 여부 답이 오류인지 확인합니다.
