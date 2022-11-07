const MissionUtils = require('@woowacourse/mission-utils');

class NumberBaseballController {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  start() {
    this.view.entry();
    this.game();
  }

  game() {
    this.model.generateNum();
    this.play();
  }

  play() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', this.gameProcess.bind(this));
  }

  gameProcess(input) {
    const inputArray = this.model.splitNumber(input);
    if (this.model.inputValidCheck(inputArray)) {
      const result = this.model.getScore(inputArray);
      this.view.showResult(result);
      if (this.model.isAnswer(result)) {
        this.view.end();
        this.model.clear();
        this.checkForReplay();
        return;
      }
      this.play();
      return;
    }
    throw new Error('에러가 발생하였습니다.');
  }

  checkForReplay() {
    MissionUtils.Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. : ',
      this.replayProcess.bind(this),
    );
  }

  replayProcess(input) {
    if (input === '1') {
      this.game();
      return;
    } else if (input === '2') {
      MissionUtils.Console.close();
      return;
    }
    throw new Error('에러가 발생하였습니다.');
  }
}

module.exports = NumberBaseballController;
