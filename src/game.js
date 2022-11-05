const MissionUtils = require("@woowacourse/mission-utils");

function getAnswer() {
  let answer = new Set();
  addNumber(answer);
  answer = [...answer];
  return answer;
}

function addNumber(numbers) {
  const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
  numbers.add(randomNumber);
  if(numbers.size < 3) addNumber(numbers);
}

class ResultCalculator {
  getResult(input, answer) {
    const result = {
      strike: 0,
      ball: 0,
      }
    input.forEach((inputNumber, idx) => {
      const answerNumber = answer[idx];
      if(this.isStrike(inputNumber, answerNumber)) return result.strike++;
      if(this.isBall(inputNumber, answer)) return result.ball++;
    });
    return result;
  }
  isStrike(inputNumber, answerNumber) {
    return inputNumber === answerNumber;
  }
  isBall(inputNumber, answer) {
    return answer.includes(inputNumber);
  }
}

exports.getAnswer = getAnswer;
exports.ResultCalculator = ResultCalculator;