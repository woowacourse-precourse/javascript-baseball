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

      if (strike === 0 && ball === 0) MissionUtils.Console.print(`낫싱`);
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
