const MissionUtils = require("@woowacourse/mission-utils");
class App {
  play() {}
}

module.exports = App;

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
    return "3개의 숫자를 모두 맞히셨습니다! 게임 종료";
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
