function App () {
  this.play = () => {
    const getRandomNumber = (MIN_RANDOM_NUIMBER, MAX_RANDOM_NUMBER) => {
      const randomNumberArray = [];
      while (randomNumberArray.length < VALID_NUMBER_LENGTH) {
        const randomNumber = MissionUtils.Random.pickNumberInRange(
          MIN_RANDOM_NUIMBER,
          MAX_RANDOM_NUMBER
        );
        if (!randomNumberArray.includes(randomNumber)) {
          randomNumberArray.push(randomNumber);
        }
      }
      return randomNumberArray.join('');
    }

    function matchNumber (num1, num2) {
      let strike = 0;
      let ball = 0;
      const userInput = num1.split('').map(char => Number(char));
      const computerInput = num2.split('').map(char => Number(char));
  
      userInput.forEach((element, index) => {
        if (computerInput[index] === element) {
          strike += 1;
          return;
        }
        if (computerInput.includes(element)){
            ball += 1;
        }
      })
      let result = [ball, strike];
      return result;
    }
    
  }
}

module.exports = App;

