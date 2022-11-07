const MissionUtils = require("@woowacourse/mission-utils");

const RESTART_CODE = "1";
const EXIT_CODE = "2";

const PLAYER_MESSAGE = "숫자를 입력해주세요 : ";
const PLAYER_ERROR_MESSAGE = "올바른 숫자를 입력해주세요.";
const START_MESSAGE = "숫자 야구 게임을 시작합니다.";
const END_MESSAGE = "3개의 숫자를 모두 맞히셨습니다! 게임 종료";
const RESTART_MESSAGE = `게임을 새로 시작하려면 ${RESTART_CODE}, 종료하려면 ${EXIT_CODE}를 입력하세요.\n`;

const printGameStart = () => {
  MissionUtils.Console.print(START_MESSAGE);
};

const createComputerNumber = () => {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return [...computer.join("").toString()];
};

const isThreeDigitNumber = (num) => {
  if (!isNaN(num)) return num.length === 3 ? true : false;
  else return false;
};

const isOneToNine = (num) => {
  return /^[1-9]+$/.test(num);
};

const isDifferentDigitNumber = (num) => {
  const numArr = [...String(num)];

  return new Set(numArr).size == numArr.length ? true : false;
};

const validatePlayerNumber = (num) => {
  if (
    isThreeDigitNumber(num) &&
    isOneToNine(num) &&
    isDifferentDigitNumber(num)
  )
    return true;
  else throw PLAYER_ERROR_MESSAGE;
};

const getGameResult = (playerArr, computerArr) => {
  let strike = 0;
  let ball = 0;

  for (let i = 0; i < 3; i++) {
    (playerArr[i] === computerArr[i] && strike++) ||
      (playerArr[i] !== computerArr[i] &&
        playerArr.includes(computerArr[i]) &&
        ball++);
  }

  return [strike, ball];
};

const printResultMessage = ([strike, ball]) => {
  let message = "";

  (message = strike === 3 && "3스트라이크") ||
    (message = strike !== 0 && ball !== 0 && `${ball}볼 ${strike}스트라이크`) ||
    (message = strike === 0 && ball !== 0 && `${ball}볼`) ||
    (message = strike !== 0 && ball === 0 && `${strike}스트라이크`) ||
    (message = strike === 0 && ball === 0 && "낫싱");

  return MissionUtils.Console.print(message);
};

const isCorrect = ([strike, ball]) => {
  return strike === 3 && ball === 0;
};

const printRestartMessage = () => {
  MissionUtils.Console.readLine(RESTART_MESSAGE, (code) => {
    code === RESTART_CODE && game(createComputerNumber());
  });
};

const restartGame = () => {
  MissionUtils.Console.print(END_MESSAGE);
  printRestartMessage();
};

const game = (computerNumber) => {
  MissionUtils.Console.readLine(PLAYER_MESSAGE, (num) => {
    let playerNumber = [...String(num)];
    let result = getGameResult(playerNumber, computerNumber);

    validatePlayerNumber(num) && printResultMessage(result);
    (isCorrect(result) && restartGame()) || game(computerNumber);
  });
};

class App {
  play() {
    printGameStart();
    game(createComputerNumber());
  }
}

module.exports = App;

const app = new App();
app.play();
