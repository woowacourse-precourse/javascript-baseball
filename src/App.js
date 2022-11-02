const MissionUtils = require("@woowacourse/mission-utils");
const wRandom = MissionUtils.Random;
const wConsole = MissionUtils.Console;

class App {
  play() {
    let baseLine = null;
    function setBaseLine() {
      baseLine = new Set();
      while (baseLine.size < 3) {
        baseLine.add(wRandom.pickNumberInRange(1, 9));
      }
      baseLine = Array.from(baseLine);
    }
    setBaseLine();
    wConsole.print("숫자 야구 게임을 시작합니다.");

    function inputToTestData(input) {
      if (input.length != 3) throw new Error();
      let data = input.split("").map((num) => {
        if (isNaN(num)) throw new Error();
        return parseInt(num);
      });
      if (new Set(data).size != 3) throw new Error();
      return data;
    }

    function compare(testCase) {
      let ball = 0;
      let strike = 0;
      testCase.map((num, i) => {
        if (baseLine.includes(num)) {
          baseLine[i] === num ? strike++ : ball++;
        }
      });
      let text = "";
      if (ball != 0) text += `${ball}볼`;
      if (strike != 0) text += `${text != "" ? " " : ""}${strike}스트라이크`;
      if (text === "") text = "낫싱";
      wConsole.print(text);
      return strike === 3;
    }

    function progress() {
      wConsole.readLine("숫자를 입력해주세요. : ", (input) => {
        const testCase = inputToTestData(input);
        const end = compare(testCase);
        nextProgress(end);
      });
    }
    
    function nextProgress(end) {
      if (end) {
        wConsole.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        continueQuestion();
      } else {
        progress();
      }
    }

    function continueQuestion() {
      wConsole.readLine(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
        (input) => {
          continueAnswer(input);
        }
      );
    }

    
    function continueAnswer(input) {
      switch (input) {
        case "1":
          setBaseLine();
          progress();
          break;
        case "2":
          break;
        default:
          throw new Error();
      }
    }
    
    try {
      progress();
    } catch (error) {
      throw new Error();
    }
  }
}

module.exports = App;
