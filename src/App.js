const { Console } = require('@woowacourse/mission-utils');

class App {
  chkValidNumber(answer) {
    const answerArr = [...answer];

    if (answerArr.length !== 3) return false;
    if (answerArr.length !== [...new Set(answerArr)].length) return false;
    for (let i = 0; i < answerArr.length; i += 1) {
      if (!answerArr[i].match(/^[1-9]+$/)) return false;
    }

    return true;
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
