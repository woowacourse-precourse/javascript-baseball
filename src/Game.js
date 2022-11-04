const {
  print,
  readLine,
  pickUniqueNumbersInRange,
  closeIO,
} = require("./Utils");
const calculateScore = require("./CalculateScore");

const createComputerNumbers = () => {
  return pickUniqueNumbersInRange(1, 9, 3);
};

const parseStringToNumberList = (stringNumber) => {
  return stringNumber.split("").map((number) => parseInt(number, 10));
};

const gameStart = async () => {
  let isThreeStrike = false;

  const computerNumbers = createComputerNumbers();
  while (!isThreeStrike) {
    const inputNumbers = await readLine("숫자를 입력해주세요 : ");
    const numberList = parseStringToNumberList(inputNumbers);
    const score = calculateScore(computerNumbers, numberList);
    if (score.isNothing) {
      print("낫싱");
    } else if (score.strike === 3) {
      print(`${score.strike}스트라이크`);
      isThreeStrike = true;
    } else if (score.strike === 0) {
      print(`${score.ball}볼`);
    } else if (score.ball === 0) {
      print(`${score.strike}스트라이크`);
    } else {
      print(`${score.ball}볼 ${score.strike}스트라이크`);
    }
  }
};

const gameEnd = () => {
  print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
};

const askRestartOrQuit = async () => {
  const answer = await readLine(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
  );
  return answer === 1 ? "restart" : "quit";
};

const playGame = async () => {
  let isRestart = true;

  print("숫자 야구 게임을 시작합니다.");
  while (isRestart) {
    await gameStart();
    gameEnd();
    if ((await askRestartOrQuit()) === "quit") {
      closeIO();
      isRestart = false;
    }
  }
};

module.exports = playGame;
