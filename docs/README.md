#### [ 기능 목록 ]

✅ 게임 종료

- 3 스트라이크일 경우 결과 안내문 출력
- 게임을 계속 진행할지 종료할지 입력받는 기능
- 게임 종료 기능
- 함수명:endGame

✅ 컴퓨터 랜덤 숫자 선택

- 1에서 9까지의 숫자 중 랜덤으로 3개를 선택하는 기능
- 함수명:selectComputerNumber

✅ 사용자 숫자 입력 받기

- 입력 안내문 출력
- 숫자 입력 받는 기능
- 함수명:getUserInputNumber

✅ 컴퓨터 숫자 배열로 변환

- 컴퓨터 숫자를 콤마로 구분하여 배열로 변환하는 기능
- 함수명:changeComputerNumberToArray

✅ 사용자 숫자 배열로 변환

- 입력 받은 사용자 숫자를 배열로 변환하는 기능
- 함수명:changeUserNumberToArray

✅ 같은 자리의 숫자 찾기

- 컴퓨터 숫자와 사용자 숫자를 비교하여 같은 자리의 숫자를 찾는 기능
- 같은 자리인 경우 strike 1 증가
- 다른 자리인 경우 ball 1 증가
- 함수명:findEqualIndexNumber

✅ 게임 결과

- strike, ball 수에 따라 게임 결과 조건문을 통해 함수 호출
- 함수명:resultGame

✅ 스코어 볼

- 게임 결과인 ball 수를 안내문으로 출력
- 사용자 숫자를 입력 받는 함수 호출
- 함수명:resultBall

✅ 스코어 낫싱

- 게임 결과인 strike 0, ball 0 수를 낫싱 안내문으로 출력
- 사용자 숫자를 입력 받는 함수 호출
- 함수명:resultNothing

✅ 스코어 스트라이크 앤드 볼

- 게임 결과인 ball 수를 안내문으로 출력
- 사용자 숫자를 입력 받는 함수 호출
- 함수명:resultStrikeAndBall

#### [ 예외 목록 ]

📛 사용자 숫자 입력 함수 : getUserInputNumber()

- 사용자 입력 타입은 숫자만 가능
- 사용자 입력값은 숫자 3개만 가능
- 서로 다른 3개의 숫자만 가능
- 1에서 9 사이의 숫자 가능

📛 게임 종료 함수 : endGame()

- 사용자 입력 타입은 숫자만 가능
- 사용자 입력값은 1과 2 중 하나만 가능

#### [ 테스트 목록 ]

🔄 컴퓨터 랜덤 숫자 선택 함수 : selectComputerNumber()

- 3개의 숫자 반환
- 서로 다른 숫자 반환
- 1에서 9 사이의 숫자 반환

🔄 컴퓨터 숫자 배열 변환 함수 : changeComputerNumberToArray()

- 배열로 반환

🔄 사용자 숫자 배열 변환 함수 : changeUserNumberToArray()

- 배열로 반환
