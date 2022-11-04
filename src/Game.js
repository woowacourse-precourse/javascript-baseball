const {
  print,
  readLine,
  pickUniqueNumbersInRange,
  closeIO,
} = require("./Utils");
const calculateScore = require("./CalculateScore");

const createComputerNumberList = () => {
  return pickUniqueNumbersInRange(1, 9, 3);
};

const parseStringToNumberList = (stringNumber) => {
  return stringNumber.split("").map((number) => parseInt(number, 10));
};

const getInputNumberList = async () => {
  const inputStringNumber = await readLine("숫자를 입력해주세요 : ");
  return parseStringToNumberList(inputStringNumber);
};

const scoreOutputMap = {
  ballCount: 0,
  strikeCount: 0,
  nothing() {
    return "낫싱";
  },
  onlyBall() {
    return `${this.ballCount}볼`;
  },
  onlyStrike() {
    return `${this.strikeCount}스트라이크`;
  },
  ballWithStrike() {
    return `${this.ballCount}볼 ${this.strikeCount}스트라이크`;
  },
};

const judge = (score) => {
  if (score.isNothing) return "nothing";
  if (score.strikeCount === 0) return "onlyBall";
  if (score.ballCount === 0) return "onlyStrike";
  return "ballWithStrike";
};

const gameStart = async () => {
  const computerNumberList = createComputerNumberList();
  let inputNumberList;
  let score;
  do {
    inputNumberList = await getInputNumberList();
    score = calculateScore(computerNumberList, inputNumberList);
    scoreOutputMap.ballCount = score.ballCount;
    scoreOutputMap.strikeCount = score.strikeCount;
    print(scoreOutputMap[judge(score)]());
  } while (score.strikeCount !== 3);
};

const gameEndAskRestartOrQuit = async () => {
  print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  const answer = await readLine(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
  );
  return answer === "1" ? "restart" : "quit";
};

const playGame = async () => {
  print("숫자 야구 게임을 시작합니다.");
  do {
    await gameStart();
  } while ((await gameEndAskRestartOrQuit()) === "restart");
  closeIO();
};

module.exports = playGame;
