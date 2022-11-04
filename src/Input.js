const MissionUtils = require('@woowacourse/mission-utils');
/*
MissionUtils의 Console로 숫자 입력받아서 입력받은 값 리턴
*/
const Inputobj = {};
Inputobj.InputStr = '';
Inputobj.GetInput = function () {
  MissionUtils.readLine('숫자를 입력해주세요 : ', (InputNumber) => {
    Inputobj.InputStr = InputNumber;
  });
  MissionUtils.Console.close();
};

module.exports = Inputobj.InputStr;
