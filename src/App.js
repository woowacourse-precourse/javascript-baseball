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

}

const app = new App();
app.play();

module.exports = App;
