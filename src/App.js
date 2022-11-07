const MissionUtils = require("@woowacourse/mission-utils");
const { error, Console } = require("console");

class App {
  play() {
    startGame();
  }
}

module.exports = App;

function creatComputerAnswer() {
  const computerAnswer = [];
  while (computerAnswer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computerAnswer.includes(number)) {
      computerAnswer.push(number);
    }
  }
  return computerAnswer;
}

const isNumberRange = (playerAnswerElement) =>
  1 <= playerAnswerElement && playerAnswerElement <= 9;

const duplicateNumber = (playerAnswerElement, index) =>
  playerAnswer.indexOf(playerAnswerElement) === index;

function verifyPlayerAnswer(playerAnswer) {
  if (
    isNaN(playerAnswer) ||
    playerAnswer.length !== creatComputerAnswer.length ||
    playerAnswer.some(isNumberRange) ||
    0 < playerAnswer.filter(duplicateNumber).length
  ) {
    throw new Error("잘못된 값을 입력했습니다.");
  } else {
  }
}

function startGame() {
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

  const playerAnswer = [];

  MissionUtils.Console.readLine("숫자를 입력해주세요.", (answer) => {
    playerAnswer.push(answer);
    verifyPlayerAnswer(playerAnswer);
  });
}
