# 숫자 야구 기능 목록

## 0. 환경 설정

- [x] 1. 구현 기능 목록 정리
- [x] 2. 필요한 모듈(jest, MissionUtils) 설치(`npm install`)

## 1. 초기화 기능 구현

### 1-1. 앱(App) 초기화 기능 구현

- [x] 1. 메세지 상수 초기화

  - 게임 안내(#GAME_MSG) 메세지(START: `숫자 야구 게임을 시작합니다.`, PLEASE_INPUT: `숫자를 입력해주세요 : `, ASK_RESTART: `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`, QUIT: `3개의 숫자를 모두 맞히셨습니다! 게임 종료`) 선언, 할당
  - 게임 결과(#GAME_RESULT) 메세지(STRIKE: `스트라이크`, BALL: `볼`, NOTHING: `낫싱`) 선언, 할당
  - (추가구현)에러(#ERROR_MSG) 메세지(ONLY_NUMBERS: `숫자만 입력해주세요.`, INVALID_LENGTH: `반드시 3개의 숫자를 입력해주세요.`, DUPLICATE_NUMBERS: `서로 다른 3개의 숫자를 입력해주세요.`, ONLY_ONE_OR_TWO: `1 또는 2를 입력해주세요.`) 선언, 할당

- [x] 2. 생성자 메서드(constructor) 초기화
  - 사용자의 3자리 숫자를 담을 변수(`userNumbers`) 선언
  - 상대방(컴퓨터)의 3자리 숫자를 담을 private 변수(`#computerNumbers`) 선언
  - 사용자 승리 상태를 담을 변수(`#isUserWon`) 선언, false 할당
  - 게임 시작 상태를 담을 변수(`#isStartGame`) 선언, true 할당(기본적으로 게임 시작)

### 1-2. 상태 변수 관리 함수(getter, setter) 구현

- [ ] 1. `#computerNumbers`의 getter, setter(`#getComputerNumbers`,`#setComputerNumbers`)
- [ ] 2. `#isUserWon`의 getter, setter(`getIsUserWon`, `#setIsUserWon`)
- [ ] 3. `#isStartGame`의 getter, setter(`getIsStartGame`, `#setIsStartGame`)

## 2. 상대방(컴퓨터)의 3자리 숫자 생성하는 기능(#initComputerNumbers) 구현

- [ ] 1. 배열를 인자로 받음(default는 [])
- [ ] 2. `Random.pickNumberInRange`를 이용해 Random 값 추출
  - [ ] 2.1 1 ~ 9 사이에서 배열에 존재하지 않으면(`Array.prototype.includes` 이용) push하고 인자로 넘김
- [ ] 3. 배열의 길이가 3이 되면 해당 배열을 `#setComputerNumbers`로 할당, return

## 3. 사용자 입력 기능 구현

### 3-1. 사용자로부터 입력받는 기능(#takeUserNumbersInput) 구현

- [ ] 1. #GAME_MSG.PLEASE_INPUT 출력하며 사용자의 값을 입력(`Console.readLine`을 이용) 받음
- [ ] 2. 숫자 배열로 변환(`String.prototype.split`, `Array.prototype.map`, `Number`을 이용)
- [ ] 3. 입력 유효성 검사([`checkUserNumbersInputValidity`](#3-2-세자리-숫자-유효성-검사-기능checkusernumbersinputvalidity-구현))
  - [ ] 3.1 catch에서 [`#handleException`](#9-에러-처리-기능handleexception-구현) 호출
- [ ] 4. 입력 받은 숫자 배열 return

### 3-2. 세자리 숫자 유효성 검사 기능(checkUserNumbersInputValidity) 구현

- [ ] 1. 1 ~ 9 숫자 외의 값이 입력될 경우(`Array.prototype.every`, `Number.isInteger` 이용) `throw` #ERROR_MSG.ONLY_NUMBERS
- [ ] 2. 입력된 숫자의 자릿수(배열의 길이)가 3보다 작거나 클 경우 `throw` #ERROR_MSG.INVALID_LENGTH
- [ ] 3. 입력된 3자리 수가 서로 다르지([`checkUnique`](#3-3-3자리-숫자-다른지-확인하는-기능checkunique-구현)) 않을 경우 `throw` #ERROR_MSG.DUPLICATE_NUMBERS

### 3-3. 3자리 숫자 다른지 확인하는 기능(checkUnique) 구현

- [ ] 1. 숫자 배열을 인자로 받음
- [ ] 2. `Set` 자료구조를 이용해 넘겨 받은 배열을 Set으로 변환
- [ ] 3. 해당 Set의 길이가 3보다 작을 경우 겹치는 숫자 존재하므로 return false

## 4. 사용자 입력 값과 상대방(컴퓨터)의 숫자 비교하는 기능(#compareEachNumbers) 구현

- [ ] 1. 길이가 3인 숫자 배열 2개(`computerNumbers`, `userNumbers`)를 인자로 받음
- [ ] 2. 볼, 스트라이크 개수를 담을 변수(ballCnt, strikeCnt) 선언, 각각 0 할당
- [ ] 3. `userNumbers`를 순회
  - [ ] 3.1 서로 같을 경우 `strikeCnt++`
  - [ ] 3.2 요소가 computerNumbers에 포함되어 있으면 `ballCnt++`
- [ ] 4. [ballCnt, strikeCnt]를 return

## 5. 결과값을 반환하는 기능(#getResult) 구현

- [ ] 1. [ballCnt, strikeCnt] 배열을 인자로 받음
- [ ] 2. 배열 값이 모두 0일 경우 #GAME_RESULT.NOTHING return
- [ ] 3. 0이 아닌 값이 있을 경우
  - [ ] 3.1 [#GAME_RESULT.BALL, #GAME_RESULT.STRIKE]과 합쳐서 2차원 배열화
  - [ ] 3.2 요소 개수에 따라 string array로 변환(`Array.prototype.filter`, `Array.prototype.map` 이용)
  - [ ] 3.3 출력할 string으로 변환(`Array.prototype.join`을 이용)
- [ ] 4. 해당 문자열 return

## 6. 결과값을 출력하는 기능(#printResult) 구현

- [ ] 1. 문자열을 인자로 받음
- [ ] 2. 결과 출력(`Console.print`을 이용)

## 7. 게임 종료 기능(#handleGameOver) 구현

- [ ] 1. 문자열을 인자로 받음
- [ ] 2. `3스트라이크`일 경우 `#setIsUserWon` true
- [ ] 3. 그 외 경우 `#setIsUserWon` false

## 8. 재시작 묻는 기능(#askRestart) 구현

- [ ] 1. #GAME_MSG.ASK_RESTART 출력하며 1 or 2 입력(`Console.readLine`을 이용) 받음
  - [ ] 1.1 1일 경우 `#setIsStartGame` true
  - [ ] 1.1 2일 경우 `#setIsStartGame` false
- [ ] 2. 입력 예외 사항(1,2 이외의 값일 경우)일 경우 `throw` #ERROR_MSG.ONLY_ONE_OR_TWO
  - [ ] 2.1 catch에서 [`#handleException`](#9-에러-처리-기능handleexception-구현) 호출

## 9. 에러 처리 기능(#handleException) 구현

- [ ] 1. (추가구현)catch에서 error 출력(`Console.print` 이용)
- [ ] 2. [`#exitApp`](#10-앱-종료-기능exitapp-구현) 호출

## 10. 앱 종료 기능(#exitApp) 구현

- [ ] 1. `Console.close`를 호출해 입력 종료

## 11. 게임 지속 기능(#continueGame) 구현

- [ ] 1. `userNumbers`에 [`#takeUserNumbersInput`](#3-1-사용자로부터-입력받는-기능takeusernumbersinput-구현) 호출 할당
- [ ] 2. [`#compareEachNumbers`](#4-사용자-입력-값과-상대방컴퓨터의-숫자-비교하는-기능compareeachnumbers-구현)에 `#getComputerNumbers`, `userNumbers` 인자로 넘기며 호출, 결과 배열 받음
- [ ] 3. 받은 결과 배열을 [`#getResult`](#5-결과값을-반환하는-기능getresult-구현)에 넘기며 호출, 결과 문자열 받음
- [ ] 4. 받은 결과 문자열을 [`#printResult`](#6-결과값을-출력하는-기능printresult-구현)에 넘기며 결과 출력
- [ ] 5. 받은 결과 문자열을 [`#handleGameOver`](#7-게임-종료-기능handlegameover-구현)의 인자로 넘기며 호출

## 12. 게임 시작 기능(#startGame) 구현

- [ ] 1. [`#initComputerNumbers`](#2-상대방컴퓨터의-3자리-숫자-생성하는-기능initcomputernumbers-구현) 호출
- [ ] 2. `getIsUserWon`가 false일 동안 [`#continueGame`](#11-게임-지속-기능continuegame-구현) 호출
- [ ] 3. `getIsUserWon`가 true일 경우 탈출
  - [ ] 3.1 #GAME_MSG.QUIT 출력(`Console.print` 이용)
  - [ ] 3.2 [`#askRestart`](#8-재시작-묻는-기능askrestart-구현) 호출

## 13. 게임 실행 기능(play) 구현

- [ ] 1. #GAME_MSG.START 출력(`Console.print` 이용)
- [ ] 2. `getIsStartGame`가 true일 동안 [`#startGame`](#12-게임-시작-기능startgame-구현) 호출
- [ ] 3. `getIsStartGame`가 false일 경우 탈출, [`#exitApp`](#10-앱-종료-기능exitapp-구현) 호출
