# App 클래스의 메서드 기능 목록

> ### 입출력 시 주의 사항
>
> `MissionUtils` 라이브러리에서 제공하는 `Console` API를 사용합니다.
>
> - 입력: `Console.readLine`
> - 출력: `Console.print`


---

# App 클래스

- 한 개의 필드
  - `referee`: `Referee` 클래스의 인스턴스

## `play()`: 게임을 시작하는 메서드

- referee가 게임을 시작합니다.

---

# Computer 클래스

- 한 개의 필드
  - `value`: private string

## `getValue()`: 컴퓨터의 값을 return하는 메서드

## `setRandomValue()`: 컴퓨터의 값을 랜덤하게 설정하는 메서드

- `MissionUtils` 라이브러리의 `Random.pickNumberInRange()`를 사용하여 1~9 까지 겹치지 않는 3자리 수를 만든 후 `computerValue` 필드에 저장합니다.

---

# Player 클래스

- 두 개의 필드
  - `value`: private string
  - `referee`: `Referee` 인스턴스

## `getValue()`: 플레이어의 값을 return하는 메서드

## `setValue()`: 플레이어의 값을 설정하는 메서드

- 숫자로 이루어져 있는지 확인합니다.
- 1부터 9까지 서로 다른 수로 이루어진 3자리의 수인지 확인합니다.
- 플레이어가 잘못 입력했다면 `throw`문을 사용해 예외를 발생시켜 게임을 종료합니다.

---

# Referee 클래스

- 두 개의 필드
  - `computer`: `Computer` 클래스의 인스턴스
  - `player`: `Player` 클래스의 인스턴스

## `gameStart()`: 게임을 시작하는 메서드

## `gameResult()`: 게임 결과를 보여주는 메서드

- 입력한 숫자의 결과를 출력합니다.
  - 같은 수가 같은 자리에 있으면 **스트라이크**
  - 다른 자리에 있으면 **볼**
  - 같은 수가 전혀 없으면 **낫싱**
- 볼과 스트라이크 둘 다 존재하는 경우 볼, 스트라이크 순으로 출력합니다.
- 3스트라이크일 경우 게임이 종료되고, `gameFinish()` 메서드를 호출합니다.
- 3스트라이크가 아닐 경우 `player.setValue()` 메서드를 호출하여 사용자의 수를 다시 입력 받습니다.

## `gameFinish()`: 게임 다시 시작 또는 종료를 결정하는 메서드

- 1을 입력하면 게임을 재시작합니다.
  - `gameStart()` 메서드를 호출합니다.
- 2를 입력하면 게임을 종료합니다.
- 1, 2를 제외한 다른 문자를 입력 시, 다시 `gameOver` 메서드를 호출합니다.
