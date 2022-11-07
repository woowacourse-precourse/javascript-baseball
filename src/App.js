const MissionUtils = require("@woowacourse/mission-utils");

class App {
  resultNumbers;
  gameResult;

  constructor() {
    this.setRandomNumbers();
  }

  setRandomNumbers() {
    this.resultNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  inputExceptionHandling(inputNumber){
    if (isNaN(inputNumber)) {
      throw "숫자가 아닙니다.";
    }
    if (inputNumber.length > 3) {
      throw new Error("숫자가 초과했습니다.(3개만 입력)");
    }
    if ([...new Set(inputNumber.split(""))].length !== 3) {
      console.log([...new Set(inputNumber.split[""])]);
      throw "중복되는 숫자가 입력되었습니다.";
    }
  }

  checkInputNumbers(inputNumbers, resultNumbers){
    const inputNumbersArray = inputNumbers.split("").map(Number);
    let strikeCount = 0;
    let ballCount = 0;

    inputNumbersArray.map((value,index)=>{
      value === resultNumbers[index]
        ? (strikeCount += 1)
        : resultNumbers.includes(value)
        ? (ballCount += 1)
        : null;
    })

    return [ballCount, strikeCount]
  }


  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    MissionUtils.Console.readLine("숫자를 입력해주세요 :", (answer) => {
      this.inputExceptionHandling(answer);
    });
  
  }
}

module.exports = App;
