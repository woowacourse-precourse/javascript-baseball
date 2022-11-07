const MissionUtils = require("@woowacourse/mission-utils");

const game = {
  userInput(){
    let input = ""
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => { 
      input = answer;
    });
    if(input.length !== 3 || input.includes("0")){ throw `오류 : ${input}`};
    return input;
    },

  computerNumber(){
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer
    },

  battle(userNumber,computerNumber){
    userNumber = String(userNumber).split('');
    const score = {
      ball: 0,
      strike: 0
    };

    userNumber.forEach((value,index) =>{
      if(computerNumber[index] === Number(value)){
        score.strike++
      }else if(computerNumber.includes(Number(value))){
        score.ball++
      }
    })

      if(score.ball === 0 && score.strike === 0) return "낫싱"
      else if(score.ball !== 0 && score.strike === 0) return `${score.ball}볼`
      else if(score.ball === 0 && score.strike !== 0) return `${score.strike}스트라이크`
      else if(score.ball !== 0 && score.strike !== 0) return `${score.ball}볼 ${score.strike}스트라이크`
    },

  message(battleResult){
    if(battleResult === "3스트라이크"){
      MissionUtils.Console.print(battleResult)
      MissionUtils.Console.print(battleResult+"\n"+'3개의 숫자를 모두 맞히셨습니다! 게임 종료')
      return "게임 종료"
    }else{
      MissionUtils.Console.print(battleResult)
      return "재입력"
    }
  },

  restart(){
    let input = ""
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (answer) => {
      input = answer;
    });
    if(input === "1") return 1;
    else if(input === "2") return 2;
    else throw `오류 : ${input}`
  },
}


module.exports = game;