const MissionUtils = require("@woowacourse/mission-utils");
class App {
  play() {
    console.log(rand_num());
  }
}

const rand_num = function computer_random_number() {
  const number_list = [];
  while (number_list.length < 3) {
    const single_digit = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!number_list.includes(single_digit)) {
      number_list.push(single_digit);
    }
  }
  const final_random_num = number_list.map((number) => number).join("");
  return final_random_num;
};

module.exports = App;
const app = new App();
app.play();
