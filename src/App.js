const MissionUtils = require("@woowacourse/mission-utils");
const HOMERUN = 1;
const FAIL = 0;

function makeRandoms(){
  const computer = [];
  while(computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1,9);
    if(!computer.includes(number)){
      computer.push(String(number));
    }
  }
  return computer;
}

/*function inputNumber(){
  MissionUtils.Console.readLine('숫자를 입력해주세요. : ', (answer) => {
    if(answer.length != 3){
      throw "세자리 숫자를 입력해야 합니다."
    }
    return answer;
  });
  MissionUtils.Console.close();
}

function printResult(computer,value){
  let strike = 0;
  let ball = 0;
  let result = FAIL;
  for(let i = 0; i < computer.length; i++){
    let string = computer[i];
    let index = value.indexOf(string);
    if(index > -1 && index === i){
      strike++;
    }
    if(index > -1 && index != i){
      ball++;
    }
  }
  if(strike === 3){
    MissionUtils.Console.print("3 스트라이크\n");
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    result = HOMERUN;
    return result;
  }
  else if(strike === 0 && ball === 0){
    MissionUtils.Console.print("낫싱");
    result = FAIL;
    return result;
  }
  else{
    MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    result = FAIL;
    return result;
  }
}

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    let PLAYING = "1";
    while(PLAYING === "1"){
      const computer = makeRandoms();
      let result = FAIL;
      while(result === FAIL){
        const value = inputNumber();
        result = printResult(computer,value);
      }
      MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. : ', (answer) => {
       PLAYING = answer;
      });
      MissionUtils.Console.close();
    }
  }
}*/
class App {
  play(){
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    while(true){
      const computer = makeRandoms();
      let value = "";
      let strike = 0;
      let ball = 0;
      while(strike < 4){
        MissionUtils.Console.readLine('숫자를 입력해주세요. : ', (answer) => {
          if(answer.length != 3){
            throw "세자리 숫자를 입력해야 합니다."
          }
          value = answer;
        });
        MissionUtils.Console.close();
  
        for(let i = 0; i < computer.length; i++){
          let string = computer[i];
          let index = value.indexOf(string);
          if(index > -1 && index === i){
            strike++;
          }
          if(index > -1 && index != i){
            ball++;
          }
        }
        if(strike === 3){
          MissionUtils.Console.print("3 스트라이크\n");
          MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
          strike++;
        }
        else if(strike === 0 && ball === 0){
          MissionUtils.Console.print("낫싱");
        }
        else{
          MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
        }
      }
      MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. : ', (answer) => {
        if(answer == "2"){
          false;
        }
       });
    }
  }
}

module.exports = App;
