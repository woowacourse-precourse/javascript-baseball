const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    function playGame() {
      MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (userNumber) => {
        function makeRandomNumber() {
          let randomNumber = "";
          for (let i = 0; i < 3; i++) {
            randomNumber += MissionUtils.Random.pickNumberInRange(1, 9);
          }
          return randomNumber;
        }
        const randomNumber = makeRandomNumber();
        checkCount(randomNumber, userNumber);
      });
    }

    function replay(strikeCount, ballCount, randomNumber) {
      if (strikeCount !== 0 && ballCount !== 0) {
        MissionUtils.Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
      }
      if (strikeCount === 0 && ballCount !== 0) {
        MissionUtils.Console.print(`${ballCount}볼`);
      }
      if (strikeCount !== 0 && ballCount === 0) {
        MissionUtils.Console.print(`${strikeCount}스트라이크`);
      }
      if (strikeCount === 0 && ballCount === 0) {
        MissionUtils.Console.print("낫싱");
      }
      if (strikeCount === 3) {
        return MissionUtils.Console.readLine(
          "3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
          (answer) => {
            if (answer === "1") return playGame();
            return MissionUtils.Console.print("게임 종료");
          }
        );
      }
      MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (userNumber) => {
        checkCount(randomNumber, userNumber);
      });
    }

    function checkCount(randomNumber, userNumber) {
      let strikeCount = 0;
      let ballCount = 0;
      const strUserNum = userNumber.toString();
      const strRandomNum = randomNumber.toString();
      if (strUserNum.length !== 3) {
        throw new Error("세 자리 숫자를 입력해주세요.");
      }
      if (isNaN(userNumber) === true) {
        throw new Error("숫자를 입력해주세요.");
      }
      if (userNumber <= 0) {
        throw new Error("0과 음수를 제외한 숫자를 입력해주세요.");
      }
      for (let i = 0; i < strRandomNum.length; i++) {
        if (strRandomNum[i] === strUserNum[i]) {
          strikeCount++;
        } else if (strUserNum.indexOf(strRandomNum[i]) !== -1) {
          ballCount++;
        }
      }
      replay(strikeCount, ballCount, randomNumber);
    }

    playGame();
  }
}

const app = new App();

app.play();

module.exports = App;
