# 구현 기능 목록

## 🖥 컴퓨터의 숫자 선택

- Random 값 추출을 위해 MissionUtils 라이브러리의 Random.pickNumberInRange()를 활용한다.
- 중복되는 숫자가 추출되는 일을 피하기 위해 if문을 통해 중복되었는지 체크한다.

## 📩 입력과 출력 처리

- MissionUtils 라이브러리에서 제공되는 Console.print 를 이용해 게임메시지를 출력한다.
- MissionUtils 라이브러리에서 제공되는 Console.readLine를 이용해 유저의 입력을 받아준다.

## 🎰 숫자 비교하기

- ballStrikeCounter 를 만들어 [0,0]에서 시작하게 만든다.
- 컴퓨터가 발급받은 숫자가 같은 자리에 나오면 ballStrikeCount[1] 에 +1을 더한다.
- 컴퓨터가 발급받은 숫자가 다른 자리에 나오면 ballStrikeCount[0] 에 +1을 더한다.

## 🎮 게임 결과

- enterNumber 함수는 3스트라이크로 게임을 끝내기 전까지 계속해서 실행된다.
- ballStrike 가 [0,0]이라면 낫싱을 출력한다.
- 위 조건에 해당하지 않고 3스트라이크가 아니라면 각각 ballStrike[0]볼, ballStrike[1]스트라이크 를 출력한다.

## 🕹 종료 & 재시작

- restartOrFinish 함수를 통해 게임이 종료되면 "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요." 를 출력한다.
- MissionUtils 라이브러리의 Console.readLine 을 활용해 1이면 게임을 다시 처음부터 시작한다.
- 2가 반환되었을 경우, MissionUtils 라이브러리의 Console.close 를 활용해 종료한다.

## ❗️ 예외처리

- 입력받은 숫자가 겹치지 않는 3자리인지 확인.
- 아니라면 throw 문으로 오류를 출력한다.