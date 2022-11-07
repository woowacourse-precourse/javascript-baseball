const MissionUtils = require("@woowacourse/mission-utils");

const GAMEFLAG_CONTINUE = 0;
const GAMEFLAG_START = 1;
const GAMEFLAG_END = 2;

class App {
  print(message) {
    MissionUtils.Console.print(message);
  }
  printStartMsg() {
    this.print("숫자 야구 게임을 시작합니다.");
  }
  pickSingleDigit() {
    return MissionUtils.Random.pickNumberInRange(1, 9);
  }
  pickComputerNum() {
    let computerNum = [];
    let num;
    for (let digit = 0; digit < 3; digit++) {
      num = this.pickSingleDigit();
      while (computerNum.includes(num) === true) {
        num = this.pickSingleDigit();
      }
      computerNum.push(num);
    }
    return computerNum.join("");
  }
  getUserNum() {
    let userNum;
    MissionUtils.Console.readLine("숫자를 입력해주세요 :", (answer) => {
      let validatedAnswer = this.validateUserNum(answer); // answer validation
      userNum = validatedAnswer;
      // this.print(`숫자를 입력해주세요 : ${validatedAnswer}`);
    });
    return userNum;
  }
  validateUserNum(answer) {
    let trimedanswer = this.deleteSpace(answer);
    if (trimedanswer.length === 0) {
      throw new Error("숫자를 입력해주세요");
    } else if (isNaN(parseInt(trimedanswer))) {
      throw new Error("문자를 제외한 숫자만을 입력해주세요");
    } else if (trimedanswer.length !== 3) {
      throw new Error("입력한 숫자가 3 자리가 아닙니다");
    }
    let answerArr = trimedanswer.split("");
    let duplicates = answerArr.filter((value, index) => {
      return index !== answerArr.indexOf(value);
    });
    if (duplicates.length !== 0) {
      throw new Error("입력한 숫자에 중복된 숫자가 존재합니다");
    }
    return trimedanswer;
  }
  deleteSpace(string) {
    let trimedString;
    string.trim(); // delete space outside of string
    let regex = / /gi;
    trimedString = string.replace(regex, ""); // delete space inside of string
    return trimedString;
  }
  createResult(computer, user) {
    const { strike, ball } = this.compareNums(computer, user);
    const resultSring = this.printResult(strike, ball);
    return this.updateGameFlag(resultSring);
  }
  updateGameFlag(resultSring) {
    let gameFlag = GAMEFLAG_CONTINUE;
    if (resultSring === "3스트라이크") {
      this.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
      gameFlag = this.getUserGameFlag();
    }
    return gameFlag;
  }
  getUserGameFlag() {
    let gameFlag;
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (answer) => {
        let validatedAnswer = this.validateRestartNum(answer); //answer validation
        // this.print(`${validatedAnswer}`);
        gameFlag = parseInt(validatedAnswer);
      }
    );
    return gameFlag;
  }
  validateRestartNum(answer) {
    let trimedanswer = this.deleteSpace(answer);
    if (
      !(
        trimedanswer === GAMEFLAG_START.toString() ||
        trimedanswer === GAMEFLAG_END.toString()
      )
    ) {
      throw new Error("1 과 2 중 하나를 입력해주세요");
    }
    return trimedanswer;
  }
  compareNums(computer, user) {
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < user.length; i++) {
      if (user[i] === computer[i]) {
        strike++;
      } else if (computer.includes(user[i])) {
        ball++;
      }
    }
    return { strike, ball };
  }
  printResult(strike, ball) {
    let resultSring = "";
    if (ball !== 0) {
      resultSring += `${ball}볼 `;
    }
    if (strike !== 0) {
      resultSring += `${strike}스트라이크`;
    }
    if (ball === 0 && strike === 0) {
      resultSring = "낫싱";
    }
    this.print(resultSring);
    return resultSring;
  }
  play() {
    this.printStartMsg();
    let gameFlag = GAMEFLAG_START; // 0: continue 1: start, 2: end
    let computerNum;
    let userNum;
    while (gameFlag === GAMEFLAG_START) {
      computerNum = this.pickComputerNum();
      gameFlag = GAMEFLAG_CONTINUE;
      while (gameFlag === GAMEFLAG_CONTINUE) {
        userNum = this.getUserNum();
        gameFlag = this.createResult(computerNum, userNum);
      }
    }
    MissionUtils.Console.close();
  }
}

module.exports = App;
