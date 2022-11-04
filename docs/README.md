## 💡 Features List of Number Baseball Game

### `createRandomNum` : function

- Params
  - 없음
- Return Value
  - 3자리의 난수를 생성하여 반환<br>
    ex) `435`, `698`, `129`
- Usage
  - `app.play` 호출 시 최초 한 번만 호출
- Description
  - MissionUtils 라이브러리의 `Random` API를 사용하여 생성

### `#randomNum` : number

- Description
  - `createRandomNum` 함수가 생성한 3자리의 난수를 외부에서 접근할 수 없도록 private 필드로 할당

```Javascript
class App {
  ...
  #ramdomNum
  ...
}
```

### `compareNums` : function

- Params
  - 1 - `randomNum`
  - 2 - `userInput`
- Return Value
  - "스트라이크", "볼" 개수를 프로퍼티로 가지는 객체 `compareResults` 반환 <br>
    ex) `{ strike: '1', ball: '2' }`
- Usage
  - 매개변수로 3자리의 난수와 플레이어의 입력 값을 전달 받아 값과 자리가 일치하는지 비교
    - 3자리 중 숫자와 자리까지 일치하는 만큼 `strike` 개수 저장
    - 3자리 중 숫자만 일치하고 자리는 일치하지 않는 만큼 `ball` 개수 저장
- Description
  1. 함수 내부에서 `randomNum`과 `userInput` 각각 `split` 메서드를 사용하여 배열 생성
  2. `userInput` 배열을 순회하며 각각의 숫자마다 `randomNum.includes` 메서드를 호출
  3. 반환 값이 `true`인 경우 배열의 index까지 서로 비교<br>
     3-1. 일치하면 `strike` 값에 1을 더하여 저장<br>
     3-2. 일치하지 않으면 `ball` 값에 1을 더하여 저장<br>
  4. 반환 값이 `false`인 경우 다음 숫자 순회로 이동
  5. 배열의 순회가 종료되면 `strike`, `ball`을 프로퍼티로 가지는 `compareResults` 객체 반환

### `printResults` : function

- Params
  - `compareResults`
- Return Value
  - 전달 받은 매개 변수를 토대로 결과 값에 해당하는 문자열 반환
- Usage
  - "스트라이크"나 "볼"이 1개 이상 존재하는 경우 각각의 개수만큼 "스트라이크", "볼" 출력<br>
    ex) `1볼`, `1볼 1스트라이크`
  - "스트라이크", "볼"이 없는 경우 "낫싱" 출력<br>
    ex) `낫싱`
  - "스트라이크" 개수가 3개인 경우 게임 초기화 함수 호출
    ex) `3스트라이크`
  - 결과를 출력한 후 사용자의 입력을 받을 수 있도록 해야 함
- Description
  - MissionUtils 라이브러리의 `Console` API를 사용하여 출력

### `resetGame` : function

- Params
  - 없음
- Return Value
  - 게임 종료 및 초기화 방법을 안내하는 문자열 출력
- Usage

  - 게임 종료 및 초기화 방법을 문자열로 출력<br>
    ex) `3개의 숫자를 모두 맞히셨습니다! 게임 종료`<br>
    `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`
  - 안내 후 사용자의 입력을 받을 수 있도록 해야 함

- Description
  - MissionUtils 라이브러리의 `Console` API를 사용하여 출력
