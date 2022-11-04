const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    let gameAgain = 1;
    gameStartingText();
    while(gameAgain == 1){
      const computerNumbers = computerNumbersMaking();
      oneGame(computerNumbers);
      gameAgain = askGameAgain();
    }

  }
}

const gameStartingText = () => {
  console.log("숫자 야구 게임을 시작합니다.");
}

const computerNumbersMaking = () => {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
};

const playerNumbersInput = () => {
  let input;
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
    input = answer;
  });
  return input;
};

const oneGame = (computerNumbers) => {
  let strikeBall = [0, 0];
  while(1){
    const playerNumbers = playerNumbersInput();
    strikeBall = compareComputerAndPlayer(computerNumbers, playerNumbers);
    printStrikeAndBall(strikeBall);
    if(strikeBall[0] == 3) break;
  }
};

const compareComputerAndPlayer = (computerNumbers, playerNumbers) => {

};

const printStrikeAndBall = (strikeBall) => {

};

const askGameAgain = () => {
  let input;
  MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (answer) => {
    input = answer;
  });
  return input;
};

module.exports = App;
