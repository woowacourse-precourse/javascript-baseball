import useStrike from "./utils/useStrike";

function useBall(original, target) {
	const count = Array.from(original).filter(el => target.includes(el)).length;
	return count - useStrike(original, target);
}

export default useBall;
