class GameUtils {
  constructor() {}

  static userInputToNumberArr(text) {
    const splitString = text.split("");
    let userInputArr = [];
    splitString.forEach((char, index) => (userInputArr[index] = Number(char)));

    return userInputArr;
  }

  static evaluScore(user, computer) {
    const result = {
      strike: 0,
      ball: 0,
    };
    if (isAllStrike(user, computer)) {
      result.strike = 3;
      return result;
    }
    result.strike += countingStrike(user, computer);
    result.ball += countingBall(user, computer);

    return result;
  }

  static pritFormat(score) {
    console.log("게임유틸의 프린트폼", score);
    let text = "";
    if (score.ball) text = `${score.ball}볼`;
    if (score.ball && score.strike) text += ` ${score.strike}스트라이크`;
    if (!score.ball && score.strike) text = `${score.strike}스트라이크`;
    if (score.ball === 0 && score.strike === 0) text = "낫싱";

    return text;
  }
}

const isAllStrike = (user, computer) => {
  return JSON.stringify(user) === JSON.stringify(computer);
};

const countingStrike = (user, computer) => {
  let strike = 0;
  user.forEach((number, idx) => {
    if (computer[idx] === number) strike += 1;
  });
  return strike;
};

const countingBall = (user, computer) => {
  let ball = 0;
  user.forEach((number, idx) => {
    if (computer.includes(number) && computer[idx] !== number) ball += 1;
  });
  return ball;
};

module.exports = GameUtils;
