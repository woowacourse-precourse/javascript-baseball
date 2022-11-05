/*const MissionUtils = require("@woowacourse/mission-utils");
class App {
  play(){
  }
}*/
class Computer {
  constructor(computer_number){
    this.computer_number=computer_number;
  }
  getcomputer_number(){
    this.computer_number=[];
    while (this.computer_number.length<3){
      const number=MissionUtils.Random.pickNumberInRange(1,9);
      if(!this.computer_number.includes(number)){
        this.computer_number.push(number);
      }
    }
    return this.computer_number;
  }
}
computer=new Computer()
console.log(computer.getcomputer_number());

//module.exports = App;*/
