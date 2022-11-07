const { Random, Console } = require("@woowacourse/mission-utils");

const MAX_SIZE = 3;
const START_NUMBER = 1;
const END_NUMBER = 9;
const REPLAY_GAME_KEY = '1';
const END_GAME_KEY = '2';

class App {
  constructor() {
    this.computerNumbers = 0;
    this.userNumbers = 0;
  }

  play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.startGame();
  }

  startGame() {
    this.initComputerNumbers();
    this.answerUserNumbers();
  }

  initComputerNumbers() {
    const tempNumbers = [];
    while (tempNumbers.length < MAX_SIZE) {
      const randomNumber = Random.pickNumberInRange(START_NUMBER, END_NUMBER);
      if (tempNumbers.includes(randomNumber)) continue;
      tempNumbers.push(randomNumber);
    }
    this.computerNumbers = parseInt(tempNumbers.join(''));
  }

  answerUserNumbers() {
  return Console.readLine('숫자를 입력해주세요 : ',(input) => {
    this.validateInput(input);
    this.setUserNumbers(parseInt(input));
    })
  }

  validateInput(input) {
    if(isNaN(input)) throw new RangeError('숫자를 입력해주세요.');
    if(input.toString().length !== MAX_SIZE) throw new RangeError(`${MAX_SIZE}자리 숫자를 입력해주세요.`);
    if(new Set(input).size !== MAX_SIZE) throw new RangeError('중복되지 않는 숫자를 입력해주세요.');
    if(String(input).indexOf(0) !== -1) throw new RangeError(`${START_NUMBER}부터 ${END_NUMBER}의 숫자만 입력해주세요.`);
  }

  finishGame() {
    Console.print(`${MAX_SIZE}스트라이크`);
    Console.print(`${MAX_SIZE}개의 숫자를 모두 맞히셨습니다! 게임 종료`);
    return this.answerReplayGame();
  }

  answerReplayGame() {
    Console.print(`게임을 새로 시작하려면 ${REPLAY_GAME_KEY}, 종료하려면 ${END_GAME_KEY}를 입력하세요.`);
    Console.readLine('', (answer) => {
      if(answer === REPLAY_GAME_KEY) return this.startGame();
      if(answer === END_GAME_KEY) return Console.print('게임 종료');
      if(answer !== REPLAY_GAME_KEY && answer !== END_GAME_KEY) throw new RangeError(`${REPLAY_GAME_KEY} 또는 ${END_GAME_KEY}를 입력하세요.`);
    })
  }

  setUserNumbers(userNumbers) {
    this.userNumbers = userNumbers;
    if(this.userNumbers === this.computerNumbers) return this.finishGame();

    const { ball, strike } = this.calcBallAndStrike();
    this.printResult(ball, strike);
    return this.answerUserNumbers();
  }

  calcBallAndStrike() {
    let ball = 0;
    let strike = 0;
    for(let index = 0; index < MAX_SIZE; index++) {
      const overlapIndex = String(this.computerNumbers).indexOf(String(this.userNumbers)[index]);
      if(overlapIndex > -1 && overlapIndex === index) strike += 1;
      if(overlapIndex > -1 && overlapIndex !== index) ball += 1;         
    }
    return { ball, strike };
  }

  printResult(ball,strike) {
    if(ball === 0 && strike === 0) return Console.print(`낫싱`);
    if(ball === 0 && strike > 0)  return Console.print(`${strike}스트라이크`);
    if(ball > 0 && strike === 0)  return Console.print(`${ball}볼`);
    if(ball > 0 && strike > 0)  return Console.print(`${ball}볼 ${strike}스트라이크`);
  }
}
const app = new App();
app.play();
module.exports = App;