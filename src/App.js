const { Console, Random } = require('@woowacourse/mission-utils');

class App {
  #gameAnswer = null;

  printResult(result) {
    let output = '';
    if (result.ball !== 0) {
      output += `${result.ball}볼`;
      if (result.strike !== 0) {
        output += ' ';
      }
    }
    if (result.strike !== 0) {
      output += `${result.strike}스트라이크`;
    }
    if (result.strike === 0 && result.ball === 0) {
      output = '낫싱';
    }
    Console.print(output);
  }

  getResult(number, answer) {
    const numberArr = [...number];
    const result = numberArr.reduce(
      ({ strike, ball }, num, nowInd) => {
        const ind = answer.indexOf(num);
        if (ind === -1) {
          return { strike, ball };
        }
        if (ind === nowInd) {
          return { strike: strike + 1, ball };
        }
        return { strike, ball: ball + 1 };
      },
      { strike: 0, ball: 0 }
    );
    return result;
  }

  chkValidNumber(answer) {
    const answerArr = [...answer];

    if (answerArr.length !== 3) return false;
    if (answerArr.length !== [...new Set(answerArr)].length) return false;
    for (let i = 0; i < answerArr.length; i += 1) {
      if (!answerArr[i].match(/^[1-9]+$/)) return false;
    }

    return true;
  }

  makeRandomAnswer() {
    const randomNumArr = [];
    while (randomNumArr.length < 3) {
      const randomNum = Random.pickNumberInRange(1, 9);
      if (!randomNumArr.includes(randomNum)) {
        randomNumArr.push(randomNum);
      }
    }
    return randomNumArr.join('');
  }

  inputByConsole() {
    Console.readLine('숫자를 입력해주세요 : ', input => {
      if (!this.chkValidNumber(input))
        throw new Error(
          '입력형식이 잘못되었습니다. 서로 다른 숫자 3개를 입력해주세요.🙏'
        );
      const result = this.getResult(input, this.#gameAnswer);
      this.printResult(result);
      if (result.strike === 3) {
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        Console.readLine(
          '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
          finishInput => {
            if (finishInput === '1') {
              this.#gameAnswer = this.makeRandomAnswer();
              this.inputByConsole();
            }
            if (finishInput === '2') {
              Console.close();
            }
          }
        );
      } else {
        this.inputByConsole();
      }
    });
  }

  play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.#gameAnswer = this.makeRandomAnswer();
    this.inputByConsole();
  }
}

module.exports = App;
