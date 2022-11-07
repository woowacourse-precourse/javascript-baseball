## 🤔 숫자 야구 필요한 기능

1. 컴퓨터의 정답을 가져오는 함수 👉 getAnswer

2. 사용자의 입력을 가져오는 함수 👉 getInput

3. 정답과 사용자의 입력을 비교하는 함수 👉 compareAnswerAndInput

4. strike, ball의 수를 가져오는 함수 👉 getStrikeBall

5. 반환받은 값에 따라 결과 문구를 출력해주는 함수 👉 printCompareResult

6. 3스트라이크일 경우, 게임 재시작 실행하는 함수 👉 isAnswer, restartGame

   - ❗️ 게임이 종료된 후, 1 또는 2번 값을 입력해야하는데 다른 값을 입력한 경우 ❗️

7. play() 내부에 게임을 시작하는 기능

8. 사용자기 잘못된 값을 입력하는 오류 처리 👉 detectInputError
   - ❗️ 사용자가 입력한 값이 3자리가 아닌 경우 ❗️
   - 사용자가 입력한 값이 숫자가 아닌 경우. 👉 isInputValueError
   - 사용자의 입력에 중복된 값이 존재하는 경우👉 removeRepeatInputValue
