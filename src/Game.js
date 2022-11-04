const { print, readLine, pickUniqueNumbersInRange } = require("./Utils");
const calculateScore = require("./CalculateScore");

const createComputerNumbers = () => {
  return pickUniqueNumbersInRange(1, 9, 3);
};

const parseStringToNumberList = (stringNumber) => {
  return stringNumber.split("").map((number) => parseInt(number, 10));
};

const gameStart = async (computerNumbers) => {
  const inputNumbers = await readLine("숫자를 입력해주세요 : ");
  const numberList = parseStringToNumberList(inputNumbers);
  const score = calculateScore(computerNumbers, numberList);
  console.log(score);
};

const playGame = () => {
  const computerNumbers = createComputerNumbers();
  print(computerNumbers);
  print("숫자 야구 게임을 시작합니다.");
  gameStart(computerNumbers);
};

module.exports = playGame;
