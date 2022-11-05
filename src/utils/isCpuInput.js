const { MissionUtils } = window;
// 랜덤으로 1~9까지 3개의 숫자를 생성
function isCpuInput() {
	const computer = [];

	while (computer.length < 3) {
		const number = MissionUtils.Random.pickNumberInRange(1, 9);

		if (!computer.includes(number)) {
			computer.push(number);
		}
	}
	return computer.join("");
}

export default isCpuInput;
