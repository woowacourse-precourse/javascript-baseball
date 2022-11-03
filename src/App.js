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
  let isCorrect = false; //예외처리를 위한 boolean
  // console.log(targetNumber); // 테스트 중 보이게 하기 위함. 이후 필히 삭제

  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
    guessNumber(answer, targetNumber);
  });
  return isCorrect;
};

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
