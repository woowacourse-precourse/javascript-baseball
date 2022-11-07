class App {
  calculate(Numbers, answer){ 
    var strike_sum = 0;
    var ball_sum = 0;
  
    for(var i =0;i<3;i++){
      //스트라이크 세기
      var number = Numbers[i];
      if (number == parseInt(answer[i])){
        strike_sum += 1;
        }
    
      //볼 세기
      for (var j =0;j<3;j++){
        if (i == j){
          continue;
        }
        else if (number == parseInt(answer[j])){
          ball_sum += 1;
        }
      }
    }
  
    return [ball_sum, strike_sum];
  }
  
  play() {
    const MissionUtils = require("@woowacourse/mission-utils");
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    var Numbers = [];
    
    //세 가지 함수 만들기
    for (var i =0;i<3;i++){
      var number = MissionUtils.Random.pickNumberInRange();
      Numbers.push(number);
    }

    var pass = false;
    while (pass == false){
     
      var answer;
      MissionUtils.Console.readLine("숫자를 입력해주세요: ", (x) =>{
        answer = x;      
      });
      
      //계산하기
      var strike_sum, ball_sum; 
      var values = this.calculate(Numbers, answer);
      strike_sum = values[0];
      ball_sum = values[1];
      
      

    }
  }

  
}

module.exports = App;