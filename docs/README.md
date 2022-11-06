# 🛠️ 기능 목록

- [x] 컴퓨터는 1에서 9까지 서로 다른 임의의 수 3개를 선택한다.
  - [x] [MissionUtils 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)의 `Random` API를 활용한다.
- [x] 사용자로부터 서로 다른 3개의 숫자를 입력받는다.
  - [x] [MissionUtils 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)의 `Console` API를 활용한다.
  - [x] 사용자가 잘못된 값을 입력한 경우 `throw` 문을 사용해 예외를 발생시킨 후 애플리케이션을 종료한다.
- [x] 컴퓨터는 사용자의 입력 숫자에 대한 힌트와 결과를 출력한다.
  - [x] `스트라이크` : 같은 수가 같은 자리에 있는 경우
  - [x] `볼` : 같은 수가 다른 자리에 있는 경우
  - [x] `낫싱` : 같은 수가 전혀 없는 경우
- [x] 이 과정을 반복해 컴퓨터가 선택한 3개의 숫자를 모두 맞히면 게임이 종료된다.
- [x] 게임이 종료되면 사용자로부터 게임을 다시 시작할 것인지, 완전히 종료될 것인지 입력을 받는다.

# ✅ 체크 사항

- [ ] **기능을 구현하기 전 `docs/README.md`에 구현할 기능 목록을 정리**해 추가했는가
- [ ] **Git의 커밋 단위는 앞 단계에서 `docs/README.md`에 정리한 기능 목록 단위**로 추가했는가
- [ ] [JavaScript 코드 컨벤션](https://gist.github.com/stephenparish/9941e89d80e2bc58a153#allowed-type)을 지켰는가
- [ ] indent depth가 3을 넘는 것이 있는가
- [ ] 함수가 한 가지 일만 하는가
- [ ] Jest를 이용하여 기능 목록을 테스트하였는가

# 📑 학습 정리, 트러블 슈팅, 회고

[노션 링크](https://maevelog.notion.site/2-fd12f4dae95f4845a6774d11551c85b2)

# ✏️ Commit 규칙

| 태그     | 제목                                              |
| -------- | ------------------------------------------------- |
| feat     | 새로운 기능 추가                                  |
| fix      | 버그 수정                                         |
| docs     | 문서 수정                                         |
| style    | 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우 |
| refactor | 코드 리팩토링                                     |
| test     | 테스트 코드, 리팩토링 테스트 코드 추가            |
| chore    | 빌드 업무 수정, 패키지 매니저 수정                |

```
// ex
feat: getResultMessage 함수 구현

사용자의 입력 숫자에 대한 힌트와 결과(스트라이크, 볼, 낫싱) 출력함
이 과정을 반복해 컴퓨터가 선택한 3개의 숫자를 모두 맞히면 게임을 종료함
```
