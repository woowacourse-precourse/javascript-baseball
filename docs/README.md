# 기능 요구 사항

1. 시작 / 종료 선택 구현

   - [o] Console.readLine으로 user의 input 받기. (1. Play, 2. Quit)
   - [o] 이외의 값이 들어오면 예외처리.
   - [ ] 게임을 시작하는 경우와 게임을 끝낸 경우 분기처리.

2. Player 구현

   - [ ] User Class 구현.
   - [ ] Computer Class 구현.
     - [ ] 랜덤 값 뽑는 메서드 구현.

3. 게임시작

   - [ ] Console.readLine으로 user의 정답 받기.
     - [ ] 숫자 이외는 예외처리.
   - [ ] `pickUniqueNumbersInRange`를 이용해 computer 값 생성.

4. 값 비교

   - [ ] user의 값과 computer의 값을 비교하는 함수 생성.
     - 비교하는 value가 computer의 정답 Array에 존재하는 경우 .
       - index가 같은 경우 strike += 1
       - index가 다른 경우 ball += 1

5. 결과값 출력
   - [ ] `Console.print();`를 이용해, 결과값을 출력하는 함수 구현.
     - strike = 3일 경우 정답 return
     - strike + ball = 0일 경우 `낫싱` return

---

### 예외처리

`사용자가 잘못된 값`을 입력한 경우 `throw문`을 사용해 예외를 발생시킨후 애플리케이션은 종료

end 메서드 하나 만드는 것 고려.

### 게임을 종료한 후 게임을 다시 시작하거나 완전히 종료할 수 있다.

- 유저가 play()할 경우 게임 인터페이스 진입.
- 조건 : 게임이 끝난 경우 재시작/종료를 구분하는 1과 2 중 하나의 수

- option(While문으로 묶기)
  1. Play
  2. Quit `이외의 값`이 들어오면 예외처리.

---

### Play한 경우.

조건 : 게임 시작 문구 출력

> 숫자 야구 게임을 시작합니다.

### user에게 세 자리 number을 input 받음.

조건 : 서로 다른 3자리의 수

- `숫자 이외의 값` 예외처리.
- 숫자가 `중복`되는 경우 예외처리.
-

### 정답 정하기.

- 뽑기 전 정답의 length체크.
- 3이 될 때까지, 계속 뽑기.
- `이미 뽑은 값`인 경우, `다시 뽑기`.

value와 index

### 비교

user의 값과 answer의 값을 비교.

1. answer에 해당 value가 존재하는 경우

1) index가 같은 경우 strike += 1;
2) index가 다른 경우 ball += 1;

2. 없는 경우패스.

### 결과값 출력

1. 입력한 수에 대한 결과를 볼, 스트라이크 개수로 표시 (0의 경우 표기X)

```js
console.log(``);
```

> 1볼 1스트라이크

2. 하나도 없는 경우

   > 낫싱

3. 전부 맞춘 경우
   > 3스트라이크 3개의 숫자를 모두 맞히셨습니다! 게임 종료

예시)

```js
숫자 야구 게임을 시작합니다.
숫자를 입력해주세요 : 123
1볼 1스트라이크
숫자를 입력해주세요 : 145
1볼
숫자를 입력해주세요 : 671
2볼
숫자를 입력해주세요 : 216
1스트라이크
숫자를 입력해주세요 : 713
3스트라이크
3개의 숫자를 모두 맞히셨습니다! 게임 종료
게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.
1
숫자를 입력해주세요 : 123
1볼
...
```

값이 없는 경우, 해당 값 log X

### 전부 맞춘 경우

게임의 한 사이클이 끝남. 다시 input을 받아야함. 아래의 text출력.

> 게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.

---

# 요구사항

### 1. [JS Code Convention](https://github.com/woowacourse/woowacourse-docs/tree/main/styleguide/javascript) 사용

### 2. [Commit convention](https://gist.github.com/stephenparish/9941e89d80e2bc58a153) 사용

### 2. indent(인덴트, 들여쓰기) depth는 2까지만 허용한다.

- 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다. 힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메소드)를 분리하면 된다.

### 함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만들어라.

### Jest를 이용하여 본인이 정리한 기능 목록이 정상 동작함을 테스트 코드로 확인한다.

- 테스트 도구 사용법이 익숙하지 않다면 `__tests__/StringTest.js`를 참고하여 학습한 후 테스트를 구현한다.

- `사용자의 값을 입력 받고 출력`하기 위해서는 `MissionUtils 라이브러리`에서 제공하는 `Console.readLine`, `Console.print`를 활용한다.
