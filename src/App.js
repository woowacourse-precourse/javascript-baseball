const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    let gameAgain = 1;
    gameStartingText();
    while (gameAgain == 1) {
      const computerNumbers = computerNumbersMaking();
      const errorFlag = oneGame(computerNumbers);
      if (errorFlag == 1) throw new Error("입력 숫자 개수가 맞지 않습니다.");
      gameAgain = askGameAgain();
    }
    gameCompleteEndText();
  }
}

const gameStartingText = () => {
  console.log("숫자 야구 게임을 시작합니다.");
};

const computerNumbersMaking = () => {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  const computerNumbers = computer.join("");
  return computerNumbers;
};

const playerNumbersInput = () => {
  let input;
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
    input = answer;
  });
  if(input.length != 3){
    throw "숫자 개수가 맞지 않습니다.";
  }
  return input;
};

const oneGame = (computerNumbers) => {
  let strikeBall = {};
  let playerNumbers;
  let errorFlag = 0;
  while (1) {
    try{
      playerNumbers = playerNumbersInput();
    }catch(error){
      errorFlag = 1;
      return errorFlag;
    }
    strikeBall = compareComputerAndPlayer(computerNumbers, playerNumbers);
    printStrikeAndBall(strikeBall);
    if (strikeBall.strike == 3) {
      gameEndingText();
      break;
    }
  }
  return errorFlag;
};

const compareComputerAndPlayer = (computerNumbers, playerNumbers) => {
  console.log(computerNumbers, playerNumbers);
  let strike = 0;
  let ball = 0;
  for (i = 0; i < 3; i++) {
    if (playerNumbers[i] == computerNumbers[i]) {
      strike++;
    } else if (computerNumbers.includes(playerNumbers[i])) {
      ball++;
    }
  }
  return { strike: strike, ball: ball };
};

const printStrikeAndBall = (strikeBall) => {
  if (strikeBall.strike === 0 && strikeBall.ball === 0) {
    MissionUtils.Console.print("낫싱");
  } else if (strikeBall.strike === 0) {
    MissionUtils.Console.print(`${strikeBall.ball}볼`);
  } else if (strikeBall.ball === 0) {
    MissionUtils.Console.print(`${strikeBall.strike}스트라이크`);
  } else {
    MissionUtils.Console.print(
      `${strikeBall.ball}볼 ${strikeBall.strike}스트라이크`
    );
  }
};

const gameEndingText = () => {
  console.log("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
};

const askGameAgain = () => {
  let input;
  MissionUtils.Console.readLine(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
    (answer) => {
      input = answer;
    }
  );
  return input;
};

const gameCompleteEndText = () => {
  MissionUtils.Console.print("게임 종료.");
}

module.exports = App;
