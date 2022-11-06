const MissionUtils = require("@woowacourse/mission-utils");
const readLine=require('readline');
class App {
  play(){
  }
}

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

class Player{
  constructor(player_number){
    this.player_number=player_number;
  }
  getplayer_number(){
    Console.readLine('숫자를 입력하세요.',(number)=>{
      this.player_number=number;
      Console.close();
    })
  }
  player_numbercheck(player_number){
    if(player_number.length!=3||player_number[1]===player_number[2]||player_number[1]===player_number[3]||
      player_number[2]===player_number[3]||typeof player!='number'){
        throw new Error ("잘못된 입력입니다.")
      }
  }
}
player=new Player();
player.getplayer_number();
//module.exports = App;*/
