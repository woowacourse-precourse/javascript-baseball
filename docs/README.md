# 📄 기능 목록

## ⚙ 프로그램 시작 ( App.play() )

1. 컴퓨터가 랜덤으로 서로 다른 3자리 숫자를 가진다. ( Game.setRandomNumber() )

2. 게임 시작 문구와 숫자를 입력하라는 문구 출력한다.

## ⚙ 숫자 입력 ( Game.start(randomNumber) )

1. 사용자가 서로 다른 3자리 숫자를 입력한다. ( Game.setUserNumber )

## ⚙ 숫자 비교 ( Game.checkingResult(computer, player) )

1. 사용자가 올바른 숫자를 입력한다. ( Game.isValidNumber(number) )

   > 1.1 컴퓨터의 숫자와 사용자가 입력한 숫자 각 자리를 비교한다. ( Game.compareNumber(computer, player) )

   > > 1.1.1 컴퓨터의 숫자와 같으면 "3스트라이크"와 게임 종료 문구 출력한다. ( Game.displayResult(result) )

   > > 1.1.2 컴퓨터의 숫자와 다르면 결과 문구 출력한다. ( Game.displayResult(result) )

   > > > 1.1.2.1 같은 자리에 같은 숫자가 있으면 스트라이크 + 1 을 한다.

   > > > 1.1.2.2 다른 자리에 같은 숫자가 있으면 볼 + 1 을 한다.

   > > > 1.1.2.3 같은 숫자가 없으면 낫싱을 출력한다.

   > > 1.1.3 입력한 숫자가 일치할 때까지 "1.1"을 반복한다.

2. 사용자가 잘못된 숫자를 입력한다. ( Game.isValidNumber(number) )

   > 2.1 프로그램을 종료한다. (throw문을 이용한 예외처리)

## ⚙ 결과 출력 ( Game.over() )

1. 게임 종료 문구를 출력한다.

2. 새로 시작할 지 묻는 문구를 출력한다.

   > 2.1 사용자가 1 입력 시 프로그램 재시작한다.  
   > 2.2 사용자가 2 입력 시 프로그램을 종료한다.
