# 🚀️ 구현 요구 사항

- 게임 시작 문구 출력
- 입력 받은 숫자에 따른 힌트 제공
  - 잘못된 값 입력 시 throw문 사용해 게임 종료
  - 정답을 맞출 때까지 반복
- 게임 종료시 (재경기 혹은 종료) 문구 출력
  - 1 재경기 -> 게임 재시작
  - 2 종료 -> 게임 종료
- 👀️ 필요 기능 목록에 따른 테스트 케이스 작성하기

# 👀️ 필요 기능

- **printMsg**
  - 문구 출력하기
- **greetingMsg**
  - 게임 시작 알리기
- **setAnswer**
  - 임의의 세 자리 숫자를 정답으로 정하기
  - @returns {number[]} 세 개의 숫자 배열
- **askNumInput**
  - 게임 진행을 위해 유저에게 숫자 입력 받기
  - 입력 받은 후 콜백 함수(isValidInput/getHint) 호출
  - @param {string} 세 자리 문자열 '123'
- **isValidInput**
  - 유저가 입력한 숫자 확인하기
    - **isNumber** : 숫자만 입력했는지
    - **isVaildLength** : 세 자리인지
    - **isAllDiffNum** : 1부터 9 중에서 서로 다른 수로 이루어졌는지
  - 유효한 값이 아니면 toThrow 호출
- **toThrow**
  - throw 문으로 게임 종료
- **getHint**
  - 입력한 숫자를 검증 후 보여 줄 힌트 메세지 반환하기
  - **isNothing** : 하나도 없는 경우
  - **isThreeStrike** : 3개의 숫자를 모두 맞힐 경우
  - **그 외** : 입력한 수에 대한 결과를 볼, 스트라이크 개수로 표시
  - @returns {string} 낫싱/3스트라이크/1볼1스트라이크/2볼
- **countBallOrStrike**
  - ball 과 strike 갯수 카운트 하기
  - @returns {{ ballCount : number, strikeCount : number }}
- **askRematchOrExit**
  - 재경기 혹은 게임 종료를 원하는지 묻기
  - @param {number} 1,2

# 👍 리뷰

## 1. md를 잘 읽자.

- test를 돌리는 데 첫 번째 케이스가 통과되지 않는다.
- 뭔일이야 웅성웅성.
- answer를 만들때 사용한 함수가 문제였다.

[ Random 값 추출은 [MissionUtils 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)의 `Random.pickNumberInRange()`를 활용한다. ]

- 이 문구를 보고 난 `MissionUtils 라이브러리로 Ramdon값 추출을 하면 되는 구나`라고 판단해 `Random.pickUniqueNumbersInRange()`를 사용했다.
- 삐빅! 아니다. 정확히 MissionUtils 라이브러리 중 `Random.pickNumberInRange()`를 활용해야 한다고 적혀있다.
- 분명 md 여러번 읽었는데, 놓친 부분이 있었다. 바로 밑에 사용 예시도 있었는데,,,ㅎ
- 의사소통의 중요성을 한 번 더 깨달았다.
- 서술어까지 정확히 읽고, 듣는 연습을 해야겠다.

## 2. class

- 항상 class는 무서운 존재였다.
- 사용법을 알려줘도 어떻게 사용해야 할지 막연한 두려움이 있었는데, 이번에 극복했다.
- 코드를 작성하다가 궁금한 점이 몇 가지 생겼는데!

### 1. contructor 는 전역변수 관리하는 곳인가?

- answer는 전역적으로 사용하기에 this.ANSWER로 할당했다.
- input의 경우 매번 변경되는 데 this.input으로 관리가 필요한가?

### 2. answer와 input이 서로 다른 자료형인데, 같은 자료형으로 변환해서 사용하는 게 더 좋을까?

- 추가적으로 메모리를 사용하기에 난 변환 없이 input은 string 자료형으로 두고, 값 비교할 때만 숫자로 변환했다.
- 지금은 간단한 게임이니깐 변환하지 않았지만, 만약 더 큰 데이터를 다룬다면 어떤게 좋을 지 궁금하다.

### 3. class 메소드 정렬

- 알파벳 순으로 하는 게 좋은지? 아니면 주요 기능 순으로 하는 게 좋은지! 혹은 다른 방법이 있는지.
- 난 로직 순으로 배치하고 주요 기능 메서드의 자식 메서드(?)는 바로 밑에 위치 시켰다.

#### 👉 method ordering conventions? [stackoverflow](https://stackoverflow.com/questions/4668218/are-there-any-java-method-ordering-conventions)

- 자바 기준으로 작성된 글이지만, 자바스크립트에 적용해 보면..
  - constructors 가장 먼저
  - main method 그리고 관련 있는 method끼리 그룹핑.
  - standard methods like toString, equals and hashcode 서브 메서드 마지막.
