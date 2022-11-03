const MissionUtils = require("@woowacourse/mission-utils");
const Computer = require("./Computer");

class App {
  inputNumber;
  hint = "";

  computer = new Computer();

  play() {
    if (this.hint === "")
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      if (!this.getIsInputValueValid(input)) {
        throw Error("입력값이 유효하지 않습니다.");
      }
      this.inputNumber = input;
      this.hint = this.getHint(this.computer.correctNumber, this.inputNumber);
      MissionUtils.Console.print(this.hint);

      if (this.hint !== "3스트라이크") this.play();
      else this.recommendRestart();
    });
  }

  recommendRestart() {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (input) => {
        if (input === "1") {
          this.resetGameValue();
          this.play();
        }
      }
    );
  }

  getIsInputValueValid(inputValue) {
    let isInputValueValid = true;
    if (
      getIsLengthInvalid(inputValue) ||
      getIsRepeatExist(inputValue) ||
      getIsInvalidWordExist(inputValue)
    )
      isInputValueValid = false;
    return isInputValueValid;
  }

  getHint(correctNumber, inputNumber) {
    const strikeCount = countStrike(correctNumber, inputNumber);
    const ballCount = countBall(correctNumber, inputNumber, strikeCount);
    const hint = convertCountToHintString(strikeCount, ballCount);

    return hint;
  }

  resetGameValue() {
    this.hint = "";
    this.computer.setNewCorrectNumber();
  }
}

const getIsLengthInvalid = (inputValue) => {
  return inputValue.length !== 3;
};

const getIsRepeatExist = (inputValue) => {
  for (let i = 1; i < inputValue.length; i++) {
    if (inputValue[i - 1] === inputValue[i]) return true;
  }
  return false;
};

const getIsInvalidWordExist = (inputValue) => {
  let inputValueWithoutNumber = inputValue.replace(/[1-9]/g, "");
  return inputValueWithoutNumber.length !== 0;
};

const convertStringToArray = (string) => {
  return string.split("");
};

const countStrike = (correctNumber, inputNumber) => {
  let strikeCount = 0;
  const correctNumberArray = convertStringToArray(correctNumber);
  const inputNumberArray = convertStringToArray(inputNumber);

  for (let i = 0; i < correctNumber.length; i++) {
    if (correctNumberArray[i] === inputNumberArray[i]) strikeCount += 1;
  }

  return strikeCount;
};

const countBall = (correctNumber, inputNumber, strikeCount) => {
  const correctNumberArray = convertStringToArray(correctNumber);
  const inputNubmerArray = convertStringToArray(inputNumber);
  const sameNumberArray = correctNumberArray.filter((number) =>
    inputNubmerArray.includes(number)
  );

  return sameNumberArray.length - strikeCount;
};

const convertCountToHintString = (strikeCount, ballCount) => {
  let hint = "";

  if (ballCount > 0) hint += `${ballCount}볼 `;
  if (strikeCount > 0) hint += `${strikeCount}스트라이크`;
  if (hint.length === 0) hint += `낫싱`;

  return hint;
};

module.exports = App;

const app = new App();
app.play();
