const MissionUtils = require("@woowacourse/mission-utils");

const START_GAME = "숫자 야구 게임을 시작합니다.";
const NUMBER_QUERY_INPUT = "숫자를 입력해주세요 : ";
const END_GAME_MESSAGE = "3개의 숫자를 모두 맞히셨습니다! 게임 종료";
const RESTART_END_APPLICATION =
  "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.";
const NUMBER_INPUT_CHECK = /[0-9]{3}/;
const ERROR_MESSAGE =
  "1~9까지 서로 다른 수로 이루어진 3자리의 수를 입력해주세요.";

const startGame = (computerNumber) => {
  MissionUtils.Console.print(computerNumber);
  MissionUtils.Console.readLine(NUMBER_QUERY_INPUT, (userNumber) => {
    userInputCheck(userNumber);
    const [strikeCount, ballCount] = countStrikeBall(
      userNumber,
      computerNumber
    );
    const responseMessage = makeResponseMessage(strikeCount, ballCount);
    if (!responseMessage) startGame(computerNumber);
  });
};

const userInputCheck = (userInput) => {
  if (!NUMBER_INPUT_CHECK.test(Number(userInput))) {
    throw new Error(ERROR_MESSAGE);
  }
  if (new Set(userInput).size !== 3) {
    throw new Error(ERROR_MESSAGE);
  }
};

const countStrikeBall = (userInput, computerInput) => {
  let ball = checkBall(userInput, computerInput);
  let strike = checkStrike(userInput, computerInput);
  return [strike, ball];
};

const checkStrike = (userInput, computerInput) => {
  let count = 0;
  [...userInput].map((elem, idx) => {
    if (computerInput[idx] === Number(elem)) {
      count++;
    }
  });
  return count;
};
const checkBall = (userInput, computerInput) => {
  let count = 0;
  [...userInput].map((elem) => {
    if (computerInput.includes(Number(elem))) {
      count++;
    }
  });
  count -= checkStrike(userInput, computerInput);
  return count;
};

const makeResponseMessage = (strikeCount, ballCount) => {
  if (strikeCount === 0 && ballCount === 0) {
    MissionUtils.Console.print("낫싱");
    return false;
  }
  if (strikeCount !== 0 && ballCount !== 0) {
    MissionUtils.Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
    return false;
  }
  if (strikeCount === 3) {
    MissionUtils.Console.print("3스트라이크");
    MissionUtils.Console.print(END_GAME_MESSAGE);
    MissionUtils.Console.readLine(RESTART_END_APPLICATION, (answer) => {
      checkContinue(answer);
    });
    return true;
  }
  if (strikeCount !== 0 && ballCount === 0) {
    MissionUtils.Console.print(`${strikeCount}스트라이크`);
    return false;
  }
  if (ballCount && strikeCount === 0) {
    MissionUtils.Console.print(`${ballCount}볼`);
    return false;
  }
};

const checkContinue = (inputNumber) => {
  if (inputNumber === "1") {
    startGame(getComputerNumber());
  }
  if (inputNumber === "2") {
    MissionUtils.Console.close();
  }
  if (inputNumber !== "1" && inputNumber !== "2") {
    MissionUtils.Console.print("입력 오류 게임을 종료합니다.");
    MissionUtils.Console.close();
  }
};

const getComputerNumber = () => {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
};

class App {
  play() {
    MissionUtils.Console.print(START_GAME);
    startGame(getComputerNumber());
  }
}
const app = new App();
app.play();
module.exports = App;
