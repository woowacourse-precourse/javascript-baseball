const MissionUtils = require("@woowacourse/mission-utils");
MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
let landomNum;
function makeComputerNum() {
  let computerNum = [];

  for (let digit = 0; digit < 3; digit++) {
    landomNum = MissionUtils.Random.pickNumberInRange(1, 9);
    while (computerNum.includes(landomNum) === true) {
      landomNum = MissionUtils.Random.pickNumberInRange(1, 9);
    }
    computerNum.push(landomNum);
  }
  landomNum = computerNum.join("");
}

let userAnswer;
console.log(landomNum);
let answerOk = false;

const countNum = (target, input) => {
  let [strike, ball] = [0, 0];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === target[i]) {
      // 자리수와 현재 값 비교
      strike++;
    } else if (target.includes(input[i])) {
      ball++;
    }
  }
  return [strike, ball];
};
const compareNums = (target, input) => {
  let res = "낫싱";
  let [strike, ball] = countNum(target, input);

  if (!(strike === 0 && ball === 0)) {
    if (strike === 0) {
      res = `${ball}볼`;
      MissionUtils.Console.print(res);
    } else if (ball === 0) {
      res = `${strike}스트라이크`;
      if (strike === 3) {
        MissionUtils.Console.print(`${strike}스트라이크`);
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        answerOk = true;
      } else {
        MissionUtils.Console.print(`${strike}스트라이크`);
      }
    } else {
      res = `${ball}볼 ${strike}스트라이크`;
      MissionUtils.Console.print(res);
    }
  } else {
    MissionUtils.Console.print(res);
  }
};

function answerCheck(userAnswer) {
  compareNums(landomNum, userAnswer);
  if (answerOk === false) {
    question();
  } else {
    gameAgain();
  }
}

function question() {
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
    if (
      isNaN(parseInt(answer)) ||
      parseInt(answer).toString().length !== answer.length
    ) {
      throw new Error("문자를 제외한 숫자만을 입력해주세요");
    }
    let answerArr = answer.split("");
    let duplication = answerArr.filter((value, index) => {
      return index !== answerArr.indexOf(value);
    });
    if (duplication.length !== 0) {
      throw new Error("입력한 숫자값에 중복이 있습니다");
    }
    userAnswer = answer;
    if (answer.length !== 3) {
      throw new Error("숫자가 세글자가 아닙니다");
    } else {
      answerCheck(userAnswer);
    }
  });
}

function gameAgain() {
  MissionUtils.Console.readLine(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
    (answer) => {
      if (answer == 1) {
        answerOk = false;
        app.play();
      }
      if (answer == 2) {
        MissionUtils.Console.close();
      }
    }
  );
}

class App {
  play() {
    makeComputerNum();
    question();
  }
}

const app = new App();
app.play();

module.exports = App;
