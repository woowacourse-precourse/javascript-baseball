## 🚀 기능 목록

- 정답을 초기화하고, 질의를 시작하는 함수 - `startNewBaseball()`
- 정답으로 쓸 무작위 값을 반환하는 함수 - `getRandomAnswer()`
  - 정답을 저장하는 변수 - `answer`
  - 겹치지 않는 3개의 숫자로 이루어진 문자열을 반환한다
- 질의를 통해 결과를 관리하는 과정을 반복하는 함수 - `repeatQuery()`
- 정답과 대조해 질의의 결과를 반환하는 함수 - `getBaseballResult()`
  - 볼, 스트라이크 개수에 따라 메시지를 반환하는 함수 - `convertCountToMessage()`
- 정답을 맞췄을 때 동작을 다루는 함수 - `confirmBaseballEnd()`
  - 게임 종료 메시지를 출력한다
  - 재시작 여부를 입력받고, 함수를 실행한다
- 정규식과 에러메시지를 받아 validate를 처리해주는 클래스 - `RegExpUtil`
  - 인스턴스
    - `baseBallRegExp`
      - 입력이 3개의 양수로 이루어진 문자열인지 확인한다
    - `restartRegExp`
      - 입력이 "1" 또는 "2"인지 확인한다