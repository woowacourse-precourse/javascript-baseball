const MissionUtils = require("@woowacourse/mission-utils");
class App {
  gameplay() {
    const ANSWER_NUMBER = this.makeAnswer();
    let isEnd = false;

    MissionUtils.Console.print("숫자 야구 게임을 시작합니다."); // 게임 시작 문구 출력

    while (!isEnd) {
      const INPUT_NUM = this.customInput();
      this.checkValidInput(INPUT_NUM); // 입력이 오류이면 throw하여 프로그램 종료. 오류가 아니면 진행.
      const INPUT_NUM_ARR = this.numberToArray(INPUT_NUM);
      const HINT_ARR = this.compareTwoNumbers(ANSWER_NUMBER, INPUT_NUM_ARR);
      this.printHint(HINT_ARR);
      isEnd = this.checkEnd(HINT_ARR);
    }
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    const SELECT_NUM = this.selectEndState();
    return SELECT_NUM;
  }

  play() {
    let select = this.gameplay();
    while (select === "1") {
      select = this.gameplay();
    }
    if (select === "2") MissionUtils.Console.close(); // 프로그램 종료.
    else if (select !== "1" && select !== "2")
      throw new Error("잘못된 입력입니다. 프로그램을 종료합니다.");
  }

  makeAnswer() {
    const answer = [];
    while (answer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!answer.includes(number)) answer.push(number); // answer에 중복된 숫자가 없다면 push!
    }
    return answer;
  }

  numberToArray(number) {
    // 숫자를 배열로 바꾸는 함수.
    const STR = String(number);
    const MAP_FN = (arg) => Number(arg);
    return Array.from(STR, MAP_FN);
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
    // 3. 0 이 있다면 오류.
    const INPUT_NUM_ARR = (inputNum + "").split(""); // 숫자를 arr로 바꾸기.
    const INPUT_NUM_SET = new Set(INPUT_NUM_ARR); // 서로 다른 숫자인지 확인하기 위한 Set Object 만들기.

    if (INPUT_NUM_ARR.length !== 3)
      throw new Error(
        "길이가 3인 숫자를 입력해야합니다. 프로그램을 종료합니다."
      );
    if (INPUT_NUM_ARR.length !== INPUT_NUM_SET.size)
      // 중복된 숫자면 error throw.
      throw new Error(
        "각각 다른 숫자를 입력해야합니다. 프로그램을 종료합니다."
      );
    if (!inputNum.match(/[1-9]{3}/))
      throw new Error("유효한 입력이 아닙니다. 프로그램을 종료합니다.");
  }

  compareTwoNumbers(answer, number) {
    // [arg1, arg2] -> arg1: 스트라이크 수 , arg2: 볼 수
    // 1. 스트라이크부터 확인
    // 2. 그 다음 볼 확인.
    let hintArr = [0, 0];
    let sameNumberNum = 0; // 전체 배열에서 같은 숫자의 개수 세는 변수.

    for (let i = 0; i < 3; i++) if (answer[i] === number[i]) hintArr[0]++; // 같은 자리의 숫자 같으면 스트라이크 + 1
    for (let i = 0; i < 3; i++) if (answer.includes(number[i])) sameNumberNum++; // 겹치는 숫자 카운트

    hintArr[1] = sameNumberNum - hintArr[0]; // 볼 수 = 겹치는 숫자 - 스트라이크 수

    return hintArr;
  }

  printHint(hint) {
    // Hint 문구를 출력하는 함수.
    const STRIKE_NUM = hint[0];
    const BALL_NUM = hint[1];

    if (STRIKE_NUM + BALL_NUM === 0)
      MissionUtils.Console.print("낫싱"); // 0스트라이크 0볼
    else if (STRIKE_NUM === 0 && BALL_NUM > 0)
      // 스트라이크 = 0, 볼 만 있을 때
      MissionUtils.Console.print(`${BALL_NUM}볼`);
    else if (BALL_NUM === 0 && STRIKE_NUM > 0)
      // 볼 = 0, 스트라이크만 있을 때
      MissionUtils.Console.print(`${STRIKE_NUM}스트라이크`);
    else MissionUtils.Console.print(`${BALL_NUM}볼 ${STRIKE_NUM}스트라이크`); // 둘 다 있을 때.
  }

  checkEnd(hint) {
    // 끝났는지 체크하는 함수.
    let isEnd = false;
    if (hint[0] === 3) isEnd = true; // 3 스트라이크면 게임 종료!
    return isEnd;
  }

  selectEndState() {
    let selectNum = 0;

    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (select) => {
        selectNum = select;
      }
    );
    return selectNum;
  }
}

module.exports = App;
