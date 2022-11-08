class App {
  checkoverlap(answer){
    var verification = false;
    for (var i =0;i<2;i++){
      for (var j = i+1;j<3;j++){
        if (answer[i] == answer[j]){
          verification = true;
        }
      }
    }
    return verification;
  }
  checkallArefitNumber(answer){
    var value = false; 
    for (var i;i<answer.length;i++){
      if (isNaN(parseInt(answer[i]))){
        value = true;
      }
      if ((parseInt(answer[i])) ==0 ){
        value = true;
      }
    }
    return value;
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
      var number = MissionUtils.Random.pickNumberInRange(1,9);
      Numbers.push(number);
    }

   
    var pass = false;
    while (pass == false){
      var answer;
      MissionUtils.Console.readLine("숫자를 입력해주세요: ", (x) =>{
        answer = x;
      });
    
      //숫자만 적었는지 확인하기
      if (isNaN(parseInt(answer))) throw 'not a number';
      if (parseInt(answer) <=0) throw 'not a natural number';
      if (this.checkallArefitNumber(answer)) throw 'suspicious number'
      if (answer.length != 3) throw 'length error';
      //중복되는 수 없는지 확인
      if (this.checkoverlap(answer)) throw 'overlap';

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
          //another round;
        }        
        else if (parseInt(x) == 2){
          flag = true;
        }
        else throw 'enter 1 or 2'
      });
   }
  }
}
module.exports = App;
