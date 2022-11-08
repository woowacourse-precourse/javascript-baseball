const MissionUtils = require("@woowacourse/mission-utils");
const { ERROR, RESTART } = require("./constants/constants.js");

const gameStart = () => {
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
};

const pickRandomNumber = () => {
  const numberArr = [];

  while (numberArr.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!numberArr.includes(number)) numberArr.push(number);
  }

  return numberArr.join("");
};

const getUserInput = (answer) => {
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
    validateUserInput(input);
    evaluateUserInput(answer, input);
    gameEnd(answer, input);
  });
};

const validateUserInput = (input) => {
  if (
    input.length !== 3 ||
    input.match(/[^1-9]/g) ||
    new Set(input.split("")).size !== 3
  )
    throw new Error(ERROR.INVALID_USER_INPUT);

  return true;
};

const countStrike = (answer, input) => {
  let strike = 0;

  answer.split("").forEach((el, i) => {
    if (el === input[i]) strike++;
  });

  return strike;
};

const countBall = (answer, input) => {
  let ball = 0;

  answer.split("").forEach((el, i) => {
    if (input.includes(el) && input[i] !== el) ball++;
  });

  return ball;
};

const evaluateUserInput = (answer, input) => {
  const strike = countStrike(answer, input);
  const ball = countBall(answer, input);

  if (strike === 0 && ball === 0) MissionUtils.Console.print(`낫싱`);
  else if (strike !== 0 && ball === 0)
    MissionUtils.Console.print(`${strike}스트라이크`);
  else if (strike === 0 && ball !== 0) MissionUtils.Console.print(`${ball}볼`);
  else MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
};

const gameEnd = (answer, input) => {
  const strike = countStrike(answer, input);

  if (strike === 3) {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (input) => {
        validateRestartInput(input);
        evaluateRestartInput(answer, input);
      }
    );
  }

  return getUserInput(answer);
};

const validateRestartInput = (input) => {
  if (!(input === RESTART.YES || input === RESTART.NO))
    throw new Error(ERROR.INVALID_RESTART_INPUT);

  return true;
};

const evaluateRestartInput = (answer, input) => {
  if (input === "1") {
    answer = pickRandomNumber();
    return getUserInput(answer);
  }
  if (input === "2") MissionUtils.Console.close();
};

class App {
  play() {
    let answer = pickRandomNumber();
    gameStart();
    getUserInput(answer);
  }
}

module.exports = App;

const app = new App();
app.play();
