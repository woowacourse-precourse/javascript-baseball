const { Console, Random } = require("@woowacourse/mission-utils");

class BaseBallGame{
  constructor() {
    this.gameAnswer = [];
  }
  
  resetGameAnswer() {
    const answer = [];

    while (answer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!answer.includes(number)) answer.push(number);
    }

    this.gameAnswer = answer;
  }

  isDuplicated(arr) {
    const elements = new Set();
    arr.forEach(a => elements.add(a));
  
    if (arr.length !== elements.size) return true;
    return false;
  }
  
  validation(answer) {
    if (answer.some(v => isNaN(v))) {
      throw new Error('숫자만 입력 가능합니다.');
    }
    if (answer.length !== 3) {
      throw new Error('입력한 숫자의 갯수가 3개가 아닙니다.');
    }
    if (answer.some(v => v > 9) || answer.some(v => v < 1)) {
      throw new Error('1부터 9까지의 숫자만 입력 가능합니다.');
    }
    if (this.isDuplicated(answer)) {
      throw new Error('입력 숫자가 중복되었습니다.');
    }

    return true;
  }

  checkUserAnswer(gameAnswer, userAnswer) {
    const res = {
      victory: false,
      count: { 스트라이크: 0, 볼: 0, 낫싱: 0}
    };
  
    gameAnswer.forEach((answer, gamePosition) => {
      const userPosition = userAnswer.indexOf(answer);

      if (userPosition == -1) res.count.낫싱++;
      if (gamePosition == userPosition) res.count.스트라이크++;
      if (userPosition > -1 && gamePosition !== userPosition) res.count.볼++;
    });

    if (res.count.스트라이크 === 3) res.victory = true;

    return res;
  }

  printResult(count) {
    const {
      스트라이크,
      볼,
      낫싱
    } = count;

    if (낫싱 === 3) {
      Console.print('낫싱');
      return;
    }
    if (볼 && 스트라이크) {
      Console.print(`${볼}볼 ${스트라이크}스트라이크`);
      return;
    }
    if (볼) {
      Console.print(`${볼}볼`);
      return;
    }
    if (스트라이크) {
      Console.print(`${스트라이크}스트라이크`);
      return;
    }
  }

  userAnswerToArray(answer) {
    return [...answer]
      .filter(char => char !== ' ' )
      .filter(char => char !== ',')
      .map(char => Number(char));
  }

  askReGame() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');

    Console.readLine('', (answer) => {
      if (answer !== '1' && answer !== '2') this.askReGame();
      if (answer == '1') this.reStart();
      if (answer == '2') Console.close();
    });
  }

  askAnswer() {
    Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      const userAnswer = this.userAnswerToArray(answer);
      
      if (!this.validation(userAnswer)) return;
      
      const result = this.checkUserAnswer(this.gameAnswer, userAnswer);
      
      this.printResult(result.count);
      
      if (!result.victory) this.askAnswer();
      if (result.victory) this.askReGame(); 
    });
  }

  start() {
    this.resetGameAnswer();

    Console.print('숫자 야구 게임을 시작합니다.');
    
    this.askAnswer(); 
  }

  reStart() {
    this.start();
  }
}

module.exports = BaseBallGame;
