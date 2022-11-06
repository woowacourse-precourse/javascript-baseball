const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    // MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    let computerNumber = getRandomNumber();
    let guessNumber;
    while (true) {
      // MissionUtils.Console.print("숫자를 입력해주세요 : ");
      MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (x) => {
        guessNumber = x;
      });
      guessNumber = guessNumber.split("");
      // MissionUtils.Console.print(
      //   `guessNumber는 ${guessNumber}, computerNumber는 ${computerNumber}`
      // );
      MissionUtils.Console.close();
    }
  }
}

const getRandomNumber = () => {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) computer.push(number);
  }
  return computer;
};

module.exports = App;
