const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    startGame();
    askRetry();
  }
}

const startGame = () => {
  let answers = init();
  let play = true;

  while (play) {
    MissionUtils.Console.readLine("숫자를 입력하세요.", (input) => {
      if (checkInput(input)) {
        //인풋과 정답 비교하기
        play = checkResult(input, answers);
        console.log("play: ", play);
      } else {
        throw "입력되는 숫자는 서로 다른 3자리이어야 합니다.";
      }
    });
  }
};

const askRetry = () => {
  MissionUtils.Console.readLine(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
    (answer) => {
      if (answer === "1") {
        startGame();
      } else if (answer === "2") {
        return;
      } else {
        throw "게임을 시작하거나 종료하려면 1 또는 2를 입력해야 합니다.";
      }
    }
  );
};

const init = () => {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
};

const checkInput = (input) => {
  let str = String(input);
  if (str.length !== 3) {
    return false;
  }
  for (let i = 0; i < str.length; i++) {
    if (i !== str.indexOf(str[i])) {
      return false;
    }
  }
  return true;
};

const checkResult = (input, answer) => {
  let strike = 0;
  let ball = 0;
  answer.map((item, index) => {
    if (String(item) === String(input)[index]) {
      strike++;
    } else if (String(input).includes(item)) {
      ball++;
    }
  });
  printResult(ball, strike);
  if (strike === 3) {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    return false;
  } else {
    return true;
  }
};

const printResult = (ball, strike) => {
  if (ball === 0 && strike !== 0) {
    MissionUtils.Console.print(`${strike}스트라이크`);
  } else if (strike === 0 && ball !== 0) {
    MissionUtils.Console.print(`${ball}볼`);
  } else if (ball === 0 && strike === 0) {
    MissionUtils.Console.print("낫싱");
  } else {
    MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
  }
};

module.exports = App;
