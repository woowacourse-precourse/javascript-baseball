### 구현할 기능 목록 단위
- 생성자로 컴퓨터의 값과 유저의 값, strike 갯수와 ball 갯수를 저장.
- 주어진 문자열을 화면에 출력하는 함수 생성.
- 게임을 시작하는 함수 생성
- 유저의 값이 올바른지 확인하는 함수 생성.
- 컴퓨터의 랜덤값을 생성 유저의 input값을 받아오는 함수 생성
- 게임을 진행하는 함수, strike와 ball의 갯수를 저장하는 함수를 생성
- 게임의 결괏값을 출력하는 함수, 모든 값을 맞췄다면 재시작 여부를 묻는 함수
- 저장된 모든 값을 초기화하는 함수 ,게임을 재시작하는 함수

### 예외 사항
- 유저의 input값이 올바른 값인지 확인, 올바른 값이 아니라면 throw로 예외처리 후 종료.
- 유저의 재시작 여부를 묻는 값이 1 또는 2가 아니라면 throw로 예외처리 후 종료.


### 기능
- constructor() : 컴퓨터의 랜덤 값, 유저의 inputData, 맞춘 strike, ball 카운트하는 변수 생성

- play() : 게임 시작 메세지와 게임을 시작하는 gameStart()함수 호출

- gameStart() : 컴퓨터의 랜덤 값을 생성하는 setRandomNumber() 함수와 유저의 데이터를 입력받는 getUserInputData()함수 호출

- setRamdomNumber() : 1 부터 9까지 중복된 값 없이 3개의 값을 생성.

- getUserInputData() : 유저의 값을 입력받은 뒤 올바른 값인지 검증후 오류가 있다면 throw문을 이용하여 종료, 없다면 strike와 ball의 갯수를 체크하는 checkBallOrStrike() 호출, 결과값을 출력하는 printResult() '3스트라이크'라면 restart()호출

- checkBallOrStrike(): 컴퓨터의 랜덤값을 map함수를 돌면서 countingBallOrStrike() 호출

- countingBallOrStrike() : 유저의 inputData 안에 컴퓨터의 랜덤 값이 존재하고, 서로의 인덱스까지 동일하다면 strike 증가, 인덱스가 다르다면 ball 증가.

- printResult() : strike가 3개가 아니라면 재귀적으로 getUserInputData() 호출 strike가 3개라면 게임 게임 종료 메세지 출력
- restart() : 재시작 메세지로 유저의 값을 받고 1이면 claerData()호출한 뒤, 개임 재시작
2면 그대로 게임 종료 그 외의 값은 throw문으로 예외 발생 후 종료

- clearData() : 랜덤값, 유저의 inputData, strike.ball 카운트 초기화