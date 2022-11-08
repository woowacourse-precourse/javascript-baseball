const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor(){
    this.computerInputNum = []
  };

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.computerInputRandomNum();
    this.userInputRandomNum();
  };

  computerInputRandomNum(){
    this.computerInputNum = []
    let comNum = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3)
    if(this.computerInputNum.length = 3){
     this.computerInputNum.push(comNum);
    };
  };

  userInputRandomNum(){
    MissionUtils.Console.readLine('숫자를 입력 해주세요 : ',(answer) => {
    this.checkError(answer)
    this.collectAnswer(answer)
   });
  };

  checkError(answer){
    const answerCheck = answer.toString().split('').map(Number)
    if(answerCheck.length !== 3) throw '숫자의 길이는 3자리 이하이여야 합니다.'
    if(answerCheck.includes(('0'))) throw '0을 제외한 숫자를 입력하세요.'
    if(answerCheck.includes(NaN)) throw '숫자가 아닙니다.'
    let DuplicatedNum = answerCheck.some((el) => {
      return (
        answerCheck.indexOf(el) !== answerCheck.lastIndexOf(el)
      );
    });
    if (DuplicatedNum) throw "중복된 숫자가 존재합니다.";
  };

  collectAnswer(answer){
    let userAnswer = answer.toString().split('').map(Number)
    let checkStrike = 0
    let checkBall = 0

    for(let i=0; i < userAnswer.length; i++){
      if(userAnswer[i] === this.computerInputNum[i]) checkStrike +=1;
      else if(this.computerInputNum.includes(userAnswer[i])) checkBall +=1;
    };
  };

  getAnswer(){
    if (checkStrike === 0 && checkBall === 0) MissionUtils.Console.print("낫싱");
    else MissionUtils.Console.print(`${checkBall}:볼 ${checkStrike}:스트라이크`);

    if(checkStrike === 3) {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.endGame()
    };
  };

  endGame(){
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. : ', (value) => {
      this.resetGame(value)
    });
  };

  resetGame(value){
    if(value = "1") app.play()
    else if(value = "2") MissionUtils.Console.close();
  }
}

const app = new App();
app.play();
console.log(app)

module.exports = App;
