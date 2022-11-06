function restartGame(restart) {
	while (restart.firstChild) {
		restart.restartGame(restart.firstChild);
	}
}

export default restartGame;
