const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.randoms;
    this.init();
  }

  init() {
    this.randoms = this.generateRandomNumbers()
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  generateRandomNumbers() {
    const uniqueRandomNumbers = [];
    while(uniqueRandomNumbers.length < 3) {
      let number = MissionUtils.Random.pickNumberInRange(1, 9)
      if(!uniqueRandomNumbers.includes(number)) {
        uniqueRandomNumbers.push(number);
      }
    }
    return uniqueRandomNumbers;
  }

  play() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (playerInput) => {
      this.inputValidation(playerInput)
    })
  }

  inputValidation(playerInput) {
    const inputToSet = new Set(inplayerInputput.split('').map(Number))
    
    if(playerInput.length !== 3) {
      throw new Error('입력값은 세자리 수를 입력해주세요.')
    } else if([...inputToSet].length !== 3) {
      throw new Error('중첩되지 않는 세자리 수를 입력해주세요.')
    }

    inputToSet.forEach((v) => { if(isNaN(v)) throw new Error('숫자만 입력해주세요.') })

    return this.check(playerInput);
  }

  checkAnswer(playerInput) {   
    const ball = this.countBall(playerInput);
    const strike = this.countStrike(playerInput);

    return this.printHint(ball, strike);
  }

  countStrike(playerInput) {
    let strikes = 0;
    for(let digit = 0; digit < 3; digit++)
      if(this.randoms[digit] === Number(playerInput[digit])) strikes++;
    
    return strikes;
  }

  countBall(playerInput) {
    let balls = 0;
    for(let digit = 0; digit < 3; digit++) {
      if(this.randoms[digit] !== Number(playerInput[digit]) && this.randoms.includes(Number(playerInput[digit]))){
        balls++;
      } 
    }
    return balls;
  }

  printHint(ball, strike) {
    if(strike === 3) {
      MissionUtils.Console.print(`3스트라이크`);
      MissionUtils.Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`)
      return this.correctAnswer();
    } 
    
    if( ball !== 0 && strike !== 0) MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`)
    else if(ball !== 0 && strike === 0) MissionUtils.Console.print(`${ball}볼`)
    else if(ball === 0 && strike !== 0) MissionUtils.Console.print(`${strike}스트라이크`)
    else if (ball === 0 && strike === 0) MissionUtils.Console.print('낫싱')
    
    return this.play();
  }

  correctAnswer() { 
    MissionUtils.Console.readLine(`게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n`, (decision) => {
      if(Number(decision) === 1) {
        this.randoms = this.generateNumber()
        return this.play();
      }
      else if(Number(decision) === 2) {
        MissionUtils.Console.print("게임 종료")
        return MissionUtils.Console.close();
      }
      else this.correctAnswer();
    })
  }

}

const app = new App();
app.play();

module.exports = App;
