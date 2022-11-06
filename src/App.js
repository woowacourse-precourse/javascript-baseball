const MissionUtils = require("@woowacourse/mission-utils");
class App {
  comInput=[]
  PlayerInput=[]
  strike=0
  Ball=0
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

  getStrike(Player, comInput){
   this.strike=0
   for(let i=0;i<3;i++){
    if(Player[i]==comInput[i]){
      this.strike++;
    }
  }
  return this.strike
  }

  getBall(Player, comInput){
    this.Ball=0
    for(let i=0;i<3;i++){
      if((Player[i]!==comInput[i]) && comInput.includes(Player[i])){
        this.Ball++;
      }
    }
    return this.Ball
  }

  printResult(){
    if(this.Ball==0 && this.strike==0){
      console.log("낫싱")
    }
    else{
      console.log(`${this.strike}스트라이크 ${this.Ball}볼`)
    }
  }

  start(){
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.')
    MissionUtils.Console.readLine('숫자를 입력해주세요:', (answer) => {
    this.resetComInput()
    this.setComInput()
    this.setPlayerInput(answer)
    console.log(this.PlayerInput)
    console.log(this.comInput)
    this.getStrike(this.PlayerInput, this.comInput)
    this.getBall(this.PlayerInput, this.comInput)
    console.log(this.Ball, this.strike)
    this.printResult()
    });
  }
}
const app = new App
app.start()

// module.exports = App;
