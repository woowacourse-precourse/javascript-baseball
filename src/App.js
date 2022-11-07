const MissionUtils = require("@woowacourse/mission-utils");
class App {
  #ComputerPicksNumber() {
    let targetNumber = MissionUtils.Random.pickNumberInRange(100, 999);
    let [a, b, c] = targetNumber.toString().split("");
    do {
      let targetNumber = MissionUtils.Random.pickNumberInRange(100, 999);
      [a, b, c] = targetNumber.toString().split("");
    } while (a === b || b === c || a === c)
    targetNumber = a + b + c;
    return targetNumber;
  }

  #sayStart() {
    MissionUtils.Console.print('숫자 야구  시작합니다.');
  };

  #evaluateInput(input) {
    let isNotNumber = isNaN(input);
    if (isNotNumber === true) {
      return false;
    }
    let inputString = input.toString();
    let inputLength = inputString.length;
    if (inputLength !== 3) {
      return false;
    }
    inputString = input.toString();
    let [inputA, inputB, inputC] = inputString.split("");
    if (inputA === inputB || inputB === inputC || inputA === inputC) {
      return false;
    } else {
      return true;
    }
  };




  play() {
    

    let computerInputString =  this.#ComputerPicksNumber().toString();
    let computerInputStringArray = computerInputString.split("");

    MissionUtils.Console.print(computerInput);

    // getHint()
    function getHint(userInput) {
      
      // 낫싱인지? isInclude.length === 0이면 낫싱임
      let isInclude = userInputStringArray.filter(userElement => computerInputStringArray.includes(userElement));
      
      // 몇 개의 스트라이크인지?
      function getNumStrike(userInput) {
        let userInputArray = userInput.toString().split("");
        let computerInputArray = computerInput.toString().split("");
        
        let countStrike = 0;
        
        for (let i; i < 3; i++) {
            if (userInputArray[i] === computerInputArray[j]) {
              countStrike++;
            }
          }
        return countStrike;
        }
      }
      
      // 몇 개의 볼인지?
      function getHintBall(userInput) {
        let userInputArray = userInput.toString().split("");
        let computerInputArray = computerInput.toString().split("");

      }
      
      
    };

    this.#sayStart();

    

    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', input => {
      const userInput = input;
      const isUserInputValid = this.#evaluateInput(userInput);

      if (isUserInputValid === false) {
        MissionUtils.Console.print("FALSE");
        throw userInput;
      }

      MissionUtils.Console.print(getHint(userInput));
    });
  };
};

let app = new App();
app.play();

module.exports = App;
