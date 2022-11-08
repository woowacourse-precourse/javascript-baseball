const MissionUtils = require("@woowacourse/mission-utils");

class App {
	play() {
		MissionUtil.console.print("숫자 야구 게임을 시작합니다.");

		const comNumArr = [];

		const number = MissionUtils.Random.pickNumberInRange(1, 9);
		if (!comNumArr.includes(number)) {
			comNumArr.push(number);
		}
	}
}
