## 🚀 기능 목록

## APP
- 프로퍼티
  - `answer`
    - 현재 문제의 정답을 저장한다
- 메소드
  - `play()`
    - 시작 메시지 출력과 함께 게임을 시작하는 함수
  - `startNewBaseball()` 
    - 정답을 초기화하고, 질의를 시작하는 함수
  - `repeatQuery()`
    - 질의를 통해 결과를 관리하는 과정을 반복하는 함수
  - `getBaseballResult()`
    - 정답과 대조해 질의의 결과를 반환하는 함수
  - `confirmBaseballEnd()`
    - 정답을 맞췄을 때 동작을 다루는 함수
    - 게임 종료 메시지를 출력한다
    - 재시작 여부를 입력받고, 함수를 실행한다

## RegExpUtil
- 프로퍼티
  - `regExp`
    - 인스턴스가 validate로 다룰 정규표현식을 저장한다
  - `errorMessage`
    - 유효하지 않을 시 `throw`할 에러메시지를 저장한다
- 메소드
  - `validate()`
    - 저장한 정규표현식으로 입력값을 테스트하는 함수
    - 입력값이 유효하지 않다면, `errorMessage`를 `throw`한다
- 인스턴스
  - `baseBallRegExp`
    - 입력이 3개의 양수로 이루어진 문자열인지 확인한다
  - `restartRegExp`
    - 입력이 "1" 또는 "2"인지 확인한다

## 공통
- 함수
  - `convertCountToMessage()`
    - 볼, 스트라이크 개수에 따라 메시지를 반환하는 함수
  - `getRandomAnswer()`
    - 정답으로 쓸 무작위 값을 반환하는 함수
    - 겹치지 않는 3개의 숫자로 이루어진 문자열을 반환한다

- 객체
  - `CONSOLE_MESSAGE`
    - 콘솔 입/출력에 사용될 공통 메시지를 모아둔 객체
  - `ERROR_MESSAGE`
    - 프로그램 실행 중 발생할 수 있는 에러 상황에 대한 메시지를 모아둔 객체