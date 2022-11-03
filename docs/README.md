메인 함수 play의 workflow (각 step을 순차로 진행)
1. '숫자 야구 게임을 시작합니다' 라는 문구 출력
2. 컴퓨터는 임의의 수를 정함 - setComputerNum
3. '숫자를 입력해주세요 :' 문구 출력 뒤 사용자가 임의의 수를 입력 (1~9인 서로 다른 3개의 수로 이루어진 3자리 수)
    3-1. 3자리 수가 아닐경우 예외를 발생시키고 프로그램 종료
    3-1. 각 자리의 수가 중복되는 경우 예외를 발생시키고 프로그램 종료
4. 입력된 수와 컴퓨터의 수를 비교 - (counterStrike, countBall) => result
5. 비교 결과를 출력 - resultString
    5-1. 3스트라이크 일 경우 '3개의 숫자를 모두 맞히셨습니다! 게임 종료' 출력 후 6번으로 진행
    5-2. 3스크라이크가 아닐 경우 해당 예측의 결과를 출력하고 2번 단계로 돌아감
6. '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.' 문구 출력 후 사용자 입력을 받음
    6-1. 1을 입력시 2번으로 돌아감
    6-2. 2를 입력시 프로그램 종료
    6-3. 이외의 값을 입력시 예외를 발생시키고 프로그램 종료

구현 기능 목록
- setUserNum()
    - 사용자의 입력을 받아 사용자 수를 설정하는 함수
    - Console.readLine() 사용
    - 예외처리 필요 : 3자리 수, 각 자리 수 중복 여부

- setComputerNum()
    - 컴퓨터 수를 설정하는 함수
    - Random.pickNumberInRange()를 활용하여 random하게 각 자리수를 설정

- countStrike()
    - 스트라이크 수를 계산하여 반환하는 함수
    - 입력한 수(이하 input)와 컴퓨터수(이하 computer)의 각 자리를 비교
    - 각 자리의 수가 같을 경우 +1
    - return strike

- countBall()
    - 볼 수를 계산하여 반환하는 함수
    - input과 computer가 공통으로 가지는 수 세기
    - 같은 수가 다른 자리에 위치할 경우 +1 
    - return ball

- result()
    - countStrike 와 countBall 의 결과에 따라 해당 예측의 결과를 반환하는 함수
    - return [strike, ball]

- resultString()
    - 결과에 따른 문구 출력
    - (ball && {ball}볼) (strike && {strike}스트라이크)
