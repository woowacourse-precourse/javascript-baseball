const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("구현 기능 목록 테스트", () => {
    
    
  });