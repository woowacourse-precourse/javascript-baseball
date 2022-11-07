# 🔖 기능 목록

## **Dispatcher 클래스**

### 🚀 들어오는 action 정보를 받아서 순서에 맞게 콜백함수를 실행하는 클래스

- [o] 콜백함수를 등록할 register 함수 만들기
- [o] 콜백함수를 실행하는 dispatch 함수 만들기

### 📝 DispatcherTest.js

- [o] 콜백함수 추가 후 순서대로 dispatch 되는것 테스트

---

## **UserInterface 클래스**

### 🚀 입출력을 담당하는 클래스들

- [o] Store에서 freshData 정보를 받으면 각 클래스는 update 메소드를 실행
- [o] gameStatus에 따라 문자열을 출력하기
- [o] ball, strike에 따라 문자열을 출력하고 입력받기
- [o] 입력이 잘못되었을 때 에러처리
- [o] Dispatcher 에게 action 객체를 만들어서 전달해주기

### 📝 StoreToUserInterfaceTest.js

- [o] Store의 상태가 변경되면 UserInterface가 업데이트 되는것 테스트
- [o] gameStatus가 START로 변경되었을 때 문자열 출력 테스트

### 📝 utilsTest.js

- [-] utils.getBallsAndStrikes 함수 테스트
- [-] utils.getGuessResult 함수 테스트

### 📝 GameDataUITest.js

- [-] GameDataUI.newGuess 메소드 테스트 (에러처리 포함)
- [-] GameDataUI.gameOver 메소드 테스트 (에러처리 포함)

### 📝 ActionTest.js

- [o] UserInterface 가 Dispatcher에게 정상적으로 Action을 보내는지 테스트

---

## **Store 클래스**

### 🚀 게임 진행에 필요한 정보들을 담고있는 Store 클래스들

- [o] GameStatusStore 구현 (gameStatus)
- [o] GameDataStore 구현 (target, ballsAndStrikes)

### 📝 StoreToUserInterfaceTest.js

- [o] Store의 상태가 변경되면 UserInterface가 업데이트 되는것 테스트

### 📝 utilsTest.js

- [-] utils.getBallsAndStrikes 함수 테스트

---

## **App 클래스**

### 🚀 인스턴스 간 의존성을 주입해주는 클래스

- [o] play() 의존성 주입 후 game-start action을 dispatch 해주기

### 📝 StoreToUserInterfaceTest.js

- [o] Store 와 UserInterface 의존성 주입 테스트

### 📝 ActionTest.js

- [o] UserInterface 와 Dispatcher 의존성 주입 테스트
