const MissionUtils = require("@woowacourse/mission-utils");

function checkAnswer(input) {}

function getAnswer() {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }

  return computer;
}

function play() {
  const answerNumber = getAnswer();
  console.log("숫자 야구 게임을 시작합니다.");
  console.log(answerNumber);
  df;
}

play();
getAnswer();
// class App {
//   play() {}
// }

// module.exports = App;
