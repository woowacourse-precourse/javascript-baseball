const MissionUtils = require("@woowacourse/mission-utils");
class App {
  play() {
    const ANSWER_NUMBER = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    // 미션 유틸 라이브러리에 있는 함수 pickUniqueNumbersInRange를 활용하여 1부터 9까지의 숫자 중 겹치지 않는 3개의 숫자를 반환.
    // 출력값 예시)[ 3, 2, 8 ] or [ 2, 3, 4 ] 같이 배열로 반환됨.
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다."); // 게임 시작 문구 출력
    while (isEnd) {
      // Todo: 사용자가 정답을 맞출때 까지 숫자 입력 받아야함.
      const INPUT_NUM = this.customInput();
      this.checkValidInput(INPUT_NUM); // 입력이 오류이면 throw하여 프로그램 종료. 오류가 아니면 진행.
    }
  }

  customInput() {
    // 사용자로부터 입력 받는 함수.
    let inputNumber;
    MissionUtils.Console.readLine("숫자를 입력해 주세요. : ", (number) => {
      inputNumber = number;
    });
    return inputNumber;
  }

  checkValidInput(inputNum) {
    // 입력받은 숫자가 유효한 숫자인지 확인하는 함수.
    // 1. 3자리 숫자인지 체크
    // 2. 서로 다른 숫자인지 체크
    const INPUT_NUM_ARR = (inputNum + "").split(""); // 숫자를 arr로 바꾸기.
    const INPUT_NUM_SET = new Set(INPUT_NUM_ARR); // 서로 다른 숫자인지 확인하기 위한 Set Object 만들기.

    if (INPUT_NUM_ARR.length !== 3)
      throw "길이가 3인 숫자를 입력해야합니다. 프로그램을 종료합니다.";
    if (INPUT_NUM_ARR.length !== INPUT_NUM_SET.size)
      throw "각각 다른 숫자를 입력해야합니다. 프로그램을 종료합니다.";
  }
}

module.exports = App;
