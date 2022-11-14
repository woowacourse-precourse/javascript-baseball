## 숫자야구 기능 목록

1. 상대방(컴퓨터, 정답) 숫자 ramdom 생성

- 1부터 9까지
- 서로 다른 숫자
- 세 자리

2. 사용자가 입력하는 숫자 input

3. 숫자야구 게임 진행

- 스트라이크 : 같은 수가 같은 자리에 위치
- 볼 : 같은 수가 다른 자리에 위치
- 낫싱 : 같은 수가 전혀 없을 때

- 이후에 각 결과 횟수 counting

4. 게임 결과 문구 출력 output

5. 게임 종료 및 새로 시작 조건 출력

- 새로 시작 : 1
- 게임 종료 : 2

## 숫자야구 게임 과제 제출 기간 이후, 다른 팀원분 (조현오님) 코드리뷰 하면서 공부 시작

### 주요 요구 조건

- 프로그램 **실행의 시작점**은 `App.js`의 `play` 메소드
- **Airbnb 자바스크립트** 스타일 가이드 기준으로 작성
- **Random 값 추출**은 MissionUtils 라이브러리의 `Random.pickNumberInRange()` 활용
- **MissionUtils 라이브러리**에서 제공하는 `Random` 및 `Console API` 사용
- **사용자의 값을 입력 받고 출력**하기 위해서는 **MissionUtils 라이브러리**에서 제공하는 `Console.readLine` 및 `Console.print` 활용
- **Jest**를 이용하여 **정리한 기능 목록**이 정상 동작함을 **TEST 코드로 확인** 필요

### git commit 정리

- feat : 새로운 기능을 추가할 경우
- fix : 버그를 고친 경우
- docs : 문서를 수정한 경우
- style : 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우
- refactor : 프로덕션 코드 리팩토링
- test: 테스트 추가, 테스트 리팩토링 (코드 변경 X)
- chore : 빌드 태스트 업데이트, 패키지 매니저를 설정하는 경우 (코드 변경 X)

  <br/>

- design : CSS 등 사용자 UI 디자인 변경
- comment : 필요한 주석 추가 및 변경
- rename : 파일 혹은 폴더명을 수정하는 경우
- remove : 사용하지 않는 파일 혹은 폴더를 삭제하는 경우

## 기능 구현 과정 작성

1. 모듈 선언

- $npm i @woowacourse/mission-utils
- MissionUtils 라이브러리에서 제공하는 Console, Random API 추가

2. test code 작성하여 Jest 사용

- $npm i -D jest
- $npm test로 테스트 코드 실행
- Jest : All-In-One 테스팅 라이브러리
- test.js로 끝나거나 _test_ 디렉토리 내 모든 파일들을 test 파일로 인식
