class App {
  play() {
    const MissionUtils = require("@woowacourse/mission-utils");

    console.log("숫자 야구 게임을 시작합니다.");

    // 1. 컴퓨터 : 1부터 9까지 서로 다른 수로 이루어진 3자리의 수를 뽑기
    let answer = 0;
    selectNumber();
    console.log("answer:", answer);

    function selectNumber() {
      let num_candidate = MissionUtils.Random.pickNumberInRange(100, 999);
      num_candidate = num_candidate.toString();
      if (
        num_candidate[0] !== num_candidate[1] &&
        num_candidate[1] !== num_candidate[2] &&
        num_candidate[2] !== num_candidate[0]
      ) {
        answer = num_candidate;
        return answer;
      } else {
        selectNumber();
      }
    }
  }
}

module.exports = App;

let game = new App();

game.play();
