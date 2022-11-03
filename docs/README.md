## 기능 명세서

- [x] 게임 시작 시 "숫자 야구 게임을 시작합니다" 문구를 띄운다.

- [x] 컴퓨터의 Random 숫자 3개를 만든다.

- [x] 유저가 문제를 맞출 때까지 "숫자를 입력해주세요 : " 문구를 띄운 후 입력을 기다린다.

- [ ] 유저가 `서로 다른 3개의 숫자` 입력하면, 이에 대한 결과를 볼과 스트라이크 개수로 표시한다.
  - [ ] `스트라이크` 표시: 유저가 말한 숫자들과 컴퓨터의 숫자들 중, 같은 수가 같은 위치에 있을 시 스트라이크
  - [ ] `볼` 표시: 유저가 말한 숫자들과 컴퓨터의 숫자들 중, 같은 수가 다른 위치에 있을 시 볼
- [ ] 유저가 말한 숫자들과 컴퓨터의 숫자들 중 같은 수가 없을 시 `낫싱` 표시
- [ ] 사용자가 올바른 입력 값(서로 다른 3개의 숫자)를 입력하지 않을 시 throw Error.
  - 잘못된 입력 값: 숫자 길이가 3개가 아님 || 숫자들이 서로 다르지 않음
- [ ] 유저가 말한 숫자들과 컴퓨터의 숫자들이 동일할 시 맞추었다는 문구와 함께 게임 종료한다.
  - 문구: "3스트라이크\3개의 숫자를 모두 맞히셨습니다! 게임 종료"
- [ ] 게임 종료 후 게임을 완전히 종료할 것인지 문구를 띄운다.
  - 문구: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
- [ ] 사용자의 입력값 받은 후, 입력값에 따라 게임을 다시 시작하거나 종료시킨다.
  - 1: 게임 다시 시작
  - 2: 종료
  - 이외의 값: throw Error

<br />

## 2. 알고리즘 Flow

0. constructor
   ** instance property **

   - 1. this.input = 유저의 입력값
   - 2. this.computerNum = 컴퓨터의 입력값
   - 4. this.inputValid = 유저의 입력값이 유효한지 여부
   - 3. this.isEqualInputAndComputerNum = 유저 입력값과 컴퓨터의 숫자와 동일한지 여부

   - 4. this.computer = 컴퓨터 인스턴스
   - 5. this.user = 유저 인스턴스
   - 6. this.checkValid = 유저 입력값 유효성 평가 인스턴스

1. 게임 시작 시 "숫자 야구 시작"

   - 다시 실행할 때(= 게임 종료 후 1 클릭)

2. 컴퓨터 Random 숫자 3개를 만든다.

   - 컴퓨터 3개 입력값 만들기
     - const computerNumber = this.computer.makeRandomNumbers()
     - Random.pickNumberInRange util 이용
   - 해당 입력값을 join후, 상위 컴포넌트인 App.js로 올려준다.
     - this.computerNumber = computerNumber

3. 유저가 맞는 입력값을 입력할 때 match loop

   - while (this.isEqualInputAndComputerNum === false)
   - match하면서 결과 문자열을 출력하기

4. 유저의 입력값을 기다리기

   - 유저가 입력한다
     const userInput = this.user.getUserInput();
   - 해당 입력값을 상위 컴포넌트인 App.js로 올려준다.
     this.input = userInput

5. 입력한 값의 유효성을 평가한다

   - 입력한 값의 유효성을 평가한다.
     const inputValid = this.checkValid.validate(userInput)
   - 유효성 평가

     1. 입력한 숫자 길이가 3이다
     2. 입력한 숫자가 1~9 사이에 있다.

   - 유효한 값이 아니라면 { throw error; }
   - 유효한 값이라면 match 시작
     if (inputValid) const matchMessage = this.match()

6. 컴퓨터와 유저의 입력값을 비교한 다음 결과값을 출력한다.

   - 같은 숫자 + 위치 = 스트라이크
   - 같은 숫자 + 다른 위치 = 볼
   - 모든 숫자가 다를 시 = 낫싱

7. 게임 종료 시 게임 종료 문구 띄우면서 유저가 계속 게임할것인지 여부를 입력값으로 받음
   - 1: 게임 다시 시작 -> restart 함수
   - 2: 종료 -> return
   - 이외의 값: throw Error
