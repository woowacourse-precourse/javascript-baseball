# 🛠️ 기능 목록

- [ ] 컴퓨터는 1에서 9까지 서로 다른 임의의 수 3개를 선택한다.
  - [ ] [MissionUtils 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)의 `Random` API를 활용한다.
- [ ] 사용자로부터 서로 다른 3개의 숫자를 입력받는다.
  - [ ] [MissionUtils 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)의 `Console` API를 활용한다.
  - [ ] 사용자가 잘못된 값을 입력한 경우 `throw` 문을 사용해 예외를 발생시킨 후 애플리케이션을 종료한다.
- [ ] 컴퓨터는 사용자의 입력 숫자에 대한 힌트와 결과를 출력한다.
  - [ ] `스트라이크` : 같은 수가 같은 자리에 있는 경우
  - [ ] `볼` : 같은 수가 다른 자리에 있는 경우
  - [ ] `낫싱` : 같은 수가 전혀 없는 경우
- [ ] 이 과정을 반복해 컴퓨터가 선택한 3개의 숫자를 모두 맞히면 게임이 종료된다.
- [ ] 게임이 종료되면 사용자로부터 게임을 다시 시작할 것인지, 완전히 종료될 것인지 입력을 받는다.

# Commit 규칙

| 태그     | 제목                                              |
| -------- | ------------------------------------------------- |
| feat     | 새로운 기능 추가                                  |
| fix      | 버그 수정                                         |
| docs     | 문서 수정                                         |
| style    | 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우 |
| refactor | 코드 리펙토링                                     |
| test     | 테스트 코드, 리팩토링 테스트 코드 추가            |
| chore    | 빌드 업무 수정, 패키지 매니저 수정                |

- commit 메시지 : `태그: [문제 번호] 설명`

```
// ex
refactor: reverseAlphabet 메서드 분리
```
