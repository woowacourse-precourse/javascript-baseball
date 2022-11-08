const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.random_numbers = ''
    this.input_numbers = ''
  }

  play() {
    this.random_numbers = CreateRandomNum();
    MissionUtils.Console.print(this.random_numbers);
  }
}


function CreateRandomNum(){
  let randstr = "";
  while(randstr.length < 3){
    let randnum_each = MissionUtils.Random.pickNumberInRange(1, 9);
    randnum_each = randnum_each.toString();
    if(!randstr.includes(randnum_each))
      randstr = randstr + randnum_each;
  }
  return randstr;
}






const app = new App();
app.play();

// module.exports = App;
