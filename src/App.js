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
      try {
        if (guessNumber.length !== 3) {
          throw new Error("예외");
        }
      } catch (e) {
        // console.log();
        // MissionUtils.Console.print(e);
        // break;
      }

      // const strike = computerNumber.filter(
      //   (num, index) => num === guessNumber[index]
      // ).length;
      let strike = 0;
      computerNumber.forEach((num, index) => {
        if (num.toString() === guessNumber[index]) strike++;
        // MissionUtils.Console.print(
        //   `num ${num}, guessNumber[index] ${guessNumber[index]}`
        // );
      });

      let ball = 0;
      computerNumber.forEach((computerNum) => {
        if (guessNumber.includes(computerNum.toString())) {
          ball++;
        }
      });
      ball -= strike;

      // MissionUtils.Console.print(`strike ${strike}, ball ${ball}`);
      if (strike > 0 && ball > 0)
        MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
      else if (strike > 0) MissionUtils.Console.print(`${strike}스트라이크`);
      else if (ball > 0) MissionUtils.Console.print(`${ball}볼`);
      else MissionUtils.Console.print(`낫싱`);

      if (strike === 3) {
        // MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        // MissionUtils.Console.print(
        // "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
        // );
        let input;
        MissionUtils.Console.readLine("", (x) => {
          input = x;
        });
        MissionUtils.Console.close();
        // MissionUtils.Console.print(`input ${input}`);

        if (input.toString() === "2") {
          MissionUtils.Console.print(`게임 종료`);
          break;
        } else {
          computerNumber = getRandomNumber();
          // MissionUtils.Console.print(`computerNumber ${computerNumber}`);
        }
        // break;
      }
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
