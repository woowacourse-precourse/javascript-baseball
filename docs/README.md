## 숫자 야구 - 기능 목록

* `App.play()`: 숫자 야구 게임 실행
    - 게임 시작 문구 '숫자 야구 게임을 시작합니다.' 출력 
    - `ComputerNums` <= App.generate_computerNums()
    - App.match(computerNums)

* `App.generate_computerNums()`: 3자리 수 랜덤 생성하는 기능
    - MissionUtils.Random.pickNumberInRange()

* `App.match(computerNums)`: 플레이어가 예상한 숫자를 입력받아 한 턴의 게임을 실행하는 기능
    - `playerNums` <= MissionUtils.Console.readLine()
    - App.vaildate_playerNums(playerNums)
    - compareNums(computerNums, playerNums)
    - 만약 computerNums, playerNums가 같다면 ask_restart()

* `App.vaildate_playerNums(nums)` : playerNums 입력값 유효성 검사 기능
    - [예외 처리]: 길이가 3이 아닌 값을 입력할 경우  
    - [예외 처리]: 숫자가 아닌 값을 포함한 값을 입력할 경우  
    - [예외 처리]: 0이 포함된 수를 입력할 경우  
    - [예외 처리]: 중복된 값이 있는 수를 입력할 경우  

* `compareNums(computerNums, playerNums)` : computerNums, playerNums을 비교해서 결과값을 출력하는 기능
    - 같은 수가 같은 자리에 있으면 스트라이크 count
    - 같은 수가 다른 자리에 있으면 볼 count
    - 스트라이크나 볼이 있으면 count한 것을 출력, 없으면 낫싱 출력

* `isCorrect(computerNums, playerNums)` : player가 정답을 맞췄는지 bool로 반환하는 기능

* `ask_rePlay()` : 입력값을 받아 다시 실행하거나 게임을 종료하는 기능
    - '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.' 출력
    - `answer` <=  MissionUtils.Console.readLine()
    - answer가 1이면
        + `ComputerNums` <= App.generate_computerNums()
        + App.match(computerNums)
    - answer가 2이면
        + 게임 종료