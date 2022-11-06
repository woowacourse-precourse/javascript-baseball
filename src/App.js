import useBall from "./utils/useBall";
import useStrike from "./utils/useStrike";
import isCpuInput from "./utils/isCpuInput";
import restartGame from "./utils/restartGame";

class App {
	constructor(app, input, contanier) {
		this.app = app;
		this.input = input;
		this.contanier = contanier;
		this.cpuInput = isCpuInput();
	}

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

	restart(e) {
		e.preventDefault();
		restartGame(this.contanier);
		this.cpuInput = isCpuInput();
		this.input.value = "";
	}
}

module.exports = App;
