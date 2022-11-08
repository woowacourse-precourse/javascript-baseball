const MissionUtils = require('@woowacourse/mission-utils')

class App {
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다')

    MissionUtils.Console.readLine('숫자를 입력해 주세요', (num) => {
      const playerNum = num.split('').map(Number) //내가 입력
      const comNum = MissionUtils.Random.pickNumberInRange(1, 9, 3) //컴퓨터가 입력

      this.vaildCheck(playerNum)
    })
  }


  // vaildCheck(playerNum){

  //   //길이가 3 이상 이거나 값이 입력되지 않았을 때
  //   if(playerNum.length>3 && playerNum.length===0){
  //     //에러 throw
  //     MissionUtils.Console.close();
      
  //   }

  //   //숫자 형태로 입력되지 않았을 때
  //   playerNum.map(i=>{
  //     if(typeof(i)!=='number'){
  //       //에러
  //       MissionUtils.Console.close();
  //     }
  //   })
    
  // }
}

//유효성 안 맞으면 close?
//try catch로 나누고 
//try에는 유효성 검사를 해주고 검사 로직에서 유효성 안 맞으면 throw하고
//catch로 받아서 close?

module.exports = App
