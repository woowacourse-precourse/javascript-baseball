1. 게임 시작 문구 출력
   1. _숫자 야구 게임을 시작합니다._
   2. [MissionUtils 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)에서 제공하는 `Console.print` API 사용
2. 컴퓨터의 3자리 수 생성
   1. 1에서 9까지 서로 다른 임의의 수 3개로 구성
   2. [MissionUtils 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)에서 제공하는 `Random.pickNumberInRange()` 활용
3. 게임 플레이어의 숫자 입력
   1. _숫자를 입력해주세요 :_
      1. [MissionUtils 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)에서 제공하는 `Console.readLine` API 사용
   2. 서로 다른 3자리 수
      1. (e) 3자리 수가 아닐 경우 (2자리 수 이하, 4자리 수 이상, 음수, 소수 등 불가)
      2. (e) 중복된 수가 있는 경우
      3. (e) 0을 포함할 경우
      4. (e) 숫자가 아닐 경우 (알파벳, 한글, 특수문자 등 불가)
      5. 잘못된 값을 입력한 경우 예외 발생시킨후 종료, 이때 `throw` 문 이용
4. 입력한 숫자에 대한 결과 출력
   1. 같은 수가 같은 자리에 있으면 스트라이크, 다른 자리에 있으면 볼, 같은 수가 전혀 없으면 낫싱
   2. ex: 컴퓨터의 수가 425일 때
      - 123을 제시한 경우 : _1스트라이크_
      - 456을 제시한 경우 : _1볼 1스트라이크_
      - 789를 제시한 경우 : _낫싱_
   3. 3개의 숫자를 모두 맞히면 게임 종료, 5번 기능으로 이동
   4. 3개의 숫자를 모두 맞출 때까지 3~4번 기능 반복
   5. [MissionUtils 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)에서 제공하는 `Console.print` API 사용
5. 게임 종료 후 재시작/종료
   1. _3개의 숫자를 모두 맞히셨습니다! 게임 종료_
      _게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요._
      1. [MissionUtils 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)에서 제공하는 `Console.print` API 사용
   2. 재시작/종료를 구분하는 1과 2 중 하나의 수
      1. [MissionUtils 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)에서 제공하는 `Console.readLine` API 사용
      2. 잘못된 값을 입력한 경우 예외 발생시킨후 종료, 이때 `throw` 문 이용
   3. 사용자가 1 입력시 1번 기능으로 되돌아감
   4. 2 입력시 프로그램 완전히 종료
