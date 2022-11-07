
class App {
  constructor(computerNum){
    this.computerNum = computerNum;
  }
  play() { 
    this.random();
  }
  random(){
    this.computerNum = setRandomNumberComputer();
  }

}

function setRandomNumberComputer(){
  const computer = [];
  while(computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if(!computer.includes(number)){
      computer.push(number);
    }
  }
  return computer;
}
 

const app = new App();

MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
while(isFinish == 1){
  app.play();
}

//종료


module.exports = App;
