# ⚾️ 숫자 야구 게임

## 🚀 기능

### Input

#### `toNumbers(input)`

주어진 입력값을 숫자로 이루어진 배열로 반환한다.

```js
Input.toNumbers('486'); // [4, 8, 6]
```

#### `isLengthThree(numbers)`

주어진 배열의 길이가 3이면 `true`를 반환하고, 그렇지 않으면 `false`를 반환한다.

```js
Input.isLengthThree([4, 8, 6]); // true
Input.isLengthThree([4, 8, 6, 2]); // false
Input.isLengthThree([4, 8]); // false
```

#### `isBetweenOneAndNine(numbers)`

주어진 배열의 모든 요소가 1과 9 사이이면 `true`를 반환하고, 그렇지 않으면 `false`를 반환한다.

```js
Input.isBetweenOneAndNine([4, 8, 6]); // true
Input.isBetweenOneAndNine([4, 8, 0]); // false
```

#### `hasDuplicates(numbers)`

주어진 배열에 중복된 요소가 있으면 `true`를 반환하고, 그렇지 않으면 `false`를 반환한다.

```js
Input.hasDuplicates([4, 8, 8]); // true
Input.hasDuplicates([4, 8, 6]); // false
```

#### `isValid(numbers)`

주어진 배열이 1부터 9까지 서로 다른 3개의 수로 이루어져 있으면 `true`를 반환하고, 그렇지 않으면 `false`를 반환한다.

```js
Input.isValid([4, 8, 6]); // true
Input.isValid([4, 8, 6, 2]); // false
Input.isValid([4, 8]); // false
Input.isValid([4, 8, 0]); // false
Input.isValid([4, 8, 8]); // false
```

### Count

#### `ball(computerNumbers, userNumbers)`

컴퓨터의 숫자 배열과 유저의 숫자 배열을 인수로 받아서 볼의 개수를 반환한다.

```js
Count.ball([4, 8, 6], [2, 3, 7]); // 0
Count.ball([4, 8, 6], [2, 3, 8]); // 1
Count.ball([4, 8, 6], [4, 6, 8]); // 2
Count.ball([4, 8, 6], [6, 4, 8]); // 3
```

#### `strike(computerNumbers, userNumbers)`

컴퓨터의 숫자 배열과 유저의 숫자 배열을 인수로 받아서 스트라이크의 개수를 반환한다.

```js
Count.strike([4, 8, 6], [2, 3, 7]); // 0
Count.strike([4, 8, 6], [4, 6, 8]); // 1
Count.strike([4, 8, 6], [4, 8, 9]); // 2
Count.strike([4, 8, 6], [4, 8, 6]); // 3
```

### `createRandomNumbers()`

1부터 9까지 서로 다른 3개의 수를 배열로 반환한다.

```js
createRandomNumbers(); // [2, 7, 5]
createRandomNumbers(); // [7, 2, 9]
createRandomNumbers(); // [1, 3, 8]
```
