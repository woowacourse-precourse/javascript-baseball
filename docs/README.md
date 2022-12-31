# 구현할 기능 목록

- isStrike, isBall
  스트라이크, 볼 인지 확인하는 메소드

- isVaild
  유효한 입력인지 확인하는 메소드

- comNumberInit
  서로 다른 무작위 숫자 3개를 만들어주는 함수

- playerInput
  사용자의 입력을 받고, 비동기로 작동하므로 리턴값이 없어야 한다. 고로 이 함수 안에서 최종 결과를 받고, 결과를 출력하고, 게임을 계속하는 함수도 넣는다.

- printResultText
  게임 결과를 출력한다.

- continueGame
  게임을 계속할지 입력받는다.

- 해야할 일

  readline 모듈이 비동기식으로 작동해서, 사용자가 입력을 마치지 않아도 다음 라인이 실행된다. 해결방법은 readline을 사용하는 함수는 어떤값을 리턴하지 않으면 된다.

  사용자가 잘못된 값을 입력한 경우 throw문을 사용해 예외를 발생시킨후 애플리케이션은 종료되어야 한다.

  MissionUtils 라이브러리에서 제공하는 Random 및 Console API를 사용하여 구현해야 한다.
  Random 값 추출은 MissionUtils 라이브러리의 Random.pickNumberInRange()를 활용한다.
  사용자의 값을 입력 받고 출력하기 위해서는 MissionUtils 라이브러리에서 제공하는 Console.readLine, Console.print를 활용한다.

  프로그램 구현이 완료되면 ApplicationTest의 모든 테스트가 성공해야 한다. 테스트가 실패할 경우 0점 처리한다.

  Jest를 이용하여 본인이 정리한 기능 목록이 정상 동작함을 테스트 코드로 확인한다.
  테스트 도구 사용법이 익숙하지 않다면 **tests**/StringTest.js를 참고하여 학습한 후 테스트를 구현한다.

  github 통해 제출
