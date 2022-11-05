const MissionUtils = require("@woowacourse/mission-utils");

const gameStart = () => {
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
};

const pickRandomNumber = () => {
  return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3).join("");
};

const getUserInput = () => {
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) =>
    validateUserInput(input)
  );
};

const validateUserInput = (input) => {
  if (
    input.length !== 3 ||
    input.match(/[^1-9]/g) ||
    new Set(input.split("")).size !== 3
  )
    throw new Error("Invalid UserInput");

  return true;
};

class App {
  play() {
    gameStart();

    let answer = pickRandomNumber();

    getUserInput();
  }
}

module.exports = App;

const app = new App();
app.play();
