const MissionUtils = require("@woowacourse/mission-utils");


class App {

  constructor () {}

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    let user = this.getUserInput();
    let computer = this.getComputerInput();

    while (user) {
      if(this.isStrikeOut(user, computer)) {
        MissionUtils.Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
        user = this.getUserInput("restart"); // 1 or 2를 받을예정.

        if (user === '1') {
          MissionUtils.Console.print(`${user}`);
          MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
          user = this.getUserInput();
          computer = this.getComputerInput();
          continue;
        }

        if (user === '2') {
          MissionUtils.Console.print(`${user}`);
          MissionUtils.Console.print("게임 종료");
          MissionUtils.Console.close();
          break;
        }
        throw new Error("유효하지 않은 값이 입력되었습니다. 종료오류");
      }

      else{
        user = this.getUserInput();
        continue;
      }
    }
  }

  detectError(user) {
    if(this.detectStringError(user)) {
      if (user.length != 3) {
        throw new Error("유효하지 않은 값이 입력되었습니다.");
      }
    }
  }
  detectStringError(user) {
    user = [...user];
    user.forEach(element => {
      if (!(element >= '1' && element <= '9')) { 
        throw new Error("유효하지 않은 값이 입력되었습니다."); 
      }
    });
    return 1;
  }

  getUserInput(gameStatus = "normal") {
    // status가 1인 상황 기본적인 상황, 0인 상황은 게임이 다 끝나고 1,2를 받을때.
    let userAnswer;
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (userValue) => {
      if (userValue) {
        userAnswer = userValue;
      }
    }); 

    if (gameStatus === "normal") {
      this.detectError(userAnswer);
      MissionUtils.Console.print(`${userAnswer}`);
    }
    return userAnswer;

  };

  getComputerInput() {
    let computerInput = [];
    while (computerInput.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1,9);
      if (!computerInput.includes(randomNumber)) {
        computerInput.push(randomNumber);
      }
    }
    return computerInput.join("");
  }

  compareUserAndComputer(user, computer) {
    user = [...user];
    computer = [...computer];
    let i = 0;
    let strike = 0;
    let ball = 0;
    user.forEach(element => {
      if (computer.includes(element)){
        if (element === computer[i]) { strike += 1 }
        else { ball += 1}
      }
      i += 1;
    });
  
    return [strike, ball];
  }
  
  isStrikeOut(user, computer) {
    let [strike, ball] = this.compareUserAndComputer(user, computer);
  
    if (strike === 0 && ball === 0) { MissionUtils.Console.print("낫싱")};
    if (strike === 1 && ball === 0) { MissionUtils.Console.print("1스트라이크")};
    if (strike === 2 && ball === 0) { MissionUtils.Console.print("2스트라이크")};
    if (strike === 3 && ball === 0) { 
      MissionUtils.Console.print("3스트라이크");
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      return 1;
    };
    if (strike === 0 && ball === 1) { MissionUtils.Console.print("1볼")};
    if (strike === 0 && ball === 2) { MissionUtils.Console.print("2볼")};
    if (strike === 1 && ball === 1) { MissionUtils.Console.print("1볼 1스트라이크")};
    if (strike === 1 && ball === 2) { MissionUtils.Console.print("2볼 1스트라이크")};
  
  
    return 0;
  }

  
}

module.exports = App;
