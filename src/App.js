const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    const randomNumber = this.getRandomNumber();

    this.round(randomNumber);
  }

  getRandomNumber() {
    const computer = [];

    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    return computer;
  }

  round() {
    return MissionUtils.Console.readLine("숫자를 입력해주세요: ", (answer) => {
      if (
        answer.length !== 3 ||
        isNaN(Number(answer)) ||
        !this.checkDuplicate(answer)
      ) {
        throw new Error("잘못된 값을 입력하여 게임을 종료합니다.");
      }
      // 컴퓨터 입력값과 사용자가 입력한 답을 확인하는 함수
    });
  }

  checkDuplicate(num) {
    const set = new Set();

    for (let el of num) {
      set.add(el);
    }

    if (set.size === 3) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = App;
