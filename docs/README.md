# 숫자 야구 게임 구현을 위한 기능 목록

## ▶ `play()` 메서드
  
> 게임을 시작을 알리는 메서드

> `play()` 메서드 전체 코드

  ```js
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.')
    this.gameStart()
  }
  ```

## ▶ `gameStart()` 메서드

> 본격적으로 게임을 시작하는 메서드

1. `constructor()` 메서드를 활용해 `computerInputNumbers`와 `userInputNumbers` 변수를 초기화

   ```js
   constructor() {
     this.computerInputNumbers = ''
     this.userInputNumbers = ''
   }
   ```

3. 컴퓨터(상대방)는 1에서 9까지 서로 다른 임의의 수 3개를 선택
  
   - `computerInput()` 메서드를 실행시켜 `this.computerInputNumbers` 변수에 세자리 수 할당

   ```js
   this.computerInput()
   ```

4. 게임 플레이어도 1에서 9까지 서로 다른 임의의 수 3개를 선택

   - `userInput()` 메서드를 실행시켜 `this.userInputNumbers` 변수에 세자리 수 할당

   ```js
   this.userInput()
   ```

5. 컴퓨터의 세자리 수와 플레이어의 세자리 수를 비교해 ball, strike 개수 카운트

   - `countBalls()` 메서드를 실행시켜 ball 개수 반환
  
   - `countStrikes()` 메서드를 실행시켜 strike 개수 반환

   ```js
   const balls = this.countBalls(this.computerInputNumbers, this.userInputNumbers)
   const strikes = this.countStrikes(this.computerInputNumbers, this.userInputNumbers)
   ```

6. ball, strike 개수에 따라 결과 반환

   - '3스트라이크'일 때, 게임 재시작 여부를 결정 - `reStart()`
  
   - '3스트라이크' 이외일 때는 결과를 출력한 후, `while문`을 통해 플레이어에게 다시 입력값 받기

   ```js
   let result = this.gameResult(balls, strikes)
 
   if (result === '3스트라이크') {
     MissionUtils.Console.print('3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료')
     this.reStart()
     break
   }
   MissionUtils.Console.print(result)
   ```

> `gameStart()` 메서드 전체 코드

```js
gameStart() {
  this.computerInput()

  while (true) {
    this.userInput()

    const balls = this.countBalls(this.computerInputNumbers, this.userInputNumbers)
    const strikes = this.countStrikes(this.computerInputNumbers, this.userInputNumbers)

    let result = this.gameResult(balls, strikes)
    if (result === '3스트라이크') {
      MissionUtils.Console.print('3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료')
      this.reStart()
      break
    }
    MissionUtils.Console.print(result)
  }
}
```

## ▶ `computerInput()` 메서드

> 컴퓨터(상대방)가 1에서 9까지 서로 다른 임의의 수 3개를 선택하는 메서드

1. 방법1) MissionUtils 라이브러리의 `Random.pickNumberInRange()`을 활용해 임의의 수 3개를 선택
 
   ```js
   let computer = ''
   while (computer.length < 3) {
     const number = String(MissionUtils.Random.pickNumberInRange(1, 9))
     if (!computer.includes(number)) {
       computer += number
     }
     this.computerInputNumbers = computer
   }
   ```
   
2. 방법2) MissionUtils 라이브러리의 `Random.pickUniqueNumbersInRange()`을 활용해 임의의 수 3개를 선택
 
   ```js
   const computer = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
   ```

> `computerInput()` 메서드 전체 코드

```js
computerInput() {
  let computer = ''
  while (computer.length < 3) {
    let number = String(MissionUtils.Random.pickNumberInRange(1, 9))
    if (!computer.includes(number)) {
      computer += number
    }
  }
  this.computerInputNumbers = computer
}
```

## ▶ `userInput()` 메서드

> 게임 플레이어가 1에서 9까지 서로 다른 임의의 수 3개를 입력하는 메서드

1. `MissionUtils.Console.readLine()`을 활용해 입력값 받기

   ```js
   MissionUtils.Console.readLine('숫자를 입력해주세요: ', (number) => {
      ...
   })
   ```

2. 사용자가 잘못된 값을 입력한 경우, throw문을 사용해 예외를 발생

   ```js
   this.isValid(number)
   ```

> `userInput()` 메서드 전체 코드

```js
userInput() {
  MissionUtils.Console.readLine('숫자를 입력해주세요: ', (number) => {
    this.isValid(number)
    this.userInputNumbers = number
  })
}
```

## ▶ `isValid()` 메서드

> 사용자가 잘못된 값을 입력한 경우, throw문을 사용해 예외를 발생시키는 메서드

1. 입력값이 숫자가 아닌 경우 
  
   - `isNumeric()` 메서드를 이용해 입력받은 문자열이 숫자인지 확인
 
   ```js
   if (!this.isNumeric(userInputNumbers)) {
     valid = false
   }
   ```

   ```js
   isNumeric(str) {
     if (typeof str != "string") {
       return false
     }
     return !isNaN(str) && !isNaN(parseFloat(str))
   }
   ```

2. 입력값이 세자리 수가 아닌 경우

   ```js
   if (userInputNumbers.length !== 3) {
     valid = false
   }
   ```

3. 입력값의 세자리 수 중 일부가 중복되는 경우

   ```js
   if (new Set(userInputNumbers).size !== 3) {
     valid = false
   }
   ```
 
4. 입력값에 '0'이 포함된 경우

   ```js
   if (userInputNumbers.includes(0)) {
     valid = false
   }
   ```

5. `valid = false`인 경우, throw문을 사용해 예외 발생

   ```js
   if (!valid) {
     throw '잘못된 입력값입니다.'
   }
   ```

> `isValid()`와 `isNumeric()` 메서드 전체 코드

```js
isNumeric(str) {
  if (typeof str != "string") {
    return false
  }
  return !isNaN(str) && !isNaN(parseFloat(str))
}

isValid(userInputNumbers) {
  let valid = true
  if (!this.isNumeric(userInputNumbers)) {
    valid = false
  }
  if (userInputNumbers.length !== 3) {
    valid = false
  }
  if (new Set(userInputNumbers).size !== 3) {
    valid = false
  }
  if (userInputNumbers.includes(0)) {
    valid = false
  }

  if (!valid) {
    throw '잘못된 입력값입니다.'
  }
}
```


## ▶ `countBalls()` 메서드

> 컴퓨터의 세자리 수와 플레이어의 세자리 수를 비교해 ball 개수를 카운트하는 메서드

> `countBalls()` 메서드 전체 코드

```js
countBalls(computerInputNumbers, userInputNumbers) {
  let ballCnt = 0
  for (let i = 0; i < 3; i++) {
    let user = userInputNumbers[i]
    let com = computerInputNumbers[i]
    if (parseInt(user) !== parseInt(com) && userInputNumbers.includes(com)) {
      ballCnt += 1
    }
  }
  return ballCnt
}
```

## ▶ `countStrikes()` 메서드

> 컴퓨터의 세자리 수와 플레이어의 세자리 수를 비교해 strike 개수를 카운트하는 메서드

> `countStrikes()` 메서드 전체 코드

```js
countStrikes(computerInputNumbers, userInputNumbers) {
  let strikeCnt = 0
  for (let i = 0; i < 3; i++) {
    let user = userInputNumbers[i]
    let com = computerInputNumbers[i]
    if (parseInt(user) === parseInt(com)) {
      strikeCnt += 1
    }
  }
  return strikeCnt
}
```

## ▶ `gameResult()` 메서드

> ball, strike 개수에 따라 결과를 반환하는 메서드

> `gameResult()` 메서드 전체 코드

```js
gameResult(balls, strikes) {
  if (balls === 0 && strikes === 0) {
    return '낫싱'
  } else if (strikes === 3) {
    return '3스트라이크'
  } else if (balls === 0) {
    return `${strikes}스트라이크`
  } else if (strikes === 0) {
    return `${balls}볼`
  } else {
    return `${balls}볼 ${strikes}스트라이크`
  }
}
```

## ▶ `reStart()` 메서드

> '3스트라이크'일 때, 게임 재시작 여부를 물어보는 메서드

> `reStart()` 메서드 전체 코드

```js
reStart() {
  MissionUtils.Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.')
  MissionUtils.Console.readLine("", (num) => {
    if (num === '1') {
      this.gameStart()
    } else if (num === '2') {
      MissionUtils.Console.close()
    } else {
      throw '잘못된 입력값입니다.'
    }
  })
}
```