const MissionUtils = require("@woowacourse/mission-utils");

const MIN_RANDOM_NUIMBER = 1
const MAX_RANDOM_NUMBER = 9
const VALID_NUMBER_LENGTH = 3

const isValidInput = (input) => {
  if (!isValidLength(input)) {
    return false;
  }
  if (input.includes(0)) {
    return false;
  }
  if (isDuplicated(input)) {
    return false;
  }

  return true;
};

const isValidLength = (input) => {
  if (input.length !== VALID_NUMBER_LENGTH) {
    return false;
  }
  if (isNaN(input)) {
    return false;
  }
  if (parseFloat(input) !== parseInt(input)) {
    return false;
  }
  if (parseInt(input) < 0) {
    return false;
  }

  return true;
};

function App () {
  this.randomNumber;
  this.play = () => {
    const getRandomNumber = (MIN_RANDOM_NUIMBER, MAX_RANDOM_NUMBER) => {
      const randomNumberArray = [];
      while (randomNumberArray.length < VALID_NUMBER_LENGTH) {
        const randomNumber = MissionUtils.Random.pickNumberInRange(
          MIN_RANDOM_NUIMBER,
          MAX_RANDOM_NUMBER
        );
        if (!randomNumberArray.includes(randomNumber)) {
          randomNumberArray.push(randomNumber);
        }
      }
      return randomNumberArray.join('');
    }

    function matchNumber (num1, num2) {
      let strike = 0;
      let ball = 0;
      const userInput = num1.split('').map(char => Number(char));
      const computerInput = num2.split('').map(char => Number(char));

      userInput.forEach((element, index) => {
        if (computerInput[index] === element) {
          strike += 1;
          return;
        }
        if (computerInput.includes(element)){
            ball += 1;
        }
      })
      let result = [ball, strike];
      return result;
    }
    
    function getScore (matchResult){
      const [ball, strike] = matchResult
      const ANSWER_STRIKE_COUNT = 3
      if (strike === ANSWER_STRIKE_COUNT){
        MissionUtils.Console.print ("3스트라이크 \n\ 3개의 숫자를 모두 맞히셨습니다! 게임 종료")
        MissionUtils.Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n", (answer) => {
          if(answer === '1'){
            startGame();
            getUserAnswer();
            return;
          }
          if(answer === '2'){
            MissionUtils.Console.close();
            return;
          } throw '올바른 값을 입력하세요.';
        })
        return;
      }
      if (strike === 0 && ball === 0){
        MissionUtils.Console.print ("낫싱")
        getUserAnswer();
        return;
      }
      MissionUtils.Console.print (`${ball}볼 ${strike}스트라이크`);
      getUserAnswer();
    }

    function printNewGameInterface () {
      MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    }

    function startGame () {
      this.randomNumber = getRandomNumber(MIN_RANDOM_NUIMBER,MAX_RANDOM_NUMBER);
    }

    function getUserAnswer () {
      MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
        if(isValidInput(answer)){
          getScore(matchNumber(answer, this.randomNumber));
          return;
        } throw '올바른 값을 입력하세요.';
      })
    }

    printNewGameInterface();
    startGame();
    getUserAnswer();
  }
}

module.exports = App;

