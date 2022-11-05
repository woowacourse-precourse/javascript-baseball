const { Console, Random } = require('@woowacourse/mission-utils');

class App {
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
    Console.readLine('숫자를 입력해주세요 : ', answer => {
      if (!this.chkValidNumber(answer))
        throw new Error(
          '입력형식이 잘못되었습니다. 서로 다른 숫자 3개를 입력해주세요.🙏'
        );
      this.inputByConsole();
    });
  }

  play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.inputByConsole();
  }
}

module.exports = App;
