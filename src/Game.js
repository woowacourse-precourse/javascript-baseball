const MissionUtils = require("@woowacourse/mission-utils");
const validateInput = require("./Validate");

let answer;

const pickNumber = () => {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  answer = computer.join("");
};

const countStrike = (input) => {
  const answerArr = answer.split("");
  const strike = answerArr.reduce(
    (acc, curr, idx) => acc + (curr === input[idx]),
    0
  );

  return strike;
};

const countBall = (input) => {
  const answerArr = answer.split("");
  const ball = answerArr.reduce((acc, curr, idx) => {
    const index = input.indexOf(curr);
    return acc + (index !== -1 && index !== idx);
  }, 0);

  return ball;
};

const checkNothing = (strike, ball) => {
  if (strike === 0 && ball === 0) {
    MissionUtils.Console.print("낫싱");
  }
};

const printHint = (strike, ball) => {
  const ballHint = ball > 0 ? `${ball}볼` : "";
  const strikeHint = strike > 0 ? `${strike}스트라이크` : "";

  if (strike > 0 || ball > 0)
    MissionUtils.Console.print(`${ballHint} ${strikeHint}`.trim());
};

const checkCorrect = (strike) => {
  if (strike === 3) {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    askRestart();
  } else getUserInput();
};

const askRestart = () => {
  MissionUtils.Console.readLine(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
    (input) => {
      checkRestartInput(input);
    }
  );
};

const checkRestartInput = (input) => {
  if (!["1", "2"].includes(input)) throw "1 또는 2를 입력하세요.";
  if (input === "1") return game();
  if (input === "2") return MissionUtils.Console.close();
};

const compareInputAnswer = (input) => {
  const strike = countStrike(input);
  const ball = countBall(input);

  checkNothing(strike, ball);
  printHint(strike, ball);
  checkCorrect(strike);
};

const getUserInput = () => {
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
    validateInput(input);
    compareInputAnswer(input);
  });
};

const game = () => {
  pickNumber();
  getUserInput();
};

module.exports = game;
