const MissionUtils = require("@woowacourse/mission-utils");

let CORRECT_NUMBER = [];

function makeCorrectNumber() {
  CORRECT_NUMBER = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
}

let ANSWER_NUMBER = [];

function putNumber() {
  MissionUtils.Console.readLine("숫자를 입력해주세요 :", (answer) => {
    ANSWER_NUMBER = answer.split("").map(Number);
    comparingNumber();
  });
}

function comparingNumber() {
  if (JSON.stringify(ANSWER_NUMBER) === JSON.stringify(CORRECT_NUMBER)) {
    MissionUtils.Console.print("3스트라이크");
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    gameWin();
  } else {
    notWin();
  }
}

function gameWin() {
  MissionUtils.Console.readLine(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
    (answer) => {
      if (answer === "1") {
        makeCorrectNumber();
        console.log(CORRECT_NUMBER);
        putNumber();
      } else {
        return;
      }
    }
  );
}

function notWin() {
  let STRIKE_NUMBER = [];
  let BALL_NUMBER = [];

  ANSWER_NUMBER.map((el, index) => {
    if (ANSWER_NUMBER[index] === CORRECT_NUMBER[index]) {
      STRIKE_NUMBER.push(el);
    } else if (
      CORRECT_NUMBER.filter((el) => el !== CORRECT_NUMBER[index]).includes(el)
    ) {
      BALL_NUMBER.push(el);
    }
  });

  if (STRIKE_NUMBER.length === 0 && BALL_NUMBER.length === 0) {
    MissionUtils.Console.print("낫싱");
  } else if (STRIKE_NUMBER.length !== 0 && BALL_NUMBER.length === 0) {
    MissionUtils.Console.print(`${STRIKE_NUMBER.length} 스트라이트`);
  } else if (STRIKE_NUMBER.length == 0 && BALL_NUMBER.length !== 0) {
    MissionUtils.Console.print(`${BALL_NUMBER.length} 볼`);
  } else {
    MissionUtils.Console.print(
      `${BALL_NUMBER.length} 볼 ${STRIKE_NUMBER.length} 스트라이트`
    );
  }
  STRIKE_NUMBER = [];
  BALL_NUMBER = [];
  putNumber();
}

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    makeCorrectNumber();
    console.log(CORRECT_NUMBER);
    putNumber();
  }
}

const app = new App();
app.play();

module.exports = App;

// node src/App.js
