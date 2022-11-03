# App 클래스의 메서드 기능 목록

> ### 입출력 시 주의 사항
>
> `MissionUtils` 라이브러리에서 제공하는 `Console` API를 사용합니다.
>
> - 입력: `Console.readLine`
> - 출력: `Console.print`

## 클래스 필드

- 사용자가 임의로 바꿀 수 없도록 하기 위해 private 필드로 선언합니다.
  - `#isPlaying`: 게임이 진행 중인지 확인하는 필드
  - `#computerValue`: 컴퓨터의 수
  - `#userValue`: 사용자의 수

## 클래스 메서드

- `play` 메서드 이외의 메서드들은 사용자가 호출할 수 없도록 하기 위해 private 메서드로 선언합니다.

---

## `constructor`: 필드 값을 초기화하는 생성자 메서드

## `play`: 게임을 시작하는 public 메서드

- 게임이 최초로 시작되면 `#isPlaying`이 true가 됩니다.
- `setRandomComputerValue` 메서드를 호출하여 컴퓨터의 수를 정합니다.
- `readUserValue` 메서드를 호출하여 사용자의 수를 정합니다.

## `setRandomComputerValue`: 컴퓨터의 수를 정하는 private 메서드

- `MissionUtils` 라이브러리의 `Random.pickNumberInRange()`를 사용하여 1~9 까지 겹치지 않는 3자리 수를 만든 후 `#computerValue` 필드에 저장합니다.

## `readUserValue`: 사용자의 수를 입력받는 private 메서드

- `MissionUtils` 라이브러리의 `readLine`에서 콜백 함수를 `setUserValue` 메서드로 하여 사용자의 수를 정합니다.

## `setUserValue`: 사용자의 수를 정하는 private 메서드

- `isAvailableValue` 메서드를 호출하여 입력된 값이 사용 가능한지 확인합니다.
- 사용자가 잘못 입력했다면 `throw`문을 사용해 예외를 발생시킨 후 `gameOver` 메서드를 호출하여 게임을 종료합니다.
- 사용자의 수를 입력받아 `#userValue` 필드에 저장합니다.
- `getResult` 메서드를 호출합니다.

## `isAvailableValue`: 입력된 수가 사용 가능한지 확인하는 private 메서드

- 숫자로 이루어져 있는지 확인합니다.
- 1부터 9까지 서로 다른 수로 이루어진 3자리의 수인지 확인합니다.
- 사용할 수 있으면 `true`, 없으면 `false`를 리턴합니다.

## `getResult`: 결과를 출력하는 private 메서드

- 입력한 숫자의 결과를 출력합니다.
  - 같은 수가 같은 자리에 있으면 **스트라이크**
  - 다른 자리에 있으면 **볼**
  - 같은 수가 전혀 없으면 **낫싱**
- 볼과 스트라이크 둘 다 존재하는 경우 볼, 스트라이크 순으로 출력합니다.
- 3개의 숫자를 모두 맞힐 경우 게임이 종료되고, `gameOver` 메서드를 호출합니다.
- 모두 맞히지 못한 경우 `readUserValue` 메서드를 호출하여 사용자의 수를 다시 입력 받습니다.

## `gameOver`: 게임을 종료하는 메서드

- `#isPlaying` 값을 `false` 로 바꿉니다.
- `#computerValue` 값을 `null` 로 바꿉니다.
- `#userValue` 값을 `null` 로 바꿉니다.

- 1을 입력하면 게임을 재시작합니다.
  - `play` 메서드를 호출합니다.
- 2를 입력하면 게임을 종료합니다.
