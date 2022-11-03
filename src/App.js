const MissionUtils = require("@woowacourse/mission-utils");

const makeRandomNumber = () => {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
};

const inputNumber = (targetNumber) => {
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
    throwExceptions(answer);
    guessNumber(answer, targetNumber);
  });
};

const throwExceptions = (answer) => {
  const regex = /[1-9]/;
  const zeroRegex = /[0]/;
  let splittedAnswer = answer.split("");
  let notANumberList = [];
  let isZero = false;

  if (zeroRegex.test(answer)) isZero = true;

  if (answer.length === 3 && isZero) {
    throw "숫자 0이 포함되었습니다.\n1 ~ 9로 구성된 3자리 숫자를 입력해주세요.\n게임 종료";
  }

  for (
    let splittedIdx = 0;
    splittedIdx < splittedAnswer.length;
    splittedIdx++
  ) {
    if (!regex.test(splittedAnswer[splittedIdx])) {
      notANumberList.push(splittedIdx + 1);
    }
  }

  if (notANumberList.length !== 0) {
    if (answer.length === 3) {
      throw `${notANumberList.join(
        ","
      )}번째 문자는 숫자가 아닙니다.\n1 ~ 9로 구성된 3자리 숫자를 입력해주세요.\n게임 종료`;
    }
    if (answer.length > 3) {
      throw `${notANumberList.join(",")}번째 문자는 숫자가 아니며, ${
        answer.length - 3
      }개의 문자를 더 입력하셨습니다.\n1 ~ 9로 구성된 3자리 숫자를 입력해주세요.\n게임 종료`;
    }
    if (answer.length < 3) {
      throw `${notANumberList.join(",")}번째 문자는 숫자가 아니며, ${
        3 - answer.length
      }개의 문자를 덜 입력하셨습니다.\n1 ~ 9로 구성된 3자리 숫자를 입력해주세요.\n게임 종료`;
    }
  }

  if (answer.length > 3) {
    throw `${
      answer.length - 3
    }개의 숫자를 더 입력하셨습니다.\n1 ~ 9로 구성된 3자리 숫자를 입력해주세요.\n게임 종료`;
  }
  if (answer.length < 3) {
    throw `${
      3 - answer.length
    }개의 숫자를 덜 입력하셨습니다.\n1 ~ 9로 구성된 3자리 숫자를 입력해주세요.\n게임 종료`;
  }
};
// 함수를 더 잘게 쪼개야 됨. answer 길이를 미리 판단하여 세분화한 함수로 보내는 것이 좋아보임. 지금은 if문을 전부 검사함. not good

const guessNumber = (answer, targetNumber) => {
  let userGuessedNumber;

  if (answer.length === 3) {
    userGuessedNumber = answer.split("").map((v) => +v);

    let [ball, strike] = checkBallCount(targetNumber, userGuessedNumber);
    if (strike < 3) {
      printBallCount(ball, strike);
      inputNumber(targetNumber);
    }
    if (strike == 3) {
      printBallCount(ball, strike);
      manageGame();
    }
  }
};

const checkBallCount = (targetNumber, userGuessedNumber) => {
  let ball = 0;
  let strike = 0;

  for (let number = 0; number < userGuessedNumber.length; number++) {
    if (
      targetNumber.includes(userGuessedNumber[number]) &&
      targetNumber[number] !== userGuessedNumber[number]
    ) {
      ball++;
    }
    if (
      targetNumber.includes(userGuessedNumber[number]) &&
      targetNumber[number] === userGuessedNumber[number]
    ) {
      strike++;
    }
  }
  return [ball, strike];
};

const printBallCount = (ball, strike) => {
  if (ball === 0 && strike > 0)
    MissionUtils.Console.print(`${strike}스트라이크`);
  if (strike === 0 && ball > 0) MissionUtils.Console.print(`${ball}볼`);
  if (strike > 0 && ball > 0)
    MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
  if (ball === 0 && strike === 0) MissionUtils.Console.print("낫싱");
};

const manageGame = () => {
  MissionUtils.Console.readLine(
    "3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
    (answer) => {
      if (answer == 1) {
        resetGame();
      }
      if (answer == 2) {
        exitGame();
      }
    }
  );
};

const resetGame = () => {
  app.play();
};

const exitGame = () => {
  MissionUtils.Console.print("게임 종료");
  MissionUtils.Console.close();
};

class App {
  play() {
    let target = makeRandomNumber();

    inputNumber(target);

    // checkBallCount([5, 8, 7], [1, 2, 3]);

    return;
  }
}

/** test용 코드 */
const app = new App();
app.play();

module.exports = App;
