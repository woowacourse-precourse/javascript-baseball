### 기능 목록

1. 숫자 야구 게임 실행 시 게임 시작 문구를 출력한다.

`App.play()` 실행 시 `숫자 야구 게임을 시작합니다.`를 출력한다.

이는 첫 번째 실행에서만 출력되어야 한다.

---

2. 컴퓨터가 임의의 숫자를 정한다.

`setBaseballAnswer()`에서 이전에 저장되었던 정답을 초기화한다.

새로운 숫자를 정하기 위해 `findNewBaseballNumber()`를 실행한다.

`findNewBaseballNumber()`에서 중복된 숫자를 제외하면서 새로운 숫자를 선택하고 정답에 추가한다.

---

3. 사용자의 입력을 받는다.

`App.play()`에서`숫자를 입력해주세요 : `를 출력한다.

그 다음 사용자의 입력을 받는다. 이는 사용자가 정답을 맞출 때까지 반복한다.

입력은 `MissionUtils.Console.readLine(query, callback)을 사용하여 받는다.

콜백 함수는 `userInputHandler()`를 사용한다.

---

4. 콜백 함수 `userInputHandler()`를 구현한다.

사용자의 입력을 받고 `userInputExceptionHandler()`에서 예외를 처리한다.

받은 입력을 `compareUserInputWithAnswer()`을 사용해 `BALL`, `STRIKE`, `NOTHING`을 구한다.

`makeOutputString()` 을 통해 사용자가 입력한 숫자에 대한 결과를 출력한다.

`strike`가 3이 아니라면 사용자가 입력을 계속 하도록 한다.

`strike`가 3이면 `gameRestartHandler()`를 실행한다.

---

4-1. 입력에 잘못된 값이 있는지 확인하고 에러를 처리한다.

`userInputExceptionHandler()`에서 사용자의 입력에 숫자 이외의 문자가 입력되거나 (아스키 코드로 확인
한다), 같은 숫자가 입력되거나, 3자리의숫자가 아닌 경우 예외를발생시킨다.

예외가 발생한다면 `throw`문을 사용해 예외를 발생시키고 애플리케이션을 종료시킨다

---

4-2. 입력을 정답과 비교한다.

`compareUserInputWithAnswer()`사용자의 입력을 받아서 baseballAnswer[]에 저장된 값과 비교를 한다.

먼저 같은 수가 같은 자리에 있는지 확인하고 있다면 `strike` 값을 증가시킨다.

`strike`가 아니라면 `ball`인지 확인한다.

`ball`에 해당된다면 값을 증가시킨다.

만약 `strike`와 `ball`이 모두 0이라면 `nothing` 을 true로 초기화한다.

---

4-3. 게임의 결과를 출력한다.

`makeOutputString()`에서 이번 입력에 대한 결과를 반환한다.

볼, 스트라이크 순서로 출력을 하고, 만약 nothing이 true라면 `낫싱`을 출력한다.

게임 종료시까지 반복한다.

---

4-4. 게임 종료시 다시 시작할 것인지 물어본다.

1을 입력 받으면 게임을 재시작한다.

2를 입력 받으면 그대로 종료한다.

1과 2가 아닌 입력이 들어온다면 `throw`를 통해 예외를 발생시킨 후 애플리케이션을 종료시킨다.

---
