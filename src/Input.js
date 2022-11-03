const MissionUtils = require('@woowacourse/mission-utils');

/*
MissionUtils의 Console로 숫자 입력받아서 입력받은 값 리턴
*/
const Inputobj = {};
Inputobj.GetInputNumber = function () {
  let InputNumber;
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (Number) => {
    InputNumber = Number;
  });
  return InputNumber;
};

module.exports = Inputobj;
