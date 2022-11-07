const MissionUtils = require("@woowacourse/mission-utils");
let landomNum = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3).join("");
let userAnswer;
console.log(landomNum);
let answer = false;
function judgeSame() {
  // 숫자를 맞출 경우
  if (landomNum == userAnswer) {
    MissionUtils.Console.print("3스트라이크");
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    answer = true;
    gameAgain();
  }
}

const countNum = (target, input) => {
  let [strike, ball] = [0, 0];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === target[i]) {
      // 자리수와 현재 값이 같으면
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
    } else if (ball === 0) {
      res = `${strike}스트라이크`;
    } else {
      res = `${ball}볼 ${strike}스트라이크`;
    }
  }
  MissionUtils.Console.print(res);
};

let question = function () {
  MissionUtils.Console.readLine("숫자를 입력해주세요.", (answer) => {
    userAnswer = answer;
    // console.log(typeof userAnswer);
    compareNums(landomNum, userAnswer);
    judgeSame();
    if (answer === false) {
      question();
    }
  });
};
function gameAgain() {
  MissionUtils.Console.readLine(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
    (answer) => {
      if (answer == 1) {
        landomNum = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3).join(
          ""
        );
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
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    question();
  }
}

// const app = new App();
// app.play();

module.exports = App;
