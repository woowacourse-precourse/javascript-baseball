const MISSIONUTILS_IO = require("@woowacourse/mission-utils");

const TEXTS = Object.freeze({
  START_TEXT: "숫자 야구 게임을 시작합니다.",
  INPUT_TEXT: "숫자를 입력해주세요 : ",
  END_TEXT: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  RESELECT_TEXT: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
});

const RESULT = Object.freeze({
  STRIKE: "스트라이크",
  BALL: "볼", 
  NOTHING: "낫싱"
});

const THREE_STRIKE = 3;

class Game {
  constructor(){
    this.utilsIo = MISSIONUTILS_IO.Console;
    this.utilsRandom = MISSIONUTILS_IO.Random;
    this.utilsIo.print(TEXTS.START_TEXT);
    
    this.userNumberArray = [];
    this.compareNumberArray = [];
  }

  inputUserNumber(text, callback) {
    this.utilsIo.readLine(text, callback.bind(this));
  }
  
  makeComputerNumer(){
    const computer = [];
    while (computer.length < 3) {
      const number = this.utilsRandom.pickNumberInRange(1, 9);
      if (!computer.includes(number)) computer.push(number);
    }
    this.compareNumberArray = computer;
  }

  inputGame(text, callback){
    this.inputUserNumber(text, callback);
  }

  startGame(){
    this.makeComputerNumer();
    this.inputGame(TEXTS.INPUT_TEXT, this.onGame);
  }

  onGame(input){
    this.userNumberArray = input.split("").map(Number);
    this.validation.isValidationUserBallInput(this.userNumberArray);

    const ball = this.countBall();
    const strike = this.countStrike();
    this.utilsIo.print(this.showResult(ball, strike));

    if(this.isThreeStrike(strike)) { }
  }


  countBall(){
    let ball = 0;
    this.userNumberArray.map((userNumber, index)=>{
      let sameNumberComputerIndex = this.compareNumberArray.indexOf(userNumber);
      if(sameNumberComputerIndex !== -1 && sameNumberComputerIndex !== index){
        ball++;
      }
    })
    return ball;
  }

  countStrike(){
    let strike = 0;
    this.userNumberArray.map((userNumber, index)=>{
      if(userNumber === this.compareNumberArray[index]){
        strike++;
      }
    })
    return strike;
  }

  showResult(ball, strike){
    if(ball == 0 && strike == 0) return RESULT.NOTHING;
    if(ball > 0 && strike == 0) return `${ball}${RESULT.BALL}`;
    if(ball == 0 && strike > 0) return `${strike}${RESULT.STRIKE}`;
    if(ball > 0 && strike > 0) return `${ball}${RESULT.BALL} ${strike}${RESULT.STRIKE}`;
  }

  isThreeStrike(strike){
    return strike === THREE_STRIKE;
  }
}

class App {
  constructor() {
    this.game = new Game();
  }
  play() {
  }
}

const app = new App();
app.play();

module.exports = App;

