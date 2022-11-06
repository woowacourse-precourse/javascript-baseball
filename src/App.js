const MissionUtils = require("@woowacourse/mission-utils");    

const ball_cnt = (input_num, computer_num) => {
  let input_num_str = String(input_num)
  let input_computer_str = String(computer_num)
  result_cnt = 0
  for (let i = 0; i < input_computer_str.length; i++){
      if (input_num_str[i]!==input_computer_str[i] && input_computer_str.includes(input_num_str[i])){
          result_cnt += 1
      }
  }
  return result_cnt
}

const strike_cnt = (input_num, computer_num) => {
  let input_num_str = String(input_num)
  let input_computer_str = String(computer_num)
  result_cnt = 0
  for (let i = 0; i < input_computer_str.length; i++){
      if (input_num_str[i]===input_computer_str[i]){
          result_cnt += 1
      }
  }
  return result_cnt
}

class App {
  play() {}
}

module.exports = App;
