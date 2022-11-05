const MissionUtils = require("@woowacourse/mission-utils");
const initNumber = require("../src/initNumber");

const compareNumber = () => {
  const startNumber = initNumber();
  if (startNumber === MissionUtils.Console.readLine()) {
    console.log("굿잡");
  }
};

compareNumber();
