const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    let playCount = 0; // playCount값이 3인 경우 정상 종료, 4인 경우 비정상 종료 입니다.
    let computerNumber = [];

    for (playCount = 0; playCount < 3; playCount++) {
      if (playCount === 0) {
        computerNumber = makeComputerNumber();
      }

      const user_input = getUserInput();

      if (user_input.length === 0) {
        playCount = 4;
        break;
      }

      const strike_ball_record = calculateInputNumber(
        computerNumber,
        user_input
      );

      const is_three_strike = printBallStrike(strike_ball_record);

      if (is_three_strike) {
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        playCount = askEndGame();
      } else if (playCount === 2) {
        playCount = askEndGame();
      }
    }

    MissionUtils.Console.close();
    if (playCount === 4) {
      throw "Input format is wrong.";
    }
  }
}

// 프로그램 연산 기능
const makeComputerNumber = () => {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }

  const computer_number = computer.map((element) => {
    return String(element);
  });
  return computer_number;
};

const calculateInputNumber = (computerNumber, userNumber) => {
  let strikeBallRecord = [0, 0];

  for (index = 0; index < 3; index++) {
    if (computerNumber[index] === userNumber[index]) {
      strikeBallRecord[0] += 1;
    } else if (computerNumber.includes(userNumber[index])) {
      strikeBallRecord[1] += 1;
    }
  }
  return strikeBallRecord;
};

// 프로그램 출력 기능
const printBallStrike = (strikeBallRecord) => {
  if (strikeBallRecord[0] === 3) {
    MissionUtils.Console.print(`${strikeBallRecord[0]}스트라이크`);
    return true;
  }

  if (strikeBallRecord[0] + strikeBallRecord[1] === 0) {
    MissionUtils.Console.print("낫싱");
  } else if (strikeBallRecord[0] > 0 && strikeBallRecord[0] > 0) {
    MissionUtils.Console.print(
      `${strikeBallRecord[1]}볼 ${strikeBallRecord[0]}스트라이크`
    );
  } else if (strikeBallRecord[0] > 0 && strikeBallRecord[0] === 0) {
    MissionUtils.Console.print(`${strikeBallRecord[0]}스트라이크`);
  } else if (strikeBallRecord[0] === 0 && strikeBallRecord[1] > 0) {
    MissionUtils.Console.print(`${strikeBallRecord[1]}볼`);
  }

  return false;
};

// 사용자 입력 기능
const getUserInput = () => {
  let inputArray = [];

  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (inputNumber) => {
    if (Number.isNaN(inputNumber) || inputNumber.length !== 3) {
      return [];
    }
    if (inputNumber.includes("0") || inputNumber.includes(".")) {
      return [];
    }

    inputArray = inputNumber.split("");
    const input_set = new Set(inputArray);

    if (inputArray.length !== input_set.size) {
      return [];
    }
  });

  return inputArray;
};

const askEndGame = () => {
  let isQuit = -1;

  MissionUtils.Console.readLine(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
    (isEnd) => {
      if (isEnd === "2") {
        MissionUtils.Console.print("게임 종료");
        isQuit = 2;
      }
    }
  );
  return isQuit;
};

module.exports = App;
