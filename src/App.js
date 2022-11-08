const MissionUtils = require("@woowacourse/mission-utils");


class App {

  random(){
    return new Promise(function(resolve, reject) {
      let computer = [];
      while (computer.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) {
          computer.push(number);
        }
      }
      //console.log("computer: " + computer); 
      resolve(computer);
    });
  }

  inputCheck(userArray){
    //console.log("check: " + userArray);
    if(userArray.length > 3){ //1) 입력 값은 3자리
      throw "input length > 3";
    }

    userArray.map((number)=> {
      if(isNaN(number)){ //2) 1부터 9까지 숫자로 구성
        throw "Input not a number";
      }
      else if(number <= 0){//3) 0 이하의 정수 불가능
        throw "num <= 0";
      }
      else{ //4) 각 숫자는 중복 불가능
        const setCollection = new Set(userArray);
        const isDuplicate = setCollection.size < userArray.length;
        
        if (isDuplicate){
          throw "is duplicate";
        }

      }

    });

  }


  input() {
    return new Promise(function(resolve, reject) {
      var items = [];
      MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
        items = answer.split('').map((el) => parseInt(el));
        resolve(items);
        MissionUtils.Console.close();
      });


    });
    
  }

  compare(user, computer){
    let ball = user.filter(item => computer.includes(item));
    let strike = user.filter(item => item === computer[user.indexOf(item)]);

    let ballNum = ball.length - strike.length;
    let strikeNum = strike.length;
    return [ballNum, strikeNum];
  }

  async print(ball, strike){
    
    let isSuccess= [0,0]; // 0번째 -> 정답 유무, 1번째 -> restart 유무

    if (ball + strike === 0){
      console.log("낫싱");
    }
    else if (strike === 3){
      console.log(strike + "스트라이크");
      console.log("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      
      isSuccess[0] = 1;
      isSuccess[1] = await this.restart(); // input 값 체크하는 용도
      
    }
    else if (ball !== 0 && strike !== 0){
      console.log(ball + "볼 " + strike + "스트라이크");
    }
    else if(ball !== 0 && strike === 0){
      console.log(ball + "볼");
    }
    else{
      console.log(strike + "스트라이크");
    }

    return isSuccess;

  }

  restart(){
    let restartValue;
    console.log("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");


    return new Promise(function(resolve, reject) {
      MissionUtils.Console.readLine('', (answer) => {
        console.log(`${answer}`);
        if(answer === 1){ //restart 
          restartValue = 1;
        }
        else if(answer === 2){
          restartValue = 0;
        }
        resolve(restartValue);
        
        MissionUtils.Console.close();
      });

    
    });
  }


  async play() {

    console.log("숫자 야구 게임을 시작합니다.");
    
    let computer = await this.random();
    let isSuccess;
    let flag;

    while(true){
      
      let user = await this.input();
      
      try {
        this.inputCheck(user);
        let bNum, sNum;
        [bNum, sNum] = this.compare(user, computer);

        isSuccess = this.print(bNum, sNum);

      }
      catch(e){//input error
        //console.error(e);
        break;
      }
      //console.log(isSuccess);

      if(isSuccess[0] === 1){ //success the game
        break;
      }
      
      if(isSuccess[1] === 1){ //restart 
        break;
      }

    }
    
  }

}

const app = new App();
app.play();





module.exports = App;
