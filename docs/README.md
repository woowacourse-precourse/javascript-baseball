## 🚩 기능 목록

### App

#### `play()`

숫자야구 게임 앱을 구동한다.

```js
const app = new App();
app.play();
```

### Game

#### `run()`

숫자야구 게임을 시작한다.

```js
const game = new Game();
game.run();
```

### Input

#### `getUserAnswer()`

숫자 입력 문구를 화면에 출력하고, 사용자가 답을 입력할 때까지 기다린다. 결과에 따라 자기 자신을 다시 호출하여 다음 숫자를 입력받거나 현재 진행 중인 게임을 마무리한다.

```js
Input.getUserAnswer(question);
```

#### `getReplayRequest()`

재시작 혹은 종료 여부를 묻는 문구를 화면에 출력하고, 사용자가 답을 입력할 때까지 기다린다. 입력한 답이 1일 경우 새로운 게임을 시작하고, 입력한 답이 2일 경우 앱을 종료한다.

```js
Input.getReplayRequest();
// 게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
```

#### `checkWrongAnswer(answer)`

사용자가 답으로 입력한 숫자가 올바른 형식인지 판단한다. 만일 입력받은 값이 세 자리 숫자가 아니라면 에러를 throw하여 앱을 종료시킨다.

#### `checkWrongRequest(userRequest)`

사용자가 재시작 혹은 종료를 위해 입력한 숫자가 올바른 형식인지 판단한다. 만일 입력받은 값이 1이나 2가 아닐 경우 에러를 throw하여 앱을 종료시킨다.

### Output

#### `printToUser(message)`

주어진 문자열을 콘솔에 출력한다.

```js
Output.printToUser("안녕하세요.");
```

### Question

#### `create()`

1부터 9까지 숫자 중에서 중복되지 않는 숫자 세 가지를 담은 배열을 생성해 반환한다.

```js
Question.create(); // [5, 6, 7]
```

### BallCount

#### `new BallCount(question, answer)`

문제와 사용자의 답을 토대로 스트라이크와 볼의 개수를 가진 인스턴스를 생성한다.

```js
const ballCount = new BallCount([1, 3, 4], [4, 3, 2]);
console.log(ballCount.strikes); // 1
console.log(ballCount.balls); // 1
```

#### `countStrikes(question, answer)`

이 함수는 호출하지 마십시오. strikes를 대신 사용하는 것을 권장합니다.

문제와 사용자의 답을 토대로 스트라이크의 개수를 세어 반환한다. BallCount 인스턴스 생성 시 strikes의 값을 구하는 내부 함수의 역할을 한다.

```js
const ballCount = new BallCount([1, 3, 4], [4, 3, 2]);
ballCount.countStrikes([1, 3, 4], [4, 3, 2]); // 1

console.log(ballCount.strikes); // 1
```

#### `countBalls(question, answer, strikes)`

이 함수는 호출하지 마십시오. balls를 대신 사용하는 것을 권장합니다.

문제와 사용자의 답을 토대로 볼의 개수를 세어 반환한다. BallCount 인스턴스 생성 시 balls의 값을 구하는 내부 함수의 역할을 한다.

```js
const ballCount = new BallCount([1, 3, 4], [4, 3, 2]);
ballCount.countBalls([1, 3, 4], [4, 3, 2]); // 1

console.log(ballCount.balls); // 1
```

#### `toString()`

스트라이크와 볼의 개수를 나타내는 문자열을 생성하여 반환한다.

```js
const ballCount = new BallCount([1, 3, 4], [4, 3, 2]);
console.log(ballCount.toString()); // 1볼 1스트라이크
```

#### `isThreeStrikes()`

3스트라이크이면 true를, 아니면 false를 반환한다.

```js
const ballCount1 = new BallCount([1, 3, 4], [4, 3, 2]);
console.log(ballCount1.isThreeStrikes()); // false

const ballCount2 = new BallCount([1, 3, 4], [1, 3, 4]);
console.log(ballCount2.isThreeStrikes()); // true
```

### Parse

#### `numberToArray(number)`

숫자를 받아 각 자리 수를 원소로 가지는 배열을 반환한다.

```js
Parse.numberToArray(312); // [3, 1, 2]
```
