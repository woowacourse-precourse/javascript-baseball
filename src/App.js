class App {
  play() {
    const nums = [1,2,3,4,5,6,7,8,9];
    console.log(this.getRandomNums(nums,3).length)
  }

  getRandomNums(nums, count) {
    let result = [];
    if (count === 1) return nums.map(num => [num]);
    
    nums.forEach((fixed,index,self) => {
      const rest = [...self.slice(0, index), ...self.slice(index + 1)];
  
      const randomNums = this.getRandomNums(rest, count - 1);
  
      const attached = randomNums.map(randomNum => [fixed, ...randomNum]);
  
      result = [...result, ...attached]
    });
    return result;
  }
}

const app = new App();

app.play();

// module.exports = App;
