const { Console, Random } = require("@woowacourse/mission-utils");
const validate = require("../validation/validation");

const countStrike = (answer, input) => {
  let strike = 0;
  answer.split("").forEach((el, i) => {
    if (el === input[i]) strike++;
  });
  return strike;
};

const countBall = (answer, input) => {
  let ball = 0;
  answer.split("").forEach((el, i) => {
    if (input.includes(el) && input[i] !== el) ball++;
  });
  return ball;
};

const evaluateUserInput = (answer, input) => {
  const strike = countStrike(answer, input);
  const ball = countBall(answer, input);
  if (strike === 0 && ball === 0) Console.print(`낫싱`);
  else if (strike !== 0 && ball === 0) Console.print(`${strike}스트라이크`);
  else if (strike === 0 && ball !== 0) Console.print(`${ball}볼`);
  else Console.print(`${ball}볼 ${strike}스트라이크`);
};

const evaluateRestartInput = (answer, input) => {
  if (input === "1") {
    answer = game.pickRandomNumber();
    return game.getUserInput(answer);
  }
  if (input === "2") Console.close();
};

const reset = (answer, input) => {
  const strike = countStrike(answer, input);
  if (strike === 3) {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (input) => {
        validate.restartInput(input);
        evaluateRestartInput(answer, input);
      }
    );
  }
  return game.getUserInput(answer);
};

const game = {
  Start: () => {
    Console.print("숫자 야구 게임을 시작합니다.");
  },

  pickRandomNumber: () => {
    const randomNumber = [];
    while (randomNumber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!randomNumber.includes(number)) randomNumber.push(number);
    }
    return randomNumber.join("");
  },

  getUserInput: (answer) => {
    Console.readLine("숫자를 입력해주세요 : ", (input) => {
      validate.userInput(input);
      evaluateUserInput(answer, input);
      reset(answer, input);
    });
  },
};

module.exports = game;
