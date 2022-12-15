## **🎯** 기능 요구사항

- 주어진 횟수 동안 **n 대의 자동차는 전진 or 정지**.
- **자동차에 이름**을 부여할 수 있다. **전진하는 자동차를 출력할 때 자동차 이름을 같이 출력**한다.
- 자동차 이름은 **쉼표(,)를 기준으로 구분하며 이름은 5자 이하만** 가능하다.
- 사용자는 **몇 번의 이동을 할 것인지를 입력**할 수 있어야 한다.
- **전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우**이다.
- 자동차 경주 게임을 완료한 후 **누가 우승했는지**를 알려준다. 우승자는 한 명 이상일 수 있다.
- **우승자가 여러 명일 경우 쉼표(,)**를 이용하여 구분한다.
- • 사용자가 잘못된 값을 입력한 경우 `throw`문을 사용해 예외를 발생시키고, "[ERROR]"로 시작하는 에러 메시지를 출력 후 그 부분부터 입력을 다시 받는다.

- 다음과 같이 Car 객체를 만들고, new 를 이용해 인스턴스를 만들어 사용한다.

```jsx
function Car(name) {
  this.name = name;
}

class Car {
  constructor(name) {
    this.name = name;
  }
}
```

## 입력 요구 사항

- 시작 문구 입력
- 자동차 이름 입력
- 시도 횟수 입력

## 출력 요구 사항

- 게임 결과 출력
- 최종 우승자 출력

## 출력 결과 예시

```
자동차 경주 게임을 시작합니다.

자동차 이름을 5자 이하 콤마로 구분하여 입력해주세요.
east, west, south, north

시도할 횟수를 입력해주세요.
3

실행 결과
east: -
west:
south:
north: -

east: --
west:
south:
north: --

east: --
west:
south: -
north: ---

최종 우승자: north
```

### 라이브러리

- 전진하는 조건을 판단하기 위한 랜덤 값은 `[MissionUtils` 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)의 `Random.pickNumberInRange`를 사용해 구한다.
  - `MissionUtils` 라이브러리 스크립트는 `index.html`에 이미 포함되어 전역 객체에 추가되어 있으므로, 따로 `import` 하지 않아도 구현 코드 어디에서든 사용할 수 있다.
  ```
  // ex)
  const randomNumber = Random.pickNumberInRange(0, 9);
  ```

## 애플리케이션 Flow

1. 자동차 경주 게임 시작 메세지 띄우기
   ```
   자동차 경주 게임을 시작합니다.
   ```
2. 자동차 이름 받기

```
자동차 이름을 5자 이하 콤마로 구분하여 입력해주세요.
east, west, south, north
```

- 자동차 이름 입력받기 carList
- 입력받은 자동차 이름을 Model에 저장하기 carList

1. 시도할 횟수를 입력

```
시도할 횟수를 입력해주세요.
```

- 시도할 횟수를 입력받기 trialCnt
- 입력받은 횟수를 Model에 저장하기 trialCnt

4. 실행 결과

```
실행 결과
east: -
west:
south:
north: -

east: --
west:
south:
north: --

east: --
west:
south: -
north: ---
```

- trailCnt -= 1
- 각각의 차에 대해 random pickNumberInRange를 이용해 loop돌리면서 전진 여부 확인하기
  - 4이상이어서 전진 가능하면 각 차를 +1
- 현재 케이스에 대해 출력하기 (이름: 전진(-) 개수 출력)
- trailCnt가 0이 될 때까지 실행

1. 최종 우승자 출력

```
최종 우승자: north
```

- 전진 개수가 가장 많은 자동차 출력
- 게임 종료

# 모듈

## View

게임 입출력 담당 (InputView, OutputView 로직 위임)

### 1. InputView

- [x] 자동차 이름 입력 inputCarNameList
- [x] 시도할 횟수 입력 inputTrailCnt

### 2. OutputView

- [x] 자동차 게임 시작 메세지 출력 renderGameStartCommand
- [x] 각 시도에 대한 자동차 게임 결과 출력 renderGameTrailResultCommand
- [x] 최종 우승자 출력 renderGameWinner

## Model

- []
- []
- []

## Ctrl

## Validation
