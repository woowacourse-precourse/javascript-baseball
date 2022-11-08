class App {
  checkoverlap(answer){
    verification = false;
    for (var i =0;i<3;i++){
      for (var j = i;j<3;j++){
        if (answer[i] == answer[j]){
          verification = true;
        }
      }
    }
    return verification;
  }

  print(values){
     //입력한 결과 표시해주기
     const MissionUtils = require("@woowacourse/mission-utils");
     var pass = false;
     var strike_sum, ball_sum; 
     ball_sum = values[0];
     strike_sum = values[1];

     if (strike_sum==3){
      MissionUtils.Console.print("3스트라이크");
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");  
      pass = true;     
      }

    else if (strike_sum == 0 && ball_sum == 0){
      MissionUtils.Console.print("낫싱");

    }
    else if (strike_sum ==0 && ball_sum != 0){
      var sentence = ball_sum.toString()+"볼";
      MissionUtils.Console.print(sentence);
    
    }
    else if (strike_sum!= 0 && ball_sum != 0){
      var sentence = ball_sum.toString()+"볼"+" "+strike_sum.toString()+"스트라이크";
      MissionUtils.Console.print(sentence);
      
    }
    else if (strike_sum!= 0 && ball_sum == 0){
      var sentence = strike_sum.toString()+"스트라이크";
      MissionUtils.Console.print(sentence);
    }
    return pass;

  }
  calculate(Numbers, answer){ 
    var strike_sum = 0;
    var ball_sum = 0;
  
    for(var i =0;i<3;i++){
      //스트라이크 세기
      var number = parseInt(answer[i]);
      if (number == Numbers[i]){
        strike_sum += 1;
        }
    
      //볼 세기
      for (var j =0;j<3;j++){
        if (i == j){
          continue;
        }
        else if (number == Numbers[j]){
          ball_sum += 1;
        }
      }
    }
  
    return [ball_sum, strike_sum];
  }

  playoneround(){
    const MissionUtils = require("@woowacourse/mission-utils");
    
    //세 가지 숫자 만들기
    var Numbers = [];
    for (var i =0;i<3;i++){
      var number = MissionUtils.Random.pickNumberInRange();
      Numbers.push(number);
    }

   
    var pass = false;
    while (pass == false){
      var answer  = 0;
      //MissionUtils.Console.print("숫자를 입력해주세요: ")
      MissionUtils.Console.readLine("숫자를 입력해주세요: ", (x) =>{
        if (isNaN(parseInt(x))) throw 'not a number';
        if (parseInt(x) <0) throw 'minus number';
        
        answer = x.split(",");
      });
      answer = answer.toString().split(",");
      answer = answer.join("");
      if (answer.length != 3) throw 'length error';
      if (checkoverlap(answer) == true) throw 'overlap';

      //계산하기
      var values = this.calculate(Numbers, answer);
      
      //프린트하기
      pass = this.print(values);
      }
  }
  
  
  
  play() {
    const MissionUtils = require("@woowacourse/mission-utils");
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    var flag = false;
    while(flag== false){
      this.playoneround();
      MissionUtils.Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. ", (x) =>{
        if (parseInt(x) == 1){
       //   App.play();
       //   MissionUtils.Console.print("again");
        }        
        else if (parseInt(x) == 2){
          flag = true;
        }
        else throw 'enter 1 or 2'
      });
   }
   //MissionUtils.Console.print("게임 종료");
  }
}
module.exports = App;
