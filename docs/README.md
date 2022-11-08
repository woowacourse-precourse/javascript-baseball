## class App 
- 게임을 시작하는 play()
- 랜덤 숫자를 생성하는 createRandom()
- 인게임을 진행할 inGame()
- 게임 재시작 여부를 확인할 restart()
- 입력된 값 예외처리할 checkInput()
- 입력값과 랜덤값을 비교할 compareNumbers()

## 기능 확인
1. 컴퓨터와 나의 입력
- 컴퓨터의 랜덤 숫자는 play가 되면 받아온다.
- MissionUtils.Console.readLine()로 받아온 값은 string 타입의 input일 때
    - input.length = 3
    - input은 100~999 사이의 숫자여야한다.
    - input의 각 자리수는 중복이 없어야 한다.
2. 게임이 진행될 compare
- 컴퓨터의 값과 내값을 비교한다.
    - 맞춘 수의 따라 맞춘 위치에 따라 볼, 스트라이크, 낫싱 출력
    - 동일할 경우 restart로 넘어간다.

3. 게임이 반복 혹은 종료될 restart
- 재시작/종료를 나타내는 1/2를 입력받고 play()로 넘어간다.