const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {}

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    const computer = this.getComputerInput();
    this.getUserInput(computer);
  }

  getUserInput(computer) {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (userValue) => {
      const isUserInputValid = this.detectError(userValue);

      if (isUserInputValid) { this.compareUserAndComputer(userValue, computer); }
    });
  }

  compareUserAndComputer(userValue, computer) {
    const [strike, ball] = this.getStrikeAndBall(userValue, computer);
    if (this.isStrikeOut(strike, ball)) {
      this.reGameQuestion();
    } else {
      this.getUserInput(computer);
    }
  }

  getStrikeAndBall(user, computer) {
    user = [...user];
    computer = [...computer];

    let idx = 0;
    let strike = 0;
    let ball = 0;
    user.forEach((element) => {
      if ( computer.includes(element) && element === computer[idx] ) { strike += 1}
      else if (computer.includes(element) && element !== computer[idx] ) { ball += 1}
      idx += 1;
    });
    return [strike, ball];
  }

  reGameQuestion() {
    MissionUtils.Console.readLine( "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n", (userValue) => {
      this.reGame(userValue);
    });
  }

  reGame(userValue) {
    if (userValue === "1") {
      const computer = this.getComputerInput();
      this.getUserInput(computer);
    } 
    else if (userValue === "2") {
      MissionUtils.Console.close();
    } 
    else {
      throw new Error("유효하지 않은 값이 입력되었습니다.");
    }
  }

  detectError(user) {
    user = this.removeRepeated(user);

    if (this.detectStringError(user)) {
      if (user.length !== 3) {
        throw new Error("유효하지 않은 값이 입력되었습니다.");
      }
    }
    return 1;
  }

  detectStringError(user) {
    user = [...user];
    user.forEach((element) => {
      if (!(element >= "1" && element <= "9")) {
        throw new Error("유효하지 않은 값이 입력되었습니다.");
      }
    });
    return 1;
  }

  removeRepeated(user) {
    const set = new Set([...user]);
    user = [...set];
    return user;
  }

  getComputerInput() {
    const computerInput = [];
    while (computerInput.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerInput.includes(randomNumber)) {
        computerInput.push(randomNumber);
      }
    }
    return computerInput.join("");
  }

  isStrikeOut(strike, ball) {
    if (strike === 0 && ball === 0) {
      MissionUtils.Console.print("낫싱");
    }
    if (strike === 1 && ball === 0) {
      MissionUtils.Console.print("1스트라이크");
    }
    if (strike === 2 && ball === 0) {
      MissionUtils.Console.print("2스트라이크");
    }
    if (strike === 3 && ball === 0) {
      MissionUtils.Console.print("3스트라이크");
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      return 1;
    }
    if (strike === 0 && ball === 1) {
      MissionUtils.Console.print("1볼");
    }
    if (strike === 0 && ball === 2) {
      MissionUtils.Console.print("2볼");
    }
    if (strike === 1 && ball === 1) {
      MissionUtils.Console.print("1볼 1스트라이크");
    }
    if (strike === 1 && ball === 2) {
      MissionUtils.Console.print("2볼 1스트라이크");
    }

    return 0;
  }
}

const game = new App();
game.play();

module.exports = App;
