const MissionUtils = require("@woowacourse/mission-utils");

class App {
  
  getInputNumber() {
    let userNum;
    MissionUtils.Cosole.readLine("숫자를 입력해주세요 :", (number) => {
      userNum = String(number).split("");
    });
  }

  getComputerNumber() {
    const computerNum = [];
    while (computerNum.length < 3) { 
      let num = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNum.includes(num)) {
        computerNum.push(num);ㅇ
      }
    }
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    
  }

  checkStrike(computerNum, userNum) {
    let strikeScore = 0;

    for (let i = 0; i < 3; i++) {
      if (computerNum[i] == userNum[i]) {
        strikeScore += 1;
      }
      return strikeScore;
    }
  }

  checkBall(computerNum, userNum) {
    let ballScore = 0;

    const intersect = computerNum.filter(x => userNum(x));
    let countIntersect = intersect.length;
    ballScore = countIntersect - strikeScore;
  }

  while (computerNum == userNum) {
    
  }
}

module.exports = App;
