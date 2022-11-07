## 💥기능 구현 목록

1. randomGenerator: 랜덤으로 중복되지 않는 세개의 숫자를 만들어 배열로 반환하는 함수

2. checkError: 입력 값에 오류가 있는지 체크하는 함수

   - hasError: 입력에 오류가 있으면 1을 반환, 아니면 0을 반환
   - 다음은 오류 상황입니다.
   - 4자리 이상을 입력
   - 숫자가 아닌 값 입력
   - 1~9 숫자 아닌 값 입력
   - 중복된 숫자 입력

3. getScore: 입력과 정답을 비교하여 [BALL,STRIKE] 배열을 반환하는 함수

   - getQueryArrFromQuery: 사용자의 입력값을 한글자씩 배열에 담아 반환하는 헬퍼 함수

4. printFeedback: 사용자의 score([BALL,STRIKE])를 받아서 피드백을 출력하는 함수

5. isFinish: 사용자의 score([BALL,STRIKE])를 받아서 게임이 끝났는지 확인하는 함수

6. replayOrQuit: 게임이 끝난후에 다시 시작할지, 종료할지 결정하는 함수

   - quitGame: 게임을 끝내는 함수

7. startQuery: 정답인 answer 배열생성 이후 사용자의 입력(query)부터 게임을 담당하는 함수
