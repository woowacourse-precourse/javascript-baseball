# 기능 목록

- [x] feat1. 프로그램 첫 작동 시
  - [x] 시작 문구 출력
  - [x] 1부터 9까지 서로 다른 수로 이루어진 3자리의 수를 결정하고 객체 형태로 저장 {num: idx}: 정답 숫자
  - [x] 사용자에게 인풋 받기
- [x] feat2. 유효성 검사. 틀리면 프로그램 종료
  - [x] input.length !== 3자리 or 같은 숫자가 있는 수를 입력하면 "1부터 9까지 서로 다른 수로 이루어진 3자리 숫자만 입력 가능합니다."
  - [x] 숫자가 아닌 인풋이 들어온다면, "숫자가 아닌 문자는 입력이 불가능합니다."
  - [x] 0이 포함되었으면 0이 아닌 1부터 9까지 서로 다른 수로 이루어진 3자리 숫자만 입력 가능합니다.
- [x] feat3. 유효성 검사 통과한 값에 대하여 정답 숫자와 검사
  - [x] ball, strike 변수 사용
  - [x] for문으로 input 순환. 숫자가 key로 객체에 존재하고, value인 idx 가 같으면 strike++, idx 가 다르면 ball++
- [x] feat4. input과 정답 숫자를 비교한 결과 출력
  - [x] ball과 strike 가 0이면 볼, 스트라이크 여부 출력 안 함. 둘 다 0일시 낫싱 출력
- [x] feat5. 3 스트라이크면 해당 게임 종료하고 사용자에게 선택지 제공
  - [x] "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요." 출력
- [ ] feat6. feat5로 들어온 인풋 유효성 검사
  - [ ] 1,2 가 아닌 다른 값이 들어왔다면 예외 발생하고 앱 종료 "옳지 않은 값을 입력하셨습니다.\n프로그램이 종료됩니다"
  - [ ] 1이면 app 재시작
  - [ ] 2면 app 종료

# 학습

## 무작위로 배열 섞기

```javascript
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

const numbers = [1, 2, 3];
shuffle(numbers);
```

부동 소수점 `Math.random()`
https://7942yongdae.tistory.com/96

## 숫자 유성 검사 정규식

https://stackoverflow.com/questions/9011524/regex-to-check-whether-a-string-contains-only-numbers

# 소감

- package 파일에 "type": "module" 로 할 것이냐 module.exports로 할 것이냐~~
- src 로 터미널을 열어서 뒷북으로 기능 목록 업데이트 함~~~ㅜㅜ git add 할 때 위치 항상 확인할 것!
- 영어로 커밋 메세지 남기는 건 어렵다.
- 유효성 검사 for 문을 두 번 돌려버리는데 비효율적인 듯 => 리팩토링 요망!
- 함수 쪼개다 보니까 비효율적인 코드가 된 것 같은데 효율 vs 함수?
