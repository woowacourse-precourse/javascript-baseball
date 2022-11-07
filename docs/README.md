# 구현 중점

1. 하나의 함수에 하나의 기능
2. 주석 없이 네이밍을 통해 함수의 기능 전달
3. 함수마다 test 코드를 통해 동작 확인
4. commit 메시지를 convention에 맞추어 작성하되, 어떤 일을 했는지를 모두 알 수 있도록 적는다.

<br><br>

# 구현할 기능 목록

<br>

## 구현할 클래스 목록

- app
- user
- computer

<br>

## 구현할 메소드 목록

- [x] app

  - [x] startOrRestartApp : app이 user input을 물어보는 동작부터 시작
  - [x] endApp : app을 종료시킨다.
  - [x] askRestartAPP: user가 computer의 값을 맞춘 뒤에 재시작할 것인지 끝낼지를 확인한다.
  - [x] compareUserAndComputerNumber: input으로 받은 user number와 computer number를 비교한다.
  - [x] compareAnswerMapByCompareUserAndComputer: index를 비교해서 answerMap의 값을 셋팅
  - [x] initAnswerMap
  - [x] setAnswerMapByCompareUserAndComputer : user와 computer의 값을 바탕으로 answerMap의 값을 셋팅한다
  - [x] printResult: answerMap의 값을 바탕으로 비교 결과를 print 한다
  - [x] compareInputToRestart: input이 1이면 재시작, 2이면 프로세스를 종료한다.
  - [x] setAnswerMapStrikePlusOne: answerMap의 strike ++ 기능
  - [x] setAnswerMapBallPlusOne: answerMap의 ball++ 기능

- [x]user

  - [x] getUserNumberFromInput
  - [x] getInput
  - [x] setNumberArray
  - [x] validInput
  - [x] makeInputToArray

- [x] computer

  - [x] setRandomNumberArray
  - [x] setRandomNumber

# 구현수정

## 이유

> "프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 이름을 수정하거나 이동하지 않는다." 위 구절로 인해 Application Test에서 비동기 함수 테스트로 적용되지 않아, 비동기 함수로 구현 한 것을 동기 함수로 구현하도록 수정

## 구현할 클래스 목록

- app
- computer
- function

## 구현할 기능 목록

- [ ] app

  - [ ] resetCountBoard: countboard를 0,0 으로 초기화 시킨다
  - [ ] compareUserAndComputer: user의 값과 computer의 값을 비교하여, countBoard 최신화
  - [ ] makeResult: countboard를 바탕으로 결과를 나타낸다
  - [ ] decideReprocess: 3스트라이크 여부를 판단하여, process를 다시 돌려야하는지 판단한다.
  - [ ] process: 전체적인 일련의 과정을 나타낸다.

- [ ] computer

  - [ ] getRandomNumber: computer의 Number를 설정하기 위해, RandomNumber를 selectedNumber에 없는 것으로 return 한다.
  - [ ] setRandomNumber: computer의 selectedNumber를 setting 한다.

- [ ] Function

  - [ ] validByRegex: 정규식에 의해 1에서9까지의 수 3자리가 맞는지 확인한다.
  - [ ] validDuplicate: 곂치는 수가 없는지 확인한다.
  - [ ] validInput: 정규식에 의해 확이낳고, 곂치는 수에 의해 확인하여 false, true를 return 한다.
  - [ ] throwInvalidInputError: 올바르지 않은 input 값이라면 throw error를 한다.
  - [ ] validOneOrTwo: 1과 2중에 값이 있는지 확인한다.
