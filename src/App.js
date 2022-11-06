const MissionUtils = require("@woowacourse/mission-utils");

const generateComRandom = () => {
  const COMPUTER = [];
  while (COMPUTER.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!COMPUTER.includes(number)) {
      COMPUTER.push(number);
    }
  }
  return COMPUTER;
};
let COMPUTER = generateComRandom();
class App {
  play() {
    this.showMessage();
    this.userInput();
    COMPUTER = generateComRandom();
  }
  allInOne() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    // 컴퓨터 랜덤
    const computerRandom = () => {
      const COMPUTER = [];
      while (COMPUTER.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!COMPUTER.includes(number)) {
          COMPUTER.push(number);
        }
      }
      return COMPUTER;
    };
    // 사용자 입력후 검사
    const userInput = () => {
      let userNumberArray = [];
      MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (userNumber) => {
        let regex = /[^1-9]/g;
        const userNumberLen = userNumber.length;
        if (regex.test(userNumber) || userNumberLen !== 3) {
          throw "1~9 사이의 숫자 3개만 입력해주세요 프로그램이 종료됩니다.";
        }
        let stringUserNumber = userNumber.split("");

        stringUserNumber.forEach((element) =>
          userNumberArray.push(Number(element))
        );
      });
      return userNumberArray;
    };
    // 값 비교

    const COMPUTERNUMBER = computerRandom();
    let strike = 0;
    let ball = 0;
    console.log("컴퓨터: ", COMPUTERNUMBER);
    const USERNUMBER = userInput();
    console.log("사용자 :", USERNUMBER);
    for (let idx = 0; idx < USERNUMBER.length; idx++) {
      let findIndex = COMPUTERNUMBER.indexOf(USERNUMBER[idx]);
      console.log(findIndex);
      if (findIndex > -1) {
        if (findIndex === idx) {
          strike++;
        } else {
          ball++;
        }
      }
      console.log(strike, ball);
    }
    if (strike !== 3) {
      console.log("qws");
    }

    // 게임 다시시작
    if (strike == 3) {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      MissionUtils.Console.readLine(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
        (gameSetNumber) => {
          try {
            if (gameSetNumber === 1) {
            } else if (gameSetNumber === 2) {
              throw "";
            } else {
              throw "1,2가 아닌 값을 입력하셨습니다. 프로그램이 종료됩니다.";
            }
          } catch (e) {
            console.log(e);
          }
        }
      );
    }
  }

  showMessage() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  userInput() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (userNumber) => {
      this.checkUserInputValue(userNumber);
    });
  }

  checkUserInputValue(userNumber) {
    let regex = /[^1-9]/g;
    const userNumberLen = userNumber.length;
    if (regex.test(userNumber) || userNumberLen !== 3) {
      throw "1~9 사이의 숫자 3개만 입력해주세요 프로그램이 종료됩니다.";
    }
    let stringUserNumber = userNumber.split("").map((element) => {
      return Number(element);
    });
    let userNumberArray = [];
    stringUserNumber.forEach((element) => {
      if (!userNumberArray.includes(element)) {
        userNumberArray.push(Number(element));
      } else {
        console.log("중복된 수가 있습니다. 다시 입력하세요!");
        this.userInput();
      }
    });
    this.getBothArrays(userNumberArray);
  }
  computerRandomNumber() {}
  getBothArrays(userNumberArray) {
    let userArray = userNumberArray;
    this.compareNumbers(userArray);
  }

  compareNumbers(userNumberArray) {
    console.log("사용자 :", userNumberArray);
    console.log("컴퓨터: ", COMPUTER);
    let strike = 0;
    let ball = 0;
    for (let idx = 0; idx < userNumberArray?.length; idx++) {
      let findIndex = COMPUTER.indexOf(userNumberArray[idx]);
      if (findIndex > -1) {
        if (findIndex === idx) {
          strike++;
        } else {
          ball++;
        }
      }
    }
    MissionUtils.Console.print(`스트라이크 : ${strike} 볼 : ${ball}`);
    if (strike === 3) {
      this.gameReplay();
    }
    this.userInput();
  }

  checkStrikeBall() {}

  closeConsole() {
    MissionUtils.Console.close();
  }
  gameReplay() {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (gameSetNumber) => {
        if (gameSetNumber === "1") {
          this.play();
        } else if (gameSetNumber === "2") {
          throw "게임을 종료합니다";
        } else {
          throw "1,2가 아닌 입력 발생! 프로그램 종료!";
        }
      }
    );
  }
}

const app = new App();
app.play();
module.exports = App;
