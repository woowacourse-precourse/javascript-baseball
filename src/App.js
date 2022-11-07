function starGame() {
  console.log("숫자 야구 게임을 시작합니다.");
}

function makeRandomNum() {
  let ranNumArr = [];
  let ranNum = 0;
  for (let i = 0; i < 3; i++) {
    ranNumArr.push(Math.floor(Math.random()*9+1));
    if (ranNumArr[i] == ranNumArr[i-1] || ranNumArr[i] == ranNumArr[i-2]) {
      ranNumArr.pop();
      i--;
    }
  }
  ranNum = ranNumArr.map(Number).join('');
  return ranNum;
}

starGame();
const computerNum = makeRandomNum();

module.exports = App;