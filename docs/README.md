# ⚾ 프리코스 2주차 미션 - 숫자 야구 ⚾

## 기능 구현 목룍

- [x] **게임 시작**

  - [x] 시작 문구 출력
  - [x] 게임 준비 메서드 호출

- [x] **게임 준비**

  - [x] 랜덤 숫자 생성 함수 호출을 통해 정답 생성
  - [x] 결과 확인 기능 호출

- [x] **결과 확인**

  - [x] input value validate 함수 호출
  - [x] 입력값 유효하지 않다면 Error throw
  - [x] 볼 / 스트라이크 개수 구하기
  - [x] 볼 스트라이크 개수 혹은 '낫싱' 메시지 출력
  - [x] 3스트라이크 시 재시작 / 종료 여부 확인

- [x] **input value 오류 시 게임 종료**

  - [x] throw문을 이용하여 예외 발생시키기

- [x] **재시작 / 종료 여부 확인**

  - [x] 게임 성공 문구 출력
  - [x] 재시작 / 종료 여부 문구 출력
  - [x] 입력값에 따라 재시작, 종료 동작. (1, 2 이외의 문자 or 숫자 입력시 Error throw)

## 사용한 메서드 & 함수

### Methods

    - gamePrepare()
    - gameStart()
    - gameRestartCheck()
    - gameExit()
    - gameInputError()

### Functions

    - countBallAndStrike()
    - createRandomNumber()
    - printResultMessage()
    - validateInputValue()
