# 기능 목록

1. 정답에 해당하는 변수에, 랜덤으로 서로 다른 3개의 숫자를 저장하는 기능 (완료)
   - MissionUtils의 `Random`함수 이용
   - (3개의 숫자를 하나의 문자열로 리턴하는 getter 추가)
2. n볼 m스트라이크(또는 낫싱)를 출력하도록 하는 기능

   - 입력 : 상대방의 수, 나의 수

   - 출력 : [볼, 스트라이크]

3. 사용자에게 입력을 받는 기능
4. 정상입력시 게임이 종료조건을 만족했는지 판단하는 변수, 함수 등의 기능
5. 게임을 한판 진행하는 기능. 게임이 끝난 경우 리턴하도록 함
6. 사용자의 입력에 따라 게임을 여러판 진행하는 기능

   - 사용자 입력에 따라 게임을 계속 진행하거나 프로그램 종료

   - 처음에는 게임이 자동으로 시작
7. 예외 목록에 해당하는 경우에 throw문을 통하여 프로그램을 종료하도록 하는 기능

   - 서로 다른 3자리의 숫자(1~9)가 아닌 경우

   - 게임 끝난 이후, 1과 2 중 하나가 아닌 경우

   - 기타
     - 개행이 포함된 붙여넣기
     - 빈 문자열 등 기타 문자열

# Classes

- Opponent
  - 3개 숫자를 생각한다
- Player
  - 3개 숫자 정답을 맞춘다
- Judge(진행자)
  - 올바른 입력이 들어왔는지 판단한다
  - 스트라이크와 볼을 판단한다
  - 게임을 계속 진행하거나 종료한다



# 주의 사항 (checklist before push)

- js coding convention([airbnb js style guide](https://github.com/ParkSB/javascript-style-guide))을 지켰는가
  - 함수나 변수의 이름을 축약하지 않고 의도를 분명히 드러내도록 작명하였는가
  - 무의미한 주석은 제거하였는가
  - 공백라인 일정하게 하였는가
  - indent depth가 2 이하인가
- 함수는 한가지 일만 하는가
- console.log()가 아닌 Mission.util의 함수를 사용하였는가
- commit convention을 지켰는가 + 이해가 쉽도록 작성하였는가
- 테스트 코드는 잘 작성되었는가
  - 예외는 없는가

# Reference site

[mission utils library docs](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)

[커밋 작성하는 법](https://koreapy.tistory.com/m/1150)

[웹 개발 디자인 패턴](https://sangcho.tistory.com/entry/%EC%9B%B9%EA%B0%9C%EB%B0%9C%EC%9E%90%EA%B0%80%EC%95%8C%EC%95%84%EC%95%BC%ED%95%A07%EA%B0%80%EC%A7%80%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4)

