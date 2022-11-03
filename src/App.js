class App {
  nums = [1,2,3,4,5,6,7,8,9];
  RANDOM_CASES = this.getRandomCases(this.nums,3);
  
  play() {
    const randomNum = this.RANDOM_CASES[this.randomIndex]
    
  }

  getRandomCases(nums, count) {
    let result = [];
    if (count === 1) return nums.map(num => [num]);
    
    nums.forEach((fixed,index,self) => {
      const rest = [...self.slice(0, index), ...self.slice(index + 1)];
  
      const randomCases = this.getRandomCases(rest, count - 1);
  
      const attached = randomCases.map(randomCase => [fixed, ...randomCase]);
  
      result = [...result, ...attached]
    });
    return result;
  }

  get randomIndex() {
    return Math.floor(Math.random() * this.RANDOM_CASES.length);
  }
}

const app = new App();

app.play();

// module.exports = App;
