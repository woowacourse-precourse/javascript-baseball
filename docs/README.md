## 🚀 구현할 기능 목록

- 기능1 : 상대방(컴퓨터)의 무작위 숫자 세 개 뽑기 구현
- 기능2 : 사용자(플레이어)의 입력값 검증 구현
- 기능3 : 3스트라이크 일때 검사/재시작/종료 구현
- 기능4 : 몇 볼/몇 스트라이크인지 계산 표시 구현(힌트 기능)

## 🚀 1. 상대방(컴퓨터)의 무작위 숫자 세 개 뽑기 구현

위 숫자 야구게임에서 상대방의 역할을 컴퓨터가 한다.
컴퓨터는 1에서 9까지 서로 다른 임의의 수 3개를 선택한다.

- 예) 상대방(컴퓨터)의 수가 425일 때 성공
  - 422 처럼 같은 수가 중복으로 뽑히면 안된다.
  - 4251 처럼 세 개 이상의 수를 뽑으면 안된다.
  - 420 처럼 1부터 9까지의 범위를 넘거나 미만이면 안된다.
  - 숫자는 항상 자연수 여야한다.
  - 1부터 9까지 범위 안의 수를 무작위(랜덤)으로 뽑아야 한다.
- 예) 숫자 야구 게임을 시작합니다.

### 라이브러리

- [MissionUtils 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)에서 제공하는 `Random` 및 `Console` API를 사용하여 구현해야 한다.
  - Random 값 추출은 [MissionUtils 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)의 `Random.pickNumberInRange()`를 활용한다.

#### 사용 예시

```javascript
const computer = [];
while (computer.length < 3) {
  const number = MissionUtils.Random.pickNumberInRange(1, 9);
  if (!computer.includes(number)) {
    computer.push(number);
  }
}
```

## 🚀 2. 사용자(플레이어)의 입력값 검증 구현

게임 플레이어는 컴퓨터가 생각하고 있는 서로 다른 3개의 숫자를 입력한다.

- 예) 사용자(플레이어)의 수가 425일 때 성공
  - 422 처럼 같은 수가 중복으로 입력하면 안된다.
  - 4251 처럼 세 개 이상의 수를 입력하면 안된다.
  - 420 처럼 1부터 9까지의 범위를 넘거나 미만이면 안된다.
  - 숫자는 항상 자연수 여야한다.
- 사용자가 잘못된 값을 입력한 경우, throw 문을 사용해 예외를 발생시킨 후, 애플리케이션은 종료되어야 한다.
- 사용자의 값을 입력 받고 출력하기 위해서는 [MissionUtils 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)에서 제공하는 `Console.readLine`, `Console.print`를 활용한다.
- 예) 숫자를 입력해주세요: 123

## 🚀 3. 3스트라이크 일때 검사/재시작/종료 구현

컴퓨터가 선택한 3개의 숫자를 모두 맞히면 게임이 종료된다.
게임을 종료한 후 게임을 다시 시작하거나 완전히 종료 할 수 있다.
게임이 끝난 경우 재시작/종료를 구분하는 1과 2 중 하나의 수를 입력받는다.

- 예) 3개의 숫자를 모두 맞힌 경우(3스트라이크 일 경우)
  - 3스트라이크 3개의 숫자를 모두 맞히셨습니다! 게임 종료
- 3스트라이크가 아닌 경우 힌트를 제공한 후 계속해서 사용자의 입력값을 받는다.
  - 1볼 1스트라이크 숫자를 입력해주세요: 123
- 게임 재시작/종료 문구 출력
  - 게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.
  - 사용자가 잘못된 값을 입력한 경우, throw 문을 사용해 예외를 발생시킨 후, 애플리케이션은 종료되어야 한다.
  - 사용자의 값을 입력 받고 출력하기 위해서는 [MissionUtils 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)에서 제공하는 `Console.readLine`, `Console.print`를 활용한다.
- 게임 재시작시, 사용자 입력 값을 받고 다시 게임 시작

## 🚀 4. 몇 볼/몇 스트라이크인지 계산 힌트 표시 구현

컴퓨터는 입력한 숫자에 대한 결과를 출력한다.

- 예) 입력한 수에 대한 결과를 볼, 스트라이크 개수로 표시
  - 1볼 1스트라이크
  - 볼과 스트라이크가 같이 있는 경우, 볼을 먼저 표시한다.
- 일치하는 수가 하나도 없는 경우엔 낫싱
- 일치하는 수는 있지만 자리가 다른 경우엔 볼
- 수와 자리가 모두 일치하는 경우엔 스트라이크
