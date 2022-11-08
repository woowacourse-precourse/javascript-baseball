function App() {
  const MissionUtils = require("@woowacourse/mission-utils");
  // const checkIsValid = require("./CheckIsValid");
  // const askReplay = require("./AskReplay");
  this.play = () => {
    const TARGET = +MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3).join(
      ""
    );
    // console.log(TARGET);

    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    guess();

    function guess() {
      const MissionUtils = require("@woowacourse/mission-utils");
      MissionUtils.Console.readLine("숫자를 입력해주세요.", (n) => {
        const isValid = checkIsValid(TARGET, n);
        checkInput(n);
        if (!isValid) {
          guess();
        } else {
          askReplay();
        }
      });
    }

    const askReplay = () => {
      const MissionUtils = require("@woowacourse/mission-utils");
      MissionUtils.Console.readLine(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
        (n) => {
          if (+n === 1) {
            guess();
          } else {
            MissionUtils.Console.print("게임 종료");
            MissionUtils.Console.close();
            return;
          }
        }
      );
    };

    function checkInput(input) {
      input = +input;
      if (input.toString().length !== 3 && (input !== 1 || input !== 2)) {
        throw "Error";
      } else if (input < 0 || input > 999) {
        throw "Error";
      } else if (isNaN(input)) {
        throw "Error";
      }
    }

    function displayResult([strike, ball, nothing]) {
      const MissionUtils = require("@woowacourse/mission-utils");
      if (strike === 3) {
        MissionUtils.Console.print("3스트라이크");
        MissionUtils.Console.print(
          "3개의 숫자를 모두 맞히셨습니다! 게임 종료."
        );
      } else {
        let string = "";
        if (ball) string = string + `${ball}볼 `;
        if (strike) string = string + `${strike}스트라이크 `;
        if (nothing && !ball && !strike) string = string + "낫싱 ";
        MissionUtils.Console.print(string);
      }
    }

    function checkIsValid(input, TARGET) {
      TARGET = TARGET.toString();
      input = input.toString();
      let [strike, ball, nothing] = [0, 0, 0];

      for (let i = 0; i < TARGET.length; i++) {
        if (TARGET[i] === input[i]) {
          strike++;
        } else if (TARGET.includes(input[i])) {
          ball++;
        } else {
          nothing++;
        }
      }

      displayResult([strike, ball, nothing]);

      if (strike === 3) {
        return true;
      } else {
        return false;
      }
    }
  };
}

const app = new App();

app.play();

module.exports = App;
