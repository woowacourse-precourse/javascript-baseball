# 구현할 기능 목록

### 1. startGame

“숫자 야구 게임을 시작합니다.” 출력

### 2. makeComputerNumbers

1~9까지 서로 다른 3자리의 수 생성

### 3. makeUserNumbers

서로 다른 3자리의 수 입력 받는 기능

### 4. checkUserNumbers

서로 다른, 3자리, 숫자가 맞는지 확인하는 기능

### 5. printStrikeAndBall

strike와 ball 개수 출력

### 6. countStrikeAndBall

strike와 ball 개수 확인

### 7. checkAnswer

정답일 경우 → 게임 종료 → restartGame

정답이 아닐 경우 → makeUserNumbers

### 8. chooseRestartGame

"게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요." 출력

1 → startGame

2 → “게임종료” 출력

else → throw new Error → 게임종료
