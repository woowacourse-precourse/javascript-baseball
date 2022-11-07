const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {

  }
  
  checkException(num){
    if(isNaN(num)){
      throw new Error("숫자를 입력하세요.");
    }else if(num<0){
      throw new Error("양수를 입력하세요.");
    }else if(num.charAt(0) == 0 || num.charAt(1) == 0 || num.charAt(1)){
      throw new Error("1-9 사이의 숫자로 이루어진 세자리 숫자를 입력하세요.");
    }else if(num.charAt(0) == " " ||num.charAt(1) == " " || num.charAt(3) == " "){
      throw new Error("공백을 포함하지 않는 숫자를 입력하세요.")
    }else if(num.length !== 3){
      throw new Error("3자리 숫자를 입력하세요.");
    }else if(num.charAt(0) == num.charAt(1) || num.charAt(0) == num.charAt(2) || num.charAt(1) == num.charAt(2)){
      throw new Error("중복되지 않는 숫자를 입력하세요.");
    }
  }

  getRandomNum(){
    const com_num = [];
    while(com_num.length < 3){
      const randomNum = MissionUtils.Random.pickNumberInRange(1,9);
      if(!com_num.includes(randomNum)){
        com_num.push(randomNum);
      }
    }
    return com_num;
  }

}

module.exports = App;
