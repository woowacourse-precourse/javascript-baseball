const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    startgame();
  }

  startgame(){
    const RandomNumber = MakeNumber();
    InputNum(answer) = RandomNumber;
  }

  //Make random number
  MakeNumber(){
    const RandomNumber = [];
    while(RandomNumber.length < 3){
      const numbers = MissionUtils.Random.pickNumberInRange(1,9);
      
      //Check for duplicates
      if(!random.includes(numbers)){
        RandomNumber.push(numbers);
      }
    }
    return RandomNumber.join("");
  }

  InputNum(answer){
    MissionUtils.Console.readLine("숫자를 입력해주세요 :", (number) => {
      const isValidInput = checkExcept(number);
      if (isValidInput == true) {
        CheckAnswer(answer, number);
      } else {
        MissionUtils.Console.close();
      }
    });
    return;
  }

  CheckAnswer(answer,number){
    const strike = 0;
    const ball = 0;
    for(let i = 0 ; i < 3 ; i++){
      if(answer[i] === number[i])
        strike++;
      if(answer[i] == answer.includes(number[i]))
        ball++;
    }
    Result(answer,strike,ball);
    return;
  }

  Result(answer,strike,ball){
    if(strike == 0 && ball == 0){
      MissionUtils.Console.print("낫싱");
      InputNum(answer);
      return;
    }
    else if(strike == 3){
      End();
      return;
    }
    const checkStrike = strike == 0 ? "":`${strike}스트라이크`;
    const checkBall = ball == 0 ? "" : `${ball}볼`;

    MissionUtils.Console.print(checkBall + checkStrike);
    InputNum(answer);

    return;
  }
}
// module.exports = App;

