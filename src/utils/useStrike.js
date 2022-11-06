function useStrike(original, compared) {
	return Array.from(original).filter((_, el) => original[el] === compared[el])
		.length;
}

export default useStrike;
