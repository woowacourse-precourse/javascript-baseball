# 기능 목록

## App

[O] strike의 값이 3개라면 while 문 종료
[O] inputView.js 에서 3가지 숫자를 사용자에게 입력받는다.
[O] 입력받은 값을 Controller.js로 전송한다.
[O] OutputView.js에서 결과를 출력
[O] 3 strike의 경우 다시 게임할건지 유저에게 입력받는다.
[O] 다시 게임할건지 유저에게 입력받은 값을 숫자로 바꿔 controller로 전달한다.

## model

[O] 1~9 까지 랜덤한 숫자 3개를 생성한다.
[O] 입력값과 생성값을 비교하셔 ball의 숫자를 리턴
[O] 입력값과 생성값을 비교하셔 Strike의 숫자를 리턴
[O] 사용자에게 입력받은 값과 기존에 생성된 값을 비교하여 결과를 OutputView.js로 보냄

## controller

[O] inputView.js에서 입력받은 값을 전송받아 숫자로 가공한다.
[O] 숫자로 가공된 값을 validate.
[O] validate 통과한 값은 Model.js로 전송
[O] 다시 게임을 할건지 묻는 입력값을 validate한다.

## 테스트코드
