const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    startGame();
  }
}

const startGame = () => {
  let answers = init();
  let play = true;
  checkResult(input, answers);
  while (play) {
    MissionUtils.Console.readLine("숫자를 입력하세요.", (input) => {
      if (checkInput(input)) {
        //인풋과 정답 비교하기
        if (checkResult(answers, input));
      }
    });
  }
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
  } else if (isNaN(input)) {
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
  console.log(`답은 ${answer} 입력은 ${input}`);
  let strike = 0;
  let ball = 0;
  answer.map((item, index) => {
    console.log(item);
    if (String(item) === String(input)[index]) {
      strike++;
    } else if (String(input).includes(item)) {
      ball++;
    }
  });

  printResult(ball, strike);
  if (strike === 3) {
    return true;
  } else {
    return false;
  }
};

const printResult = (ball, strike) => {
  if (ball === 0) {
    MissionUtils.Console.print(`${strike}스트라이크`);
  } else if (strike === 0) {
    MissionUtils.Console.print(`${ball}볼`);
  } else {
    MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
  }
};

const app = new App();
app.play();

module.exports = App;
