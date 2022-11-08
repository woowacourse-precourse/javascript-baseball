# 기능 구현 목록

## GAME 시작

- CPU난수 생성
  - 3자리의 서로 중복되지 않은 숫자

## GAME 진행

- USER input 입력받기
  - 3자리의 서로 중복되지 않은 숫자
- CPU의 난수와 비교하여 결과를 반환

## GAME 결과

- 반환된 결과를 유저에게 보여줌
- 결과를 기준으로 GAME 종료 / 게임 진행으로 분기
  - 3스트라이크이면 GAME 종료
  - 그 외에는 모두 GAME 진행
- 게임 종료이면 GAME 시작 / 프로그램 종료로 분기

## GAME 종료

- GAME이 종료됨을 유저에게 보여줌
- USER의 input 입력받기
- input에 따른 GAME시작 / 프로그램 종료로 분기

# Error case

## GAME 진행

- USER의 input이 3자리의 숫자가 아닐 경우
- USER의 input이 중복되었을 경우

## GAME 종료

- USER의 input이 1 또는 2가 아닐 경우
