const FirstAnnouncemunt = require("../src/components/firstAnnouncement");
const MissionUtils = require("@woowacourse/mission-utils");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("게임 시작멘트 출력", () => {
  const logSpy = getLogSpy();
  it("correct comment", () => {
    FirstAnnouncemunt();
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("숫자 야구 게임을 시작합니다.")
    );
  });
});
