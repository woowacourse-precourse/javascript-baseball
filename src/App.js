const MissionUtils = require("@woowacourse/mission-utils");
class App {
  comInput=[]
  PlayerInput=[]
  setComInput(){
    for(let i=0;i<3;i++){
      this.comInput.push(MissionUtils.Random.pickNumberInRange(1, 9))
    }
    return this.comInput
  }

  resetComInput(){
    this.comInput=[]
  }

  setPlayerInput(ans){
    this.PlayerInput=[]
    for(let i=0;i<3;i++){
      this.PlayerInput.push(Number(ans[i]))
    }
    return this.PlayerInput
  }

  start(){
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.')
    MissionUtils.Console.readLine('숫자를 입력해주세요:', (answer) => {
    this.resetComInput()
    this.setComInput()
    console.log(this.setPlayerInput(answer))
    });
  }



  
}
const app = new App
app.start()
// module.exports = App;
