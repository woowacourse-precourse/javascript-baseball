const MissionUtils = require("@woowacourse/mission-utils");
class App {
  play() {}
}

module.exports = App;

const answerCheck = false;

function computerInput(){
  const computerInputArr=[];
  while (computerInputArr.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1,9);
    if (!computerInputArr.includes(number)) {
      computerInputArr.push(number);
    }
  }
  return computerInputArr;
}

const startText = () => {
  return MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
}

const ballCount = (computer,user) => {
  let count = 0;
  computer.forEach((number,index) => {
    if(user.includes(number) && number !== Number(user[index])) {
      count++
    }
  },0)
  return count;
}

const strikeCount = (computer,user) => {
  let count = 0;
  computer.forEach((number,index) => {
    if(user.includes(number) && number === Number(user[index])) {
      count++
    }
  },0)
  return count;
}

const gameRule = (computer,user) => {
  let ballScore = ballCount(computer,user);
  let strikeScorer = strikeCount(computer,user);
  if(strikeScorer === 3) {
    answerCheck = true ; 
    return `3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료`;
  }
  if(ballScore === 0 && strikeScorer === 0) {
    return "낫싱";
  }
  if(strikeScorer === 0) {
    return `${ballScore}볼`;
  }
  if(ballScore === 0) {
    return `${strikeScorer}스트라이크`;
  }
  return `${ballScore}볼 ${strikeScorer}스트라이크`
}

const userInputError = (userInput) => {
  if(userInput.length !== 3) {
    answerCheck = true ; 
    throw ('3자리의 수를 입력하세요.');
  }
  if(new Set(userInput).size !== 3) {
    throw ('중복된 수가 없는지 확인해주세요.');
  }
  if(userInput.includes('0')) {
    throw ('1~9까지의 숫자만 입력해주세요.');
  }
  if(isNaN(userInput) || userInput.includes(' ')) {
    throw ('숫자만 입력해주세요.');
  }
  return true;
}

const userInputHandler = (computer) => {
  MissionUtils.Console.readLine('숫자를 입력해주세요 :', (userInput) => {
    userInputError(answer);
    MissionUtils.Console.print(gameRule(computer,userInput));
    if(!answerCheck) {
      return userInputHandler();
    }
  })
}
const gameRepeat = () => {
  const computer = computerInput();
  userInputHandler(computer);
}

const gameReset = () => {
  MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (userInput) => {
    if(userInput === '1') {
      answerCheck = false;
      return gameRepeat()
    }
    if(userInput === '2') {
      return MissionUtils.Console.close();
    }
  })
}

let a = new App();
a.play()