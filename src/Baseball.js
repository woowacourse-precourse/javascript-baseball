const { Console } = require("@woowacourse/mission-utils");
const Computer = require("./Computer");

class Baseball {
  constructor() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.computerNumberSet = new Computer().pickRandomNumberSet();
  }
  getScore(computerNumberSet, userNumberSet) {
    let strike = 0;
    let ball = 0;

    userNumberSet.forEach((number, idx) => {
      if (number === computerNumberSet[idx]) strike++;
      else if (
        number !== computerNumberSet[idx] &&
        computerNumberSet.includes(number)
      )
        ball++;
    });
    return [strike, ball];
  }

  playGame() {
    Console.readLine("숫자를 입력해주세요 : ", (userNumber) => {
      exception(userNumber);
      userNumber = new User().getUserArray(userNumber);

      const [strike, ball] = this.getScore(this.computerNumberSet, userNumber);
    });
  }
}

module.exports = Baseball;
