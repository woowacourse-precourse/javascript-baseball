const MissionUtils = require("@woowacourse/mission-utils");
const Computer = require("./Computer");

class App {
  inputNumber;
  computer = new Computer();

  play() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      this.inputNumber = input;
      console.log(this.inputNumber);
    });
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
