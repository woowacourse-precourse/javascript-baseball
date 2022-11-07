const MissionUtils = require("@woowacourse/mission-utils");

const MIN_ANSWER = "102";
const MAX_ANSWER = "987";
const MIN_NUMBER = 1;
const MAX_NUMBER = 9;
const NUMBER_LENGTH = 3;
const OPTION = {
  RESTART: "1",
  EXIT: "2",
};
const MESSAGE = {
  START: "숫자 야구 게임을 시작합니다.",
  INPUT: "숫자를 입력해주세요 : ",
  SUCCESS: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  RESTART_OR_EXIT: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. ",
  EXIT: "숫자 야구 게임을 종료합니다.",
};
const RESULT = {
  BALL: "볼",
  STRIKE: "스트라이크",
  NOTHING: "낫싱",
};
const ERROR = {
  INVALID_INPUT: "유효하지 않은 입력값입니다. 게임을 종료합니다.",
};

class App {
  makeAnswer = () => {
    const randomNumbers = [];

    while (randomNumbers.length < NUMBER_LENGTH) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(MIN_NUMBER, MAX_NUMBER);
      if (!randomNumbers.includes(randomNumber)) randomNumbers.push(randomNumber);
    }

    return randomNumbers.join("");
  };

  isDuplicated = (input) => {
    const inputSet = new Set([...input]);
    return input.length !== inputSet.size;
  };

  containsThreeNumbers = (input) => {
    return input.length === NUMBER_LENGTH;
  };

  containsOnlyNumbers = (input) => {
    return input >= MIN_ANSWER && input <= MAX_ANSWER;
  };

  isValid = (input) => {
    return this.containsThreeNumbers(input) && this.containsOnlyNumbers(input) && !this.isDuplicated(input);
  };

  getResultMessage = (strike, ball, nothing) => {
    let message = "";
    if (nothing) message = RESULT.NOTHING;
    if (ball) message += `${ball}${RESULT.BALL} `;
    if (strike) message += `${strike}${RESULT.STRIKE}`;
    return message;
  };

  exit = () => {
    MissionUtils.Console.print(MESSAGE.EXIT);
    MissionUtils.Console.close();
  };

  handleSuccess = () => {
    MissionUtils.Console.print(MESSAGE.SUCCESS);

    MissionUtils.Console.readLine(MESSAGE.RESTART_OR_EXIT, (input) => {
      if (input === OPTION.RESTART) return this.play();
      if (input === OPTION.EXIT) return this.exit();
      if (input !== (OPTION.RESTART || OPTION.EXIT)) throw new Error(ERROR.INVALID_INPUT);
    });
  };

  getResult = (ANSWER, input) => {
    let strike = 0;
    let ball = 0;
    let nothing = true;

    for (let i = 0; i < ANSWER.length; i++) {
      const NUMBER = input[i];
      if (ANSWER.includes(NUMBER)) {
        ANSWER[i] === NUMBER ? strike++ : ball++;
        nothing = false;
      }
    }

    return [strike, ball, nothing];
  };

  printResult = (ANSWER, input) => {
    const [strike, ball, nothing] = this.getResult(ANSWER, input);

    const resultMessage = this.getResultMessage(strike, ball, nothing);
    MissionUtils.Console.print(resultMessage);

    if (strike === NUMBER_LENGTH) {
      this.handleSuccess();
    }

    this.getInputAndCompare(ANSWER);
  };

  getInputAndCompare = (ANSWER) => {
    MissionUtils.Console.readLine(MESSAGE.INPUT, (input) => {
      if (!this.isValid(input)) throw new Error(ERROR.INVALID_INPUT);
      this.printResult(ANSWER, input);
    });
  };

  play = () => {
    MissionUtils.Console.print(MESSAGE.START);
    const ANSWER = this.makeAnswer();
    this.getInputAndCompare(ANSWER);
  };
}

const app = new App();
app.play();

module.exports = App;
