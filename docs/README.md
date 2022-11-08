# 🛠️ Features

### BaseballGame Class ⚾️ 

#### `start()`
야구 게임을 시작한다.

```js
BaseballGame.start();
```

#### `progress(answer, strike)`
한 차례의 숫자 입력이 끝난 후, 게임의 진행/종료를 결정한다. 

```js
BaseballGame.progress(952, 0); // 진행 
BaseballGame.progress(468, 1); // 진행 
BaseballGame.progress(369, 2); // 진행 
BaseballGame.progress(123, 3); // 종료
```

#### `startMessage()`
야구 게임의 시작 문구를 출력한다.

```js
BaseballGame.startMessage(); // 숫자 야구 게임을 시작합니다.
```

#### `resultMessage(answer, number)`
입력한 숫자에 대한 결과를 출력한다.

```js
BaseballGame.resultMessage(369, 148); // 낫싱
BaseballGame.resultMessage(369, 246); // 1볼
BaseballGame.resultMessage(369, 386); // 1볼 1스트라이크
BaseballGame.resultMessage(369, 368); // 2스트라이크
```

#### `getBall(answer, number)`
볼의 개수를 구한다.

```js
BaseballGame.resultMessage(369, 246); // 1볼
BaseballGame.resultMessage(369, 693); // 3볼
```

#### `getStrike(answer, number)`
스트라이크의 개수를 구한다.

```js
BaseballGame.resultMessage(369, 569); // 2스트라이크
BaseballGame.resultMessage(369, 369); // 3스트라이크
```

#### `createAnswer()`
야구 게임의 3자릿수 답을 랜덤으로 만든다.

```js
BaseballGame.createAnswer() // 738
```

#### `inputNumber(answer)`
야구 게임의 답을 맞추기 위한 숫자를 입력받는다.

```js
BaseballGame.inputNumber(738) // 숫자를 입력해주세요 : 
```

#### `validateInputNumber(number)`
야구 게임의 답을 맞추기 위한 숫자를 입력받을 때, 예외 처리를 한다.

```js
BaseballGame.validateInputNumber('ㄱㄴㄷ') // 숫자를 입력하세요.
BaseballGame.validateInputNumber('1234') // 3자리 수를 입력하세요.
BaseballGame.validateInputNumber('111') // 중복되지 않은 수를 입력하세요.
```

#### `inputRestartOrEnd()`
정답을 맞춰 게임이 종료 된 후, 게임 재시작/종료 여부를 입력받는다.

```js
BaseballGame.inputRestartOrEnd() // 게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.
```

#### `validateInputRestartOrEnd(number)`
정답을 맞춰 게임이 종료 된 후, 게임 재시작/종료 여부를 입력받을 때 예외 처리를 한다.

```js
BaseballGame.validateInputRestartOrEnd('3') // 게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.
```
