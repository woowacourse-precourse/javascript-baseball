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
}


module.exports = game;