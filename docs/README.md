## 💡 Features List of Number Baseball Game

## 📌 Abstract

- 숫자 야구 게임 구현에 사용된 기능들을 명세한 문서입니다.

- 기능 목록 수정 여부 표시
  - |      구현 후 추가      |      구현 후 수정      |
    | :--------------------: | :--------------------: |
    | 관련 내용 앞에 🔶 기입 | 관련 내용 앞에 🔷 기입 |

### 🔶 `#NUMERIC_CONSTANTS` : object

- Description
  - `App` 클래스 내부에서 전반적으로 사용되는 상수를 프로퍼티로 가진 객체
  - 외부에서 접근할 수 없도록 private 필드로 선언
- Example
  ```Javascript
  #NUMERIC_CONSTANTS = {
    maxLength: 3,
    min: 1,
    max: 9,
    initResult: 0,
  };
  ```

### 🔶 `#ERROR_CASES` : object

- Description
  - `findInputError`, `findResetError` 메서드에 인수로 전달할 에러의 종류를 프로퍼티로 가진 객체
  - 외부에서 접근할 수 없도록 private 필드로 선언
- Example

  ```Javascript
    #ERROR_CASES = {
      reset: "failReset",
      compare: "failCompare",
    };
  ```

### 🔶 `#ERROR_MESSAGES` : object

- Description
  - `throwError` 메서드가 출력할 에러의 메시지를 프로퍼티로 가진 객체
  - 외부에서 접근할 수 없도록 private 필드로 선언
- Example
  ```Javascript
  #ERROR_MESSAGES = {
    failReset: "게임을 재시작하려면 1, 종료하려면 2를 입력해야 합니다.",
    failCompare: "서로 다른 1 ~ 9 사이의 숫자를 연속으로 3개 입력해야 합니다.",
  };
  ```

### 🔷 `#randomNum` : array

- Description

  - `createRandomNum` 메서드가 반환한 3개의 난수를 담은 배열
  - 외부에서 접근할 수 없도록 private 필드로 선언

- Example

  ```Javascript
    // 초기값
    #ramdomNum = [];

  ```

### 🔶 `play` : function

- Params
  - 없음
- Return Value
  - 없음
- Usage
  - 게임 최초 시작 및 재시작 시 호출되는 메서드
- Description

  - `createRandomNum`, `startGame` 메서드를 순서대로 한 번씩 호출

### 🔷 `createRandomNum` : function

- Params
  - 없음
- Return Value
  - 문자열로 변환한 3개의 난수를 담은 배열을 생성하여 반환<br>
    ex) `["4", "3", "5"]`, `["6", "9", "8"]`
- Usage
  - `app.play` 호출 시 최초 한 번만 호출되는 메서드
- Description

  - MissionUtils 라이브러리의 `Random.pickNumberInRange` API를 사용하여 생성
  - `["3", "3", "4"]`와 같이 숫자가 중복되면 안 되므로 `while`문과 `Set` 자료형을 사용하여 서로 다른 3개의 숫자가 배열에 담길 때까지 반복

- Example

  ```Javascript
    while (this.#randomNum.length < maxLength) {
      this.#randomNum = Array.from(
        new Set([...this.#randomNum, `${Random.pickNumberInRange(min, max)}`])
      );
    }
  ```

### 🔶 `startGame` : function

- Params
  - 없음
- Return Value
  - 없음
- Usage
  - `app.play` 호출 시 최초 한 번만 호출되는 메서드
- Description

  - MissionUtils 라이브러리의 `Console.print` API를 사용하여 게임 시작 안내 문구 출력
  - 사용자의 입력을 받는 `getInput` 메서드를 호출

- Example

  ```Javascript
    Console.print('숫자 야구 게임을 시작합니다.');

    this.getInput();
  ```

### 🔶 `getInput` : function

- Params
  - 없음
- Return Value
  - 없음
- Usage
  - 숫자 비교 결과에 따라 반복적으로 호출되는 메서드
- Description

  - MissionUtils 라이브러리의 `Console.readLine` API로 플레이어의 입력 값을 받아 `compareNums` 메서드를 호출할 때 전달하는 메서드

- Example

  ```Javascript
    Console.readLine('숫자를 입력해주세요 : ', (userInput) =>
      this.compareNums(userInput)
    );
  ```

### 🔷 `compareNums` : function

- Params
  - 1 - `userInput`
- Return Value
  - "스트라이크", "볼" 개수를 프로퍼티로 가지는 객체 `results` 반환 <br>
    ex) `{ ball: '1', strike: '2' }`
- Usage

  - 먼저 `findInputError`를 호출하여 플레이어의 입력 값이 규칙에 어긋난다면 에러 출력
  - 초기 값을 저장한 `results` 객체 생성
  - `randomNum`과 플레이어의 입력 값을 비교
    - 3자리 중 숫자만 일치하고 자리는 일치하지 않는 만큼 `results`에 `ball` 개수 저장
    - 3자리 중 숫자와 자리까지 일치하는 만큼 `strike` 개수 저장
  - 인수로 `results`를 전달하면서 `printResults` 호출

- Description

  1. `split` 메서드로 전달 받은 `userInput` 값을 배열로 변환
  2. `userInput` 배열을 `forEach`로 `순회하며 각각의 숫자마다 `randomNum.includes` 메서드를 호출
  3. 반환 값이 `true`인 경우 배열의 index까지 서로 비교<br>
     3-1. 일치하면 `results`의 `strike` 값에 1을 더하여 저장<br>
     3-2. 일치하지 않으면 `results`의 `ball` 값에 1을 더하여 저장<br>
  4. 반환 값이 `false`인 경우 다음 숫자 순회로 이동

- Example

  ```Javascript
    this.findInputError(userInput);

    userInput = userInput.split('');

    const { initResult } = this.#NUMERIC_CONSTANTS;
    const results = { ball: initResult, strike: initResult };

    userInput.forEach((num, index) => {
      if (this.#randomNum.includes(num)) {
        num === this.#randomNum[index]
          ? (results.strike += 1)
          : (results.ball += 1);
      }
    });

    this.printResults(results);
  ```

### 🔷 `printResults` : function

- Params
  - `compareResults`
- Return Value
  - 전달 받은 비교 결과를 토대로 결과 값에 해당하는 문자열 반환
- Usage
  - "스트라이크"나 "볼"이 1개 이상 존재하는 경우 각각의 개수만큼 "스트라이크", "볼" 출력<br>
    ex) `1볼`, `1볼 1스트라이크`
  - "스트라이크", "볼"이 없는 경우 "낫싱" 출력<br>
    ex) `낫싱`
  - "스트라이크" 개수가 3개인 경우 결과 출력 후 `resetGame` 호출
  - "스트라이크" 개수가 3개보다 적은 경우 결과 출력 후 `getInput` 호출
- Description
  - MissionUtils 라이브러리의 `Console.print` API를 사용하여 출력
- Example

  ```Javascript
    const { ball, strike } = compareResults;

    if (!ball && !strike) Console.print('낫싱');

    if (ball && !strike) Console.print(`${ball}볼`);

    if (!ball && strike) Console.print(`${strike}스트라이크`);

    if (ball && strike) Console.print(`${ball}볼 ${strike}스트라이크`);

    const { maxLength } = this.#NUMERIC_CONSTANTS;
    strike === maxLength ? this.resetGame() : this.getInput();
    this.printResults(results);
  ```

### 🔷 `resetGame` : function

- Params
  - 없음
- Return Value
  - 없음
- Usage

  - 게임 종료 및 초기화 방법을 문자열로 출력
  - 안내 후 플레이어의 입력에 따라 게임을 재시작하거나 종료
    - 플레이어의 입력 값을 받은 후 먼저 `findResetError`를 호출하여 규칙에 어긋난다면 에러 출력

- Description

  - MissionUtils 라이브러리의 `Console.print`, `Console.print.readLine` API를 사용하여 출력

- Example

  ```Javascript
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
      (userInput) => {
        this.findResetError(userInput);

        userInput === '1' ? this.play() : Console.close();
      }
    );
  ```

### 🔶 `findInputError` : function

- Params
  - 1 - `userInput`
- Return Value
  - 없음
- Usage

  - 플레이어의 입력 값이 규칙에 어긋난다면 적절한 에러 케이스를 인수로 전달하여 `throwError` 호출

- Description

  - `throwError`를 호출하는 경우는 다음과 같음<br>
    1. 입력 값이 숫자가 아닌 경우<br>
       ex) `안녕`, `hello`, `우테코`
    2. 숫자를 입력했지만, 3자리가 아닌 경우<br>
       ex) `1234`, `57`, `3124958`
    3. 3자리의 숫자를 입력했지만, 중복된 숫자가 있는 경우<br>
       ex) `112`, `575`, `888`
    4. 중복되지 않은 3자리의 숫자를 입력했지만, 0이 포함되어 있는 경우<br>
       ex) `014`, `108`, `580`

- Example

  ```Javascript
    const { maxLength } = this.#NUMERIC_CONSTANTS;

    if (
      typeof +userInput !== 'number' ||
      userInput.length !== maxLength ||
      userInput.length !== new Set(userInput).size ||
      userInput.includes('0')
    ) {
      const { reset } = this.#ERROR_CASES;

      this.throwError(reset);
    }
  ```

### 🔶 `findResetError` : function

- Params
  - 1 - `userInput`
- Return Value
  - 없음
- Usage

  - 플레이어의 입력 값이 규칙에 어긋난다면 적절한 에러 케이스를 인수로 전달하여 `throwError` 호출

- Description

  - MissionUtils 라이브러리의 `Console.close`, API를 사용하여 애플리케이션 종료

- Example

  ```Javascript
    const { maxLength } = this.#NUMERIC_CONSTANTS;

    if (userInput !== '1' && userInput !== '2') {
      const { compare } = this.#ERROR_CASES;

      this.throwError(compare);
    }
  ```

### 🔶 `throwError` : function

- Params
  - 1 - `errorCase`
- Return Value
  - 없음
- Usage

  - 먼저 애플리케이션 종료
  - `TypeError` 객체를 생성한 후 전달 받은 에러 케이스에 따라 적절한 에러 메시지 출력

- Description

  - `throwError`를 호출하는 경우는 다음과 같음<br>
    1. 입력 값이 `1`과 `2`가 아닌 경우<br>
       ex) `안녕`, `3`, `#$@`

- Example

  ```Javascript
    const { maxLength } = this.#NUMERIC_CONSTANTS;

    if (userInput !== '1' && userInput !== '2') {
      const { compare } = this.#ERROR_CASES;

      this.throwError(compare);
    }
  ```
