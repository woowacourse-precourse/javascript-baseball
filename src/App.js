// 컴퓨터의 수 3자리 구하기.
const machinNum = [];
while (machinNum.length < 3) {
  const number = MissionUtils.Random.pickNumberInRange(1, 9);
  if (!machinNum.includes(number)) {
    machinNum.push(number);
  }
}
console.log(machinNum.join(""));



class App {
  play() { }



}


// module.exports = App;

