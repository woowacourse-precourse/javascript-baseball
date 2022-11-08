## 기능 목록

- 게임 시작 `gameStart`
- 랜덤수 만들기 `getRandomNumber`
- 유저로부터 숫자 입력받기 `getUserNumber`
- 추측값에 대한 input 오류 확인 `checkGuessInput`
- 상대방 수와 내가 제시한 수에 대한 스트라이크 & 볼 수 결과 `getStrikeAndBallNumber`
- 게임 재시작 여부 확인 `isRestartGame`
- 사용자의 입력에 대한 유효성 체크 `isValidInput`
  - 1부터 9사이의 숫자인지 (0 있으면 안됨)
  - 세자리수가 맞는지
  - 서로 다른 수로 이루어져 있는지
  - 재시작 입력 시 해당 값이 1 혹은 0인지
- 스트라이크 수와 볼 수에 대한 출력값 계산 `getResultMessage`
