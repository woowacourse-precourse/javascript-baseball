const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

const app = new App();

// app.play();

function displayResult(result) {
  if (result[1] > 0 && result[0] > 0) {
    MissionUtils.Console.print(result[1] + "볼 " + result[0] + "스트라이크");
  } else if (result[0] > 0) {
    MissionUtils.Console.print(result[0] + "스트라이크");
  } else if (result[1] > 0) {
    MissionUtils.Console.print(result[1] + "볼 ");
  } else {
    MissionUtils.Console.print("낫싱");
  }
}

displayResult([0, 0]);
