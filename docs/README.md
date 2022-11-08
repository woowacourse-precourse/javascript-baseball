# 미션 - 숫자 야구

## 🔍 진행 방식

- 미션은 **기능 요구 사항, 프로그래밍 요구 사항, 과제 진행 요구 사항** 세 가지로 구성되어 있다.
- 세 개의 요구 사항을 만족하기 위해 노력한다. 특히 기능을 구현하기 전에 기능 목록을 만들고, 기능 단위로 커밋 하는 방식으로 진행한다.
- 기능 요구 사항에 기재되지 않은 내용은 스스로 판단하여 구현한다.



## 🚀 구현할 기능 목록

* 랜덤으로 숫자 3개를 골라 반환하는 기능
  * 숫자가 겹치면 안 되며, 하단의 라이브러리 예시에 사용된 방법으로 구현하기
  * 게임이 시작되거나, 다음 게임으로 넘어가게 되면 호출이 되도록 해야함
* 안내 메시지를 출력하기만 하는 기능
* 안내 메시지를 출력하면서 입력을 받는 기능
* 입력을 받은 숫자를 볼, 스트라이크가 몇개인지 판단하는 기능
  * 입력받은 숫자와 정해진 숫자의 자리수 별로 숫자를 비교해 스크라이크의 개수를 파악
  * 입력받은 숫자를 돌면서 해당 숫자가 정해진 숫자에 포함 되었는지 확인하고 스트라이크의 개수를 빼서 반환
* 볼, 스트라이크의 개수에 따른 결과를 내는 기능
  * 둘 모두 0개 이면 낫싱 출력
  * 스트라이크가 3개 이면 3스트라이크 출력 후 중단
  * 이 외의 경우에는 볼이 몇 개인지, 스트라이크가 몇 개인지 출력하기
    * 0 개이면 출력을 안 하고 출력을 아무것도 안 하면 낫싱 출력하도록
* 잘못된 값을 입력한 경우를 판단하는 기능
  * 길이가 3보다 큰 문자열을 입력한 경우
  * 길이가 3보다 작은 문자열을 입력한 경우
  * 같은 숫자가 중복되는 경우
  * 숫자가 아닌 값을 포함한 경우
* 잘못된 값을 입력한 경우 게임을 중단하는 기능
* 유효한 값을 입력하였지만 답을 맞추지 못한 경우 게임을 반복 진행하는 기능
* 게임이 정상적으로 종료되었으면 게임을 또 진행 할 것인지 그만둘 것인지 결정하는 기능
  * 1을 입력 받으면 다음 게임이 진행됨
  * 2를 입력 받으면 게임을 종료함



## 😥 시행 착오

### 모듈 import 하기

과제에서 제공해주는 MissionUtils 라이브러리를 이용하기 위해 import를 해야 했음

다음과 같이 ES Modules 방식으로 사용하였더니, 

* 추가로 `import * ` 는 wildcard import로 single default export임을 확실히 해야한다는 주의가 있어 사용하지 말라는 내용이 Airbnb javascript 스타일 가이드에 작성되어 있음

```javascript
import * as MissionUtils from "@woowacourse/mission-utils";
```

다음과 같은 에러 메시지를 얻을 수 있었음

```javascript
SyntaxError: Cannot use import statement outside a module

> 1 | const App = require("../src/App");
    |                                 ^
  2 | const MissionUtils = require("@woowacourse/mission-utils");
  3 |
  4 | const mockQuestions = (answers) => {

  at Runtime.createScriptFromCode (node_modules/jest-runtime/build/index.js:1678:14)
  at Object.<anonymous> (__tests__/ApplicationTest.js:1:33)
```

모듈의 밖에서는 import를 할 수 없다는 내용인 것 같아서 CommonJS 방식으로 사용하였음

* 그런데 모듈은 항상 비표준이 아닌 (`import`/`export`)를 이용해달라는 내용이 Airbnb javascript 스타일 가이드에 작성되어 있어 수정이 필요함

```javascript
const MissionUtils = require("@woowacourse/mission-utils");
class App {
  ...
}
```

단 App 클래스 내부에서 정의해서 (const 없이 프로퍼티로) 사용하면 this.MissionUtils로 접근해야 함



## 📌요구사항

> ## 🚀 기능 요구 사항
>
> 기본적으로 1부터 9까지 서로 다른 수로 이루어진 3자리의 수를 맞추는 게임이다.
>
> - 같은 수가 같은 자리에 있으면 스트라이크, 다른 자리에 있으면 볼, 같은 수가 전혀 없으면 낫싱이란 힌트를 얻고, 그 힌트를 이용해서 먼저 상대방(컴퓨터)의 수를 맞추면 승리한다.
>   - 예) 상대방(컴퓨터)의 수가 425일 때
>     - 123을 제시한 경우 : 1스트라이크
>     - 456을 제시한 경우 : 1볼 1스트라이크
>     - 789를 제시한 경우 : 낫싱
> - 위 숫자 야구 게임에서 상대방의 역할을 컴퓨터가 한다. 컴퓨터는 1에서 9까지 서로 다른 임의의 수 3개를 선택한다. 게임 플레이어는 컴퓨터가 생각하고 있는 서로 다른 3개의 숫자를 입력하고, 컴퓨터는 입력한 숫자에 대한
>   결과를 출력한다.
> - 이 같은 과정을 반복해 컴퓨터가 선택한 3개의 숫자를 모두 맞히면 게임이 종료된다.
> - 게임을 종료한 후 게임을 다시 시작하거나 완전히 종료할 수 있다.
> - 사용자가 잘못된 값을 입력한 경우 `throw`문을 사용해 예외를 발생시킨후 애플리케이션은 종료되어야 한다.
>
> ### 입출력 요구 사항
>
> #### 입력
>
> - 서로 다른 3자리의 수
> - 게임이 끝난 경우 재시작/종료를 구분하는 1과 2 중 하나의 수
>
> #### 출력
>
> - 입력한 수에 대한 결과를 볼, 스트라이크 개수로 표시
>
> ```
> 1볼 1스트라이크
> ```
>
> - 하나도 없는 경우
>
> ```
> 낫싱
> ```
>
> - 3개의 숫자를 모두 맞힐 경우
>
> ```
> 3스트라이크
> 3개의 숫자를 모두 맞히셨습니다! 게임 종료
> ```
>
> - 게임 시작 문구 출력
>
> ```
> 숫자 야구 게임을 시작합니다.
> ```
>
> #### 실행 결과 예시
>
> ```bash
> 숫자 야구 게임을 시작합니다.
> 숫자를 입력해주세요 : 123
> 1볼 1스트라이크
> 숫자를 입력해주세요 : 145
> 1볼
> 숫자를 입력해주세요 : 671
> 2볼
> 숫자를 입력해주세요 : 216
> 1스트라이크
> 숫자를 입력해주세요 : 713
> 3스트라이크
> 3개의 숫자를 모두 맞히셨습니다! 게임 종료
> 게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.
> 1
> 숫자를 입력해주세요 : 123
> 1볼
> ...
> ```
>
> ---



> ## 🎯 프로그래밍 요구 사항
>
> - Node.js 14 버전에서 실행 가능해야 한다. **Node.js 14에서 정상적으로 동작하지 않을 경우 0점 처리한다.**
> - 프로그램 실행의 시작점은 `App.js`의 `play` 메서드이다. 아래와 같이 프로그램을 실행시킬 수 있어야 한다.
>
> **예시**
>
> ```javascript
> const app = new App();
> app.play();
> ```
>
> - `package.json`을 변경할 수 없고 외부 라이브러리(jQuery, Lodash 등)를 사용하지 않는다. 순수 Vanilla JS로만 구현한다.
> - [JavaScript 코드 컨벤션](https://github.com/woowacourse/woowacourse-docs/tree/main/styleguide/javascript)을 지키면서 프로그래밍 한다
> - 프로그램 종료 시 `process.exit()`를 호출하지 않는다.
> - 프로그램 구현이 완료되면 `ApplicationTest`의 모든 테스트가 성공해야 한다. **테스트가 실패할 경우 0점 처리한다.**
> - 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 이름을 수정하거나 이동하지 않는다.
>
> ### 추가된 요구 사항
>
> - indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
>   - 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
>   - 힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메소드)를 분리하면 된다.
> - 함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만들어라.
> - Jest를 이용하여 본인이 정리한 기능 목록이 정상 동작함을 테스트 코드로 확인한다.
>   - 테스트 도구 사용법이 익숙하지 않다면 `__tests__/StringTest.js`를 참고하여 학습한 후 테스트를 구현한다.
>
> ### 라이브러리
>
> - [MissionUtils 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)에서 제공하는 `Random` 및 `Console` API를 사용하여 구현해야 한다.
>   - Random 값 추출은 [MissionUtils 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)의 `Random.pickNumberInRange()`를 활용한다.
>   - 사용자의 값을 입력 받고 출력하기 위해서는 [MissionUtils 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)에서 제공하는 `Console.readLine`, `Console.print`를 활용한다.
>
> #### 사용 예시
>
> ```javascript
> const computer = [];
> while (computer.length < 3) {
>   const number = MissionUtils.Random.pickNumberInRange(1, 9);
>   if (!computer.includes(number)) {
>     computer.push(number);
>   }
> }
> ```
>
> ---
>



> ## ✏️ 과제 진행 요구 사항
>
> - 미션은 [javascript-baseball](https://github.com/woowacourse-precourse/javascript-baseball/) 저장소를 Fork & Clone해 시작한다.
> - **기능을 구현하기 전 `docs/README.md`에 구현할 기능 목록을 정리**해 추가한다.
> - **Git의 커밋 단위는 앞 단계에서 `docs/README.md`에 정리한 기능 목록 단위**로 추가한다.
>   - [커밋 메시지 컨벤션](https://gist.github.com/stephenparish/9941e89d80e2bc58a153) 가이드를 참고해 커밋 메시지를 작성한다.
> - 과제 진행 및 제출 방법은 [프리코스 과제 제출](https://github.com/woowacourse/woowacourse-docs/tree/master/precourse) 문서를 참고한다.