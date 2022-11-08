# 숫자 야구 기능 목록

## 0. 환경 설정

- [x] 1. 구현 기능 목록 정리
- [x] 2. 필요한 모듈(jest, MissionUtils) 설치(`npm install`)

## 1. 초기화 기능 구현

### 1-1. 앱(App) 초기화 기능 구현

- [x] 1. 메세지 상수 초기화

  - 게임 안내(GAME_MSG) 메세지(start: `숫자 야구 게임을 시작합니다.`, pleaseInput: `숫자를 입력해주세요 : `, askRestart: `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n`, correct: `3개의 숫자를 모두 맞히셨습니다! 게임 종료`) 선언, 할당
  - 게임 결과(GAME_RESULT) 메세지(strike: `스트라이크`, ball: `볼`, nothing: `낫싱`) 선언, 할당
  - (추가구현)에러(ERROR_MSG) 메세지(onlyNumbers: `숫자만 입력해주세요.`, invalidLength: `반드시 3개의 숫자를 입력해주세요.`, duplicateNumbers: `서로 다른 3개의 숫자를 입력해주세요.`, onlyOneOrTwo: `1 또는 2를 입력해주세요.`) 선언, 할당
  - 기타 상수 CORRECT_ANSWER: `3스트라이크`, LIMIT_CNT: `3`

- [x] 2. 생성자 메서드(constructor) 초기화
  - 상대방(컴퓨터)의 3자리 숫자를 담을 private 변수(`#computerNumbers`) 선언

### 1-2. 상태 변수 관리 함수(getter, setter) 구현

- [x] 1. `#computerNumbers`의 getter, setter(`#getComputerNumbers`,`#setComputerNumbers`)

## 2. 상대방(컴퓨터)의 3자리 숫자 생성하는 기능(#initComputerNumbers) 구현

- [x] 1. 배열를 인자로 받음(default는 [])
- [x] 2. `Random.pickNumberInRange`를 이용해 Random 값 추출
  - [x] 2.1 1 ~ 9 사이에서 배열에 존재하지 않으면(`Array.prototype.includes` 이용) push하고 인자로 넘김
- [x] 3. 배열의 길이가 3이 되면 해당 배열을 [`#setComputerNumbers`](#1-2-상태-변수-관리-함수getter-setter-구현)로 할당, return

## 3. 사용자로부터 입력받는 기능(#takeUserNumbersInput) 구현

- [x] 1. GAME_MSG.pleaseInput 출력하며 사용자의 값을 입력(`Console.readLine`을 이용) 받음
- [x] 2. 입력 받은 input [`#handleUserNumbers`](#4-입력-받은-값-다루는-기능handleusernumbers-구현)에 전달

## 4. 입력 받은 값 다루는 기능(#handleUserNumbers) 구현

- [x] 1. 숫자 배열로 변환(`String.prototype.split`, `Array.prototype.map`, `Number`을 이용) : userNumbers
- [x] 2. 입력 유효성 검사([`checkUserNumbersInputValidity`](#4-1-세자리-숫자-유효성-검사-기능checkusernumbersinputvalidity-구현))
- [x] 3. [`compareEachNumbers`](#5-사용자-입력-값과-상대방컴퓨터의-숫자-비교하는-기능compareeachnumbers-구현)에 `#computerNumbers`, `userNumbers` 전달, 배열 반환
- [x] 4. [`#getBallStrikeResult`](#6-ball-strike-개수-결과값을-반환하는-기능getballstrikeresult-구현)에 배열 전달, 문자열 반환
- [x] 5. CORRECT_ANSWER와 일치 여부 확인
  - [x] 5.1 true일 경우 GAME_MSG.correct 출력, [`#askRestart`](#7-재시작-묻는-기능askrestart-구현) 호출
  - [x] 5.2 false일 경우 [`#takeUserNumbersInput`](#3-사용자로부터-입력받는-기능takeusernumbersinput-구현) 다시 호출

### 4-1. 세자리 숫자 유효성 검사 기능(checkUserNumbersInputValidity) 구현

- [x] 1. 1 ~ 9 숫자 외의 값이 입력될 경우(`Array.prototype.every`, `Number.isInteger` 이용) `throw` ERROR_MSG.onlyNumbers
- [x] 2. 입력된 숫자의 자릿수(배열의 길이)가 3보다 작거나 클 경우 `throw` ERROR_MSG.invalidLength
- [x] 3. 입력된 3자리 수가 서로 다르지([`checkUnique`](#4-2-3자리-숫자-다른지-확인하는-기능checkunique-구현)) 않을 경우 `throw` ERROR_MSG.duplicateNumbers

### 4-2. 3자리 숫자 다른지 확인하는 기능(checkUnique) 구현

- [x] 1. 숫자 배열을 인자로 받음
- [x] 2. `Set` 자료구조를 이용해 넘겨 받은 배열을 Set으로 변환
- [x] 3. 해당 Set의 길이가 3보다 작을 경우 겹치는 숫자 존재하므로 return false

## 5. 사용자 입력 값과 상대방(컴퓨터)의 숫자 비교하는 기능(compareEachNumbers) 구현

- [x] 1. 길이가 3인 숫자 배열 2개(`computerNumbers`, `userNumbers`)를 인자로 받음
- [x] 2. 볼, 스트라이크 개수를 담을 변수(ballCnt, strikeCnt) 선언, 각각 0 할당
- [x] 3. `userNumbers`를 순회
  - [x] 3.1 서로 같을 경우 `strikeCnt++`
  - [x] 3.2 요소가 computerNumbers에 포함되어 있으면 `ballCnt++`
- [x] 4. [ballCnt, strikeCnt]를 return

## 6. ball, strike 개수 결과값을 반환하는 기능(#getBallStrikeResult) 구현

- [x] 1. [ballCnt, strikeCnt] 배열을 인자로 받음
- [x] 2. 배열 값이 모두 0일 경우 GAME_RESULT.nothing return
- [x] 3. 0이 아닌 값이 있을 경우
  - [x] 3.1 [GAME_RESULT.ball, GAME_RESULT.strike]과 합쳐서 2차원 배열화
  - [x] 3.2 요소 개수에 따라 string array로 변환(`Array.prototype.filter`, `Array.prototype.map` 이용)
  - [x] 3.3 출력할 string으로 변환(`Array.prototype.join`을 이용)
- [x] 4. 해당 문자열 return

## 7. 재시작 묻는 기능(#askRestart) 구현

- [x] 1. GAME_MSG.askRestart 출력하며 1 or 2 입력(`Console.readLine`을 이용) 받고 숫자 변환
- [x] 2. 입력 예외 사항 처리 위해 [`checkRestartNumberValidity`](#7-1-재시작-여부-유효성-검사-기능checkrestartnumbervalidity-구현)에 전달
- [x] 3. 1일 경우 [`#startGame`](#9-게임-시작-기능startgame-구현) 호출
- [x] 4. 2일 경우 [`#exitApp`](#8-앱-종료-기능exitapp-구현) 호출

### 7-1. 재시작 여부 유효성 검사 기능(checkRestartNumberValidity) 구현

- [x] 1, 2가 아닐 경우 `throw` ERROR_MSG.onlyOneOrTwo

## 8. 앱 종료 기능(#exitApp) 구현

- [x] 1. `Console.close`를 호출해 입력 종료

## 9. 게임 시작 기능(#startGame) 구현

- [x] 1. [`#initComputerNumbers`](#2-상대방컴퓨터의-3자리-숫자-생성하는-기능initcomputernumbers-구현) 호출
- [x] 2. [`#takeUserNumbersInput`](#3-사용자로부터-입력받는-기능takeusernumbersinput-구현) 호출

## 10. 게임 실행 기능(play) 구현

- [x] 1. GAME_MSG.start 출력(`Console.print` 이용)
- [x] 2. [`#startGame`](#9-게임-시작-기능startgame-구현) 호출
