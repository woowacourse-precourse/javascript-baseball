# 🔖 기능 목록

## Action 클래스

### 게임의 시작점 Dispatcher에게 메세지를 보내는 클래스

- [o] UserInterface 에서 사용자의 상호작용을 받아 Action 생성
- [o] Dispatcher 에게 Action을 전송

---

## Dispatcher 클래스

### 들어오는 Action 정보를 받아서 순서에 맞게 콜백함수를 실행하는 클래스

- [-] 콜백함수를 등록할 register 함수 만들기
- [-] 콜백함수를 실행하는 dispatch 함수 만들기

---

## UserInterface 클래스

### 입출력을 담당하는 클래스

- [-] gameStatus에 따라 문자열을 출력하고 입력받기
- [-] ball, strike에 따라 문자열을 출력하고 입력받기
- [-] 입력이 잘못되었을 때 에러처리
- [-] controller 에게 action 객체를 만들어서 전달해주기

---

## Store 클래스

### 게임에 필요한 정보들을 담고있는 여러개의 Store 클래스들

- [-] GameStatusStore 구현
- [-] TargetStore 구현
- [-] InputStore 구현
- [-] BallStrikeStore 구현

---

## App 클래스
### 인스턴스 간 의존성을 주입해주는 클래스
- [-] play() 의존성 주입 후 Action