const { Console } = require("@woowacourse/mission-utils");

class Checker {
  checkCorrect(targetNum, userNum) {
    if (targetNum === userNum) {
      Console.print("3스트라이크");
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      return true;
    }

    const [strike, ball] = this.checkStrikeAndBall(targetNum, userNum);
  }

  checkStrikeAndBall(targetNum, userNum) {
    let strike = 0;
    let ball = 0;
    [...targetNum].forEach((n, i) => {
      if (n === userNum[i]) {
        strike++;
        ball--;
      }
      if (userNum.includes(n)) ball++;
    });
    return [strike, ball];
  }
}

module.exports = Checker;
