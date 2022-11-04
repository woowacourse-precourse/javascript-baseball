# todo

- [ ] eslint airbnb style 적용한다.

- [ ] while 반복문 flag 변수를 let으로 정의하고 true로 초기화한다.
- [ ] while 반복문을 실행한다.

- [ ] 사용자 입력을 받는다.

- [ ] 사용자 잘못된 값을 입력한 경우 throw문으로 예외를 발생시킨 후 종료한다.

  - [ ] 입력된 문자는 수이다.
    - [ ] test: 공백이 입력된 경우
    - [ ] test: 한글이나 영어, 특수문자 등이 입력된 경우
  - [ ] 입력된 문자는 각 1~9 사이 수이다.
    - [ ] test: 1보다 작거나 9보다 큰 경우 = 3자리 문자만 입력
  - [ ] 입력된 문자는 3자리 수이다.
    - [ ] test: 아무것도 입력하지 않거나 1자리, 2자리 수일 경우 4자리 이상 입력한 경우
    - [ ] 입력된 문자는 3자리이므로 자연수이다.
      - [ ] test: 실수가 입력된 경우 = 3자리 문자만 입력
  - [ ] 입력된 문자는 서로 다른 수이다.
    - [ ] test: 입력된 문자가 1가지라도 같을 경우

- [ ] 컴퓨터는 임의의 수를 선택한다. 아래 요건에 맞지 않는다면 다시 임의의 수를 선택한다.

  - [ ] 임의의 수는 각 1~9 사이 수이다.
    - [ ] test: 1보다 작거나 9보다 큰 경우
  - [ ] 임의의 수는 3자리 수이다.
    - [ ] test: 아무것도 없거나 1자리, 2자리 수일 경우 4자리 이상일 경우
  - [ ] 임의의 수는 서로 다른 수이다.
    - [ ] test: 임의의 수가 1가지라도 같을 경우

- [ ] 스트라이크(같은 자리수 수끼리 같을 경우 1스트라이크) 구하기

  - [ ] 입력받은 3자리 문자를 array로 쪼개기
  - [ ] 입력받은 3자리 문자 모두 int로 형변환하기
  - [ ] 컴퓨터 임의의 수를 array에 저장한다.
  - [ ] loop를 돌며 각 자리수가 같은지 비교하여 같으면 스트라이크 카운트가 증가한다.
  - [ ] 스트라이크 카운트를 반환한다.

- [ ] 볼(같은 수가 다른 자리에 있을 경우 1볼) 구하기

  - [ ] 입력받은 3자리 문자를 array로 쪼개기
  - [ ] 입력받은 3자리 문자 모두 int로 형변환하기
  - [ ] 입력받은 3자리 array를 set으로 형변환하기
  - [ ] 컴퓨터 임의의 수를 array에 저장한다.
  - [ ] 컴퓨터 임의의 수 array를 set으로 형변환하기
  - [ ] [set 교집합 구현](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set) -[ ] test: 교집합이 제대로 작동하는가
  - [ ] 입력받은 3자리 set과 컴퓨터 임의의 수 set을 교집합한 결과 길이 반환

- [ ] 각 결과 object를 생성한다.

  - [ ] 결과 object에는 스트라이크, 볼이 key, 수량이 value으로 정의된다.

- [ ] 각 결과를 반환한다.

  - [ ] 볼이 0이 아니라면 볼 value를 먼저 반환한다.
  - [ ] 볼이 0이라면 아무것도 반환하지 않는다.
  - [ ] 스트라이크가 0이 아니라면 value를 반환한다.
  - [ ] 스트라이크가 0이라면 아무것도 반환하지 않는다.
  - [ ] 볼과 스트라이크가 모두 0이라면 모두 반환하지 않고 낫싱 이라는 문자를 반환한다.

- [ ] 최종 결과를 저장한다.

- [ ] 최종 결과를 출력한다.

- [ ] 최종 결과가 3스트라이크라면 flag에 게임 종료 process 반환값을 저장한다.

- [ ] 게임 종료 process (depth가 2이상 넘어가므로 함수로 빼놓을 것)
  - [ ] 게임 종료를 앞에 \n 없이 출력한다.
  - [ ] 게임을 또 할건지 물어보는 문구를 앞에 \n 와 함께 출력하고 다음 줄에서 입력받는다. -[ ] 2라면 false를 반환한다. -[ ] test: 완전히 종료인가 -[ ] 1이라면 true를 반환한다. (의미적으로 명시)
- [ ] process.exit() 수동 종료 방지 알아볼것

# commit message convention

- subject types

  - feat
  - fix
  - docs
  - style
  - refactor
  - test
  - chore : package.json의 변경이나 dotenv의 요소 변경 등, 모듈의 변경

- body rule (영어를 사용할 경우)

  - 과거형이 아닌 명령어, 현재형으로
  - 첫번째 문자는 소문자로
  - 마지막은 마침표가 없도록

- 예 ) feat: add lostMap component

[AngularJS Git Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)

[the AngularJS commit conventions](https://velog.io/@outstandingboy/Git-%EC%BB%A4%EB%B0%8B-%EB%A9%94%EC%8B%9C%EC%A7%80-%EA%B7%9C%EC%95%BD-%EC%A0%95%EB%A6%AC-the-AngularJS-commit-conventions)
