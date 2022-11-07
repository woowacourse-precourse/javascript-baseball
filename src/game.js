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
}


module.exports = game;