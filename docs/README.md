# 요구사항 분석 및 설계

## 요구사항

1.게임을 플레이 할 수 있다.

- 게임은 다음과 같은 과정으로 진행된다.

  1. 게임시작을 알린다.
  2. 컴퓨터 - 숫자 선택
  3. 인풋 - 유저 인풋
  4. 결과구하기
  5. 결과 출력
  6. 정답유무에 따라 2번부터 재시작 또는 게임종료
  7. 게임종료후 재시작 의사에 따라 1번부터 재시작 또는 application 종료

2.사용자의 입력이 바르지 않으면, 에러를 던져서 종료시킨다.

### 기능 목록

---

- 위의 요구사항을 따라 기능들을 순서대로 나열하고, 클래스별로 정리하면 다음과 같다.

1. 입출력 인터페이스를 위한 [IO 클래스](#io-클래스)
2. 게임클래스의 커맨드 패턴
3. 입력이 올바른 입력인지 확인하는 [Validator](#validator-클래스)와 올바르지 않은 입력을 처리하기 위한 [에러클래스](#invalidinputerror-클래스)
4. 컴퓨터와 사용자가 선택한 번호를 관리하는 [User, Computer클래스](#player-클래스추상클래스)
5. 선택된 두 숫자 튜플을 비교하는 [`Game.compare(computer, user)`](#comparecomputer-user)
6. 결과 출력을 위한 [`Game.outputResult({strike,ball})`](#outputresultstrike-ball)
7. 게임이 끝났는지 확인하는 [`Game.isEnd({strike,ball})`](#isendstrike-ball)
8. 게임종료후, 리플레이 할 것인지 물어보는 [`Game.askReplay()`](#askreplay)
9. 리플레이를 실행하는 [`Game.replay()`](#replay)
10. 게임진행을 위한 메소드 구현
    - 재시도를 위한 [`Game.retry()`](#retry)
    - 사용자의 입력을 받기 위한 [`Game.asknumber()`](#asknumber)
    - 시도하기 위한 [`Game.attempt(input)`](#attemptinput)
    - 플레이를 위한 [`Game.playCommand()`](#playCommand)

#### 필요한 클래스

---

- [I/O 클래스](#io-클래스): 입/출력을 담당한다.
- [Game 클래스](#game-클래스): 게임을 진행시킨다.
- [Player 추상클래스](#player-클래스추상클래스): 컴퓨터클래스와 유저클래스의 추상클래스

##### IO 클래스

입출력을 담당하는 클래스다. `Console`클래스를 랩핑하여 Application이 특정 클래스에 의존하지 않도록 만든다. Application은 입출력을 위해 IO클래스를 인터페이스로 쓸 수 있게한다.

##### Game 클래스

게임에 필요한 메소드들을 정의하고, 구현한다.
커맨드 패턴을 이용하여 App.play()가 Game클래스의  커맨드를 호출하도록 한다.

`playCommand()` 커맨드를 지닌 클래스로 구현한다.

- 해당 클래스가 지녀야 할 멤버변수들은 다음과 같다.

```js
class Game{
  ...
  this.user = new User();
  this.Computer = new Computer();
}
```

- 해당 클래스가 해야할 일은 다음과 같다.
  - 게임시작
    - 입력받기
    - 게임결과 구하기
    - 결과 출력
    - 종료 혹은 재시작
  - 예외처리기능
  
###### playCommand()

- 이 게임을 시작시키는 커맨드역할을 한다.

###### askNumber()

- 사용자에게 입력할 숫자를 묻는다. callback은`attempt(input)`이다.

###### attempt(input)

- 사용자에게 받은 인풋을 가지고 답을 맞추기 위한 시도를 한다.
- 아래의 과정을 수행한다.
  - 받은 입력을 사용자자의 숫자로 저장한다.`Game.user.setNumber(input)`
  - 받은 인풋으로 사용자와 컴퓨터의 번호를 비교한다.`compare(computer, user)`
  - 비교결과에 따른 결과를 출력한다.`outputResult(result)`
  - 게임이 끝났는지 확인한다. `isEnd(result)`
  - 게임이 끝났다면 재시작할지 묻는다. `askReplay()`
  - 게임이 끝나지 않았다면 `askNumber()`를 재호출한다.

###### compare(computer, user)

- 두 입력을 비교한다
- `{strike: number, ball: number}`형태의 객체를 리턴한다.

###### outputResult({strike, ball})

- `strike`와 `ball`을 출력을 담당한다.

###### isEnd({strike, ball})

- 스트라이크 갯수를 가지고 게임이 끝났는지 판단한다.

###### retry()

- 정답이 틀렸을 경우 재시도를 위해 호출한다.여기에서 `askNumber()`를 호출한다.

###### outputEnded()

- 게임이 끝났다는 메시지를 출력한다.

###### askReplay()

- 재시작할 것인지 물어보고 decideReplay를 콜백으로 사용한다.

###### decideReplay(input)

- askReplay에서 콜백으로 실행한다. input을 가지고 재시작/종료를 결정한다.

###### replay()

- `gameCommand()`를 호출해 게임을 재시작할 수 있도록한다.

###### exit()

- 게임종료를 위해 호출한다. `Io.close()`를 호출한다.

##### Player 클래스(추상클래스)

Player클래스는 추상클래스로 Computer와 User를 구상클래스로 지닌다. Computer와 User클래스는 Player클래스의 추상메소드를 구현해야한다. 아래의 메소드들을 추상메소드로 지닌다.

###### setNumber(input)

- User클래스는 내부 메소드 `parseNumbers(input)`을 이용해 주어진 문자열을 숫자배열로 만든다.
- Computer클래스는 `Random.pickNumberInRange`를 이용해 주어진 문자열을 유니크한 3개의 숫자를 갖는 배열로 만든다.

###### getNumber()

- class의 number 멤버변수를 리턴한다.

##### InValidInputError 클래스

- 입력이 잘못되었을 경우 InValidInputError를 던지고 종료하기 위해 구현한다.

##### Validator 클래스

- 주어진 입력이 유효한지 평가하는 역할을 수행한다.
- 유효하지 않은 경우, [InValidInputError](#invalidinputerror-클래스)를 던진다.

###### isLegth(iter, length)

- 길이를 확인한다. 길이가 다르면 `InValidInputError`를 던진다.

###### isInRange(iter, min, max)

- 최소값과 최댓값의 범위안에 있는지 확인한다.
- 범위를 벗어나면 `InValidInputError`를 던진다.

###### isUnique(iter)

- iterable의 각 아이템들이 Unique한 값인지 확인한다.
- unique하지 않으면 `InValidInputError`를 던진다.
