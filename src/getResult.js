const Message = require('./Message');

class Count {
  constructor(answer, userInputArr) {
    this.count = 0;
    this.answer = answer;
    this.userInputArr = userInputArr;
  }

  countScore(checkFunction) {
    this.userInputArr.reduce((acc, cur, idx) => {
      if (checkFunction(this.answer, cur, idx)) {
        this.count += 1;
      }
    }, 0);
    return this.count;
  }
}

function checkStrike(answer, cur, idx) {
  return cur === answer[idx];
}

function countStrike(answer, userInputArr) {
  const strike = new Count(answer, userInputArr);
  return strike.countScore(checkStrike);
}

function checkBall(answer, cur, idx) {
  return !checkStrike(answer, cur, idx) && answer.includes(cur);
}

function countBall(answer, userInputArr) {
  const ball = new Count(answer, userInputArr);
  return ball.countScore(checkBall);
}

function checkNothing(strike, ball) {
  return !strike && !ball;
}

function makeResultStr(strike, ball) {
  let result = [];
  if (checkNothing(strike, ball)) return Message.nothing;
  if (ball) result.push(`${ball}${Message.ball}`);
  if (strike) result.push(`${strike}${Message.strike}`);
  return result.join(' ');
}

function getResult(answer, userInput) {
  const userInputArr = userInput.split('');
  const strike = countStrike(answer, userInputArr);
  const ball = countBall(answer, userInputArr);
  const result = makeResultStr(strike, ball);
  return result;
}

module.exports = getResult;
