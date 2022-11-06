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

숫자 입력 문구를 화면에 출력하고, 사용자가 답을 입력할 때까지 기다린다. 입력된 답이 세 자리 수일 경우 각 자리 수를 원소로 가지는 배열을 반환한다.

```js
Input.getUserAnswer();
// 숫자를 입력해주세요 : 315
// [3, 1, 5]
```

#### `getReplayRequest()`

재시작 혹은 종료 여부를 묻는 문구를 화면에 출력하고, 사용자가 답을 입력할 때까지 기다린다. 입력한 답이 1일 경우 true를, 2일 경우 false를 반환한다.

```js
Input.getReplayRequest();
// 게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
// 1
// true
```

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

문제와 사용자의 답을 토대로 스트라이크의 개수를 세어 반환한다.

```js
BallCount.countStrikes([1, 3, 4], [4, 3, 2]); // 1
```

#### `countBalls(question, answer, strikes)`

문제와 사용자의 답을 토대로 볼의 개수를 세어 반환한다.

```js
BallCount.countBalls([1, 3, 4], [4, 3, 2]); // 1
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
