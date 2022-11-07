const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.computorInput = [];
    this.userInput = [];
  }
  play() {
    this.computorInput = this.selectNumber();

    // let score = [0, 0]; // [볼, 스트라이크]
  }

  selectNumber() {
    let num_candidate = MissionUtils.Random.pickNumberInRange(100, 999);
    num_candidate = num_candidate.toString();
    if (
      num_candidate[0] !== num_candidate[1] &&
      num_candidate[1] !== num_candidate[2] &&
      num_candidate[2] !== num_candidate[0]
    ) {
      let answer = num_candidate;
      return answer;
    } else {
      selectNumber();
    }
  }

  isStrike() {
    for (let i = 0; i < 3; i++) {
      if (userNum[i] === answer[i]) {
        score[1] += 1;
      } else {
        isBall(i);
      }
    }
  }

  isBall(i) {
    if (i === 0) {
      if (userNum[i] === answer[1] || userNum[i] === answer[2]) {
        score[0] += 1;
      }
    } else if (i === 1) {
      if (userNum[i] === answer[2] || userNum[i] === answer[0]) {
        score[0] += 1;
      }
    } else if (i === 2) {
      if (userNum[i] === answer[0] || userNum[i] === answer[1]) {
        score[0] += 1;
      }
    }
  }

  getResult() {
    if (score[0] === 0 && score[1] === 0) {
      let result = "낫싱";
      console.log(result);
    } else if (score[1] === 3) {
      let result = "3개의 숫자를 모두 맞히셨습니다! 게임 종료";
      console.log(result);
    } else {
      let result = `${score[0]}볼 ${score[1]}스트라이크`;
      console.log(result);
    }
  }
}

// module.exports = App;

let game = new App();

game.play();
