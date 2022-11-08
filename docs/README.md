## 전체 기능 요약

1. 컴퓨터는 1~9 서로 다른 임의의 수 3개 선택을 한다
2. 게임 플레이어는 서로 다른 숫자 3개의 숫자를 입력한다
3. 컴퓨터는 입력한 숫자에 대한 결과 출력

## 각 기능 목록

1. 컴퓨터가 랜덤으로 숫자 뽑기
   - [x] 랜덤으로 숫자를 뽑아야 함
   - [x] a를 3번 반복해야 함
   - [x] 중복이 있는 지 확인하기
2. 유효성 검사(Validator)
   - [x] 플레이어 입력의 예외처리 진행
     - [x] 게임 중 입력하는 값이 3자리인지 확인
     - [x] 게임 중 입력하는 값이 숫자인지 확인
     - [x] 게임이 종료된 후 입력하는 값이 1 또는 2인지 확인
3. 게임 (BaseBallGame)
   - [x] 게임 메세지를 관리하는 객체 만들기
   - [x] 게임 시작하기
   - [x] 사용자의 입력인 숫자 3자리를 받기
     - 입력 값 에러 검사 진행
   - [x] 입력값을 정답이랑 비교해 결과 만들기
     - [x] 볼, 스트라이크 갯수 세기
   - [x] 결과 메세지 보여주기
   - [x] 다 맞추면 게임 진행할 지 말지 결정하기
     - 입력 값 에러 검사 진행

## 각 Class 별 메서드

1. **RandomNumber** : 랜덤으로 숫자 뽑기
   - `isDuplicatedNumber` : 중복된 숫자가 있는 지 확인
   - `getRandomNumber` : MissionUtils 라이브러리에 있는 Random API를 통해 숫자 하나 뽑기
   - `generateAnswerNumbers` : 새로운 랜덤 숫자들 생성하기
2. **BaseBallGame :** 숫자 야구 게임 진행
   - `getNewComputerNumber` : 컴퓨터의 랜덤 숫자 받음
   - `clearBallAndStrikeCount` : 볼, 스트라이크 갯수 0으로 초기화하기
   - `start` : 처음 게임을 시작함
   - `restart` : 게임 재시작
   - `isValidGameInput` : 사용자 입력 값이 게임에 맞는 알맞은 숫자인지 확인
   - `inputNumber` : 입력 값을 받기
   - `checkBallAndStrike` : 입력값에 따라 볼, 스트라이크 갯수 세기
   - `isStrike` : 스트라이크 숫자인지 확인
   - `isBall` : 볼 숫자인지 확인
   - `countStrike` : 스트라이크 갯수 세기
   - `countBall` : 볼 갯수 세기
   - `checkPlayerWin` : 사용자가 3스트라이크로 게임을 이겼는 지 확인함
   - `viewMessage` : 사용자 입력 값에 따른 게임 결과 출력 메세지 보여주기
   - `selectMessage` : 사용자 입력 값에 알맞은 게임 메세지 반환
   - `isValidResetOrEndInput` : 게임 종료 후 사용자 입력 값 유효성 검증
   - `checkRestartOrEndGame` : 게임 종료 후 재시작 혹은 게임 종료 확인
3. **Validator :** 유효성 검증 및 에러 던지기
   - `throwTypeError` : 에러 메시지 던지기
   - `isValidLength` : 게임 중 사용자 입력 값이 유효한 길이인지 확인
   - `isAllNumber` : 게임 중 사용자 입력 값이 모두 숫자인지 확인
   - `isGameNumberInput` : 게임 중 사용자 입력 값 유효성 확인
   - `isValidGameEndInput` : 게임 종료 후 사용자 입력 값이 1 또는 2인지 확인
   - `isResetOrAndInput` : 게임 종료 후 사용자 입력 값 확인 후 에러 던지기
