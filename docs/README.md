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
  - [] 입력한 값이 숫자 인지 판단한다
  - [] 숫자가 아니라면 throw문을 통해 에러 발생 후 어플리케이션 종료
- [] 숫자가 아닌 경우 (유호성 검사)
  - [] console.readline으로 type 확인 먼저 한다
  - [] type이 number가 아닌 경우
  - [] 1 ~ 9 사이의 숫자가 아닌 경우
  - [] 자릿수가 3자리 이상인 경우
  - [] 각 자리수에 중복되는 값 확인
- [] 정상범위의 입력 값인 경우
  - [] 볼, 스트라이크, 낫싱인지 판단한다.
  - [] console.print를 통해 맞힌 자릿수를 알려준다.
- [] 3스트라이크가 아닌 경우
  - [] User가 재입력을 한다.
  - [] 재입력한 값을 통해서 다시 재검토 수행
- [] 3스트라이크인 경우
  - [] "3개의 숫자를 모두 맞히셨습니다! 게임 종료" 문구를 띄운다.
  - [] return 게임종료()
- [] 게임 종료 함수 실행
  - [] User한테 선택지를 제공한다 ? 재시작은 1 : 종료는 2
  - [] 입력한 값이 유효한지 판단한다.
  - [] 재시작이면 app.play() 다시 실행
  - [] 종료이면 throw문을 통해 에러 발생 후 어플리케이션 종료

### 테스트 케이스

---

- 숫자 유효성 검사

### 디렉토리 구조

```bash
|-- test
| |--ApplicationTest
| |--StringTest
|--docs
| |--README
|--src
| |--App
```
