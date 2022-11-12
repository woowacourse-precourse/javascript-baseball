const { Console, Random } = require('@woowacourse/mission-utils');
const { ANSWER, OPTION, MESSAGE, RESULT } = require('./constants/constants');
const Validator = require('./Validator');

class Game {
  static makeAnswer() {
    const randomNumList = [];
    while (randomNumList.length < ANSWER.LENGTH) {
      const number = Random.pickNumberInRange(ANSWER.MIN, ANSWER.MAX);
      if (!randomNumList.includes(number)) {
        randomNumList.push(number);
      }
    }
    return randomNumList.join('');
  }

  static getResult(answer, userNumber) {
    const userNumberArr = [...userNumber];
    const result = userNumberArr.reduce(
      ({ strikeCnt, ballCnt }, curNum, curIndex) => {
        const index = answer.indexOf(curNum);
        if (index === -1) return { strikeCnt, ballCnt };
        else if (index === curIndex)
          return { strikeCnt: strikeCnt + 1, ballCnt };
        else return { strikeCnt, ballCnt: ballCnt + 1 };
      },
      {
        strikeCnt: 0,
        ballCnt: 0,
      }
    );
    return result;
  }

  static printResult(result) {
    const { strikeCnt, ballCnt } = result;
    let resultMessage = '';
    if (strikeCnt === 0 && ballCnt === 0) {
      Console.print(RESULT.NOTHING);
      return;
    }
    if (ballCnt) {
      resultMessage += `${ballCnt}${RESULT.BALL} `;
    }
    if (strikeCnt) {
      resultMessage += `${strikeCnt}${RESULT.STRIKE}`;
    }
    Console.print(resultMessage);
  }

  progress(answer) {
    Console.readLine(MESSAGE.INPUT, (userNumber) => {
      Validator.validateInput(userNumber);
      const result = Game.getResult(answer, userNumber);
      Game.printResult(result);

      if (result.strikeCnt === ANSWER.LENGTH) {
        Console.print(`${ANSWER.LENGTH}${MESSAGE.END}`);
        this.askRestart();
      } else {
        this.progress(answer);
      }
    });
  }

  start() {
    const answer = Game.makeAnswer();
    this.progress(answer);
  }

  askRestart() {
    Console.readLine(`${MESSAGE.RESTART}\n`, (userInput) => {
      if (userInput === OPTION.RESTART) {
        return this.start();
      } else if (userInput === OPTION.END) {
        return this.end();
      } else {
        throw new Error(MESSAGE.ERROR_RESTART);
      }
    });
  }

  end() {
    Console.close();
  }
}

module.exports = Game;
