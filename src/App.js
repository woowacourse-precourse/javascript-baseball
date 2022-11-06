import useBall from "./utils/useBall";
import useStrike from "./utils/useStrike";

class App {
	static play(cpuInput, userInput) {
		if (cpuInput === userInput) return "성공";

		const ball = useBall(cpuInput, userInput);
		const strike = useStrike(cpuInput, userInput);

		if (ball === 0 && strike === 0) return "낫싱";

		let result = "";

		if (ball) result += `${ball}}볼`;
		if (strike) result += `${strike}스트라이크`;

		return result;
	}
}

module.exports = App;
