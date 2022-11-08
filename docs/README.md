## 미션 - 숫자 야구

### 구현할 기능 목록

#### 주의사항
- [JavaScript 코드 컨벤션](https://github.com/woowacourse/woowacourse-docs/tree/main/styleguide/javascript)을 따르자!
- **indent depth**가 3이 넘지 않아야 한다!
- 함수(또는 메서드)가 **한 가지 일**만 하도록 최대한 작게 만들어야 한다!

#### 1. 게임에 사용할 3자리 숫자 생성
- 게임이 시작할 경우 사용할 1 ~ 9로 이루어진 3자리 숫자를 생성한다.
  [MissionUtils 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)의 `Random` 을 활용하여 구현한다.

#### 2. 사용자의 입력을 확인
- 게임이 종료되기 전까지 매 순간 사용자의 입력을 받는다.
  [MissionUtils 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)의 `Console.readLine`, `Console.print`를 활용하여 구현한다.

#### 3. 3자리 숫자의 오류 여부 확인
- 사용자가 입력 또는 컴퓨터가 생성한 숫자가 1 ~ 9로 이루어진 3자리 숫자인지 확인한다.
  - 컴퓨터의 경우 다시 3자리 숫자를 생성한다.
  - 사용자의 경우 `throw` 를 통해 예외를 발생시킨 뒤 게임을 종료한다.

#### 4. 입력한 수의 결과 계산
- 사용자가 입력한 숫자와 컴퓨터가 생성한 수를 비교하여 스트라이크/볼 개수를 계산한다.
  - 숫자와 자리가 모두 동일한 경우 : 스트라이크 1 증가
  - 숫자는 포함되었지만 자리가 다른 경우 : 볼 1 증가

#### 5. 결과를 문장으로 출력
- 입력받은 스트라이크/볼 개수를 바탕으로 사용자에게 결과를 출력한다.
- 스트라이크/볼 개수를 출력하거나 하나도 없는 경우 낫싱을 출력한다.

#### 6. 게임 종료 이후
- 게임 종료에 사용할 문장을 출력한다.
- 게임 재시작 여부를 묻는 문장을 출력한다.
- 사용자의 입력이 1인 경우 재시작하며, 2인 경우 게임을 종료한다.