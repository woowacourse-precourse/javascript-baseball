# 📄 기능목록

## 1. 게임 시작 전

    a. 랜덤 숫자를 만들기 (함수명: makeRandomNumber)
    b. 숫자 입력받고, 숫자배열 변환 (함수명: makeUserInputNumber)

**⭐️ 예외처리: userInputNumber가 1 ~ 9까지의 서로 다른 세자리 숫자가 아니라면 throw문으로 예외처리 및 App 종료** => (예외처리 함수명: checkInputNumber, App 종료 함수: gameTerminate)

## 2. 숫자 검사 (3스트라이크)

    a. userInputNumber가 randomNumber 와 같은지 검사 (함수명: isThreeStrike)
    b. 같다면 문구 출력, 종료여부(1 또는 2) 입력받기 (함수명: stopGameOrNot)
      - 만약 값이 1이면, 1-a로 즉, play 함수로 돌아간다. 2라면, App 종료.

**⭐️ 예외처리: stopGameOrNot에서 입력받은 수가 1 또는 2가 아니고 문자나 다른 숫자라면, throw 예외처리 및 App 종료** => (함수명: checkStopGameOrNotInput)

## 3. Ball / Strike / nothing 연산

**countBallOrStrikeOrNothing 함수**

    userInputNumber를 한자리씩 검사를 했을 때,

    a. 만약 userInputNumber를 숫자의 index가 randomNumber의 숫자 index와 같고 값도 같은지 검사 (함수명: countStrike )
      - 변수 strike  + 1 증가
    b. randomNumber에 포함 && userInputNumber를 숫자의 index가 randomNumber의 숫자 index와 다름 (함수명: countBall)
      - 변수 ball + 1 증가
    c. 위의 두 경우 모두 아니라면
      - strike 와 ball 변동 X

## 4. 결과출력

**printResult 함수**

    a. strike, ball 변수가 0 보다 크다면 값을 출력.
    b. 둘 다 0 이면 '낫싱' 출력
