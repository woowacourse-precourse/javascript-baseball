### 환경설정

---

- Node.js --version: v14.20.0
- [x] Package.json install 진행
  - [x] npm ci: package-lock.json 수정하지 않고 설치한다.
- [x] CDN을 통한 MissionUtils 라이브러리 셋팅
  - [x] package.json에 의존성을 가지고 있었음. npm ci 하면 Utils 라이브러리 사용 가능
  - [x] CJS vs ESM

### 기능 목록

---

- [x] 컴퓨터가 임의의 숫자 생성한다
  - [x] 서로 다른 임의수 3개 생성
  - [x] MissionUtils 라이브러리 Random.pickNumberInRange() 사용한다.
- [x] 사용자의 입력을 받는다.
  - [x] 입력한 값이 숫자 인지 판단한다
  - [x] 숫자가 아니라면 throw문을 통해 에러 발생 후 어플리케이션 종료
- [x] 숫자가 아닌 경우 (유호성 검사)
  - [x] console.readline으로 type 확인 먼저 한다
  - [x] type이 number가 아닌 경우
  - [x] 1 ~ 9 사이의 숫자가 아닌 경우
  - [x] 자릿수가 3자리 이상인 경우
  - [x] 각 자리수에 중복되는 값 확인
- [x] 정상범위의 입력 값인 경우
  - [x] 볼, 스트라이크, 낫싱인지 판단한다.
  - [x] Console.print()를 사용해 맞힌 자릿수를 알려준다.
- [x] 3스트라이크가 아닌 경우
  - [x] User가 재입력을 한다.
  - [x] 재입력한 값을 통해서 다시 볼/스트라이크 여부를 확인한다.
- [x] 3스트라이크인 경우
  - [x] "3개의 숫자를 모두 맞히셨습니다! 게임 종료" 문구를 띄운다.
  - [x] return gameOver() 실행
- [x] 게임 종료 함수 실행
  - [x] User한테 선택지를 제공한다 ? 재시작은 1 : 종료는 2
  - [x] 입력한 값이 유효한지 판단한다.
  - [x] 1번 선택인 경우 app.play() 실행 한다.
  - [x] 2번 선택인 경우 Console.close()를 사용해 콘솔 창을 닫는다.

### 리팩토링

---

- [] 게임 종료 구문 함수 모듈화
- [] 볼/스트라이크/낫싱 출력하는 조건식 단축 시도
- [] MissionUtils.Console.print('숫자 야구 게임을 시작합니다.') 함수로 분리
- [] style: 상수 변수 대문자로 수정

### 테스트 케이스

---

- [x] 숫자 유효성 검사
- [x] 스트라이크 여부 확인
- [x] 볼 여부 확인

### 디렉토리 구조

```bash
|-- test
| |--ApplicationTest
| |--StringTest
| |--BaseballUnitTest: 기능 목록 단위 테스트
|--docs
| |--README
|--src
| |--App
| |--CountBall: 볼 개수 확인
| |--CountStrike: 스트라이크 개수 확인
| |--IsNumber: 숫자 유효성 검사
```
