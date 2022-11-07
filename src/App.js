const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    startGame();
  }
}

const startGame = () => {
  const answer = generateAnswer();
  inputNumber(answer);

  return;
};

const generateAnswer = () => {
  const answer = [];
  while (answer.length < 3) {
    const num = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!answer.includes(num)) {
      answer.push(num);
    }
  }
  return answer.join("");
};

const inputNumber = (answer) => {
  MissionUtils.Console.readLine("숫자를 입력해주세요 :", (number) => {
    const isValidInput = checkExcept(number);
    if (isValidInput == true) {
      judgeAnswer(answer, number);
    } else {
      MissionUtils.Console.close();
    }
  });

  return;
};

const checkExcept = (number) => {
  const numArr = number.split("");
  const numSet = new Set(numArr);

  if (numArr.length !== numSet.size) {
    throw "duplicated character";
  }
  if (number.length !== 3) {
    throw "invalid input length";
  }

  return true;
};

const judgeAnswer = (answer, number) => {
  let strike = 0;
  let ball = 0;

  for (let i = 0; i < 3; i++) {
    if (answer[i] == number[i]) {
      strike += 1;
    }
    if (answer[i] != number[i] && answer.includes(number[i])) {
      ball += 1;
    }
  }
  printJudgeResult(strike, ball, answer);

  return;
};

const printJudgeResult = (strike, ball, answer) => {
  if (strike == 3) {
    announceEnd();
    return;
  }
  if (strike == 0 && ball == 0) {
    MissionUtils.Console.print("낫싱");
    inputNumber(answer);
    return;
  }

  const strikeAns = strike == 0 ? "" : `${strike}스트라이크`;
  const ballAns = ball == 0 ? "" : `${ball}볼 `;

  MissionUtils.Console.print(ballAns + strikeAns);
  inputNumber(answer);

  return;
};

const announceEnd = () => {
  MissionUtils.Console.print("3스트라이크");
  MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  MissionUtils.Console.readLine(
    "게임을 새로 시작하시려면 1, 종료하려면 2를 눌러주세요:",
    (number) => {
      if (number == 1) {
        startGame();
      }
      if (number == 2) {
        MissionUtils.Console.close();
      }
    }
  );

  return;
};

module.exports = App;
