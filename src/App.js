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
  let isCorrect = false;
  console.log(targetNumber);

  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
    let guessNumber;

    if (answer.length === 3) {
      guessNumber = answer.split("").map((v) => +v);
      let [ball, strike] = checkBallCount(targetNumber, guessNumber);
      if (strike < 3) inputNumber(targetNumber);
      if (strike == 3) {
        MissionUtils.Console.print(
          "3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
        );
        /**
         * reset game 함수 분리
         */
      }
    }

    // 재경기 & 종료
    if (answer == 1) {
      app.play();
    }
    if (answer == 2) {
      MissionUtils.Console.close();
    }
  });
  return isCorrect;
};

const checkBallCount = (targetNumber, guessNumber) => {
  let ball = 0;
  let strike = 0;

  for (let number = 0; number < guessNumber.length; number++) {
    if (
      targetNumber.includes(guessNumber[number]) &&
      targetNumber[number] !== guessNumber[number]
    ) {
      ball++;
    }
    if (
      targetNumber.includes(guessNumber[number]) &&
      targetNumber[number] === guessNumber[number]
    ) {
      strike++;
    }
  }

  return [ball, strike];
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
