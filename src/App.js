
class App {
  createNumber() {
    let three_digit = []
    let number = [1,2,3,4,5,6,7,8,9]
    for(let i =0; i <3; i++){
      let random_num = number.splice(Math.floor(Math.random()*(9-i)),1)[0]
      three_digit .push(random_num)
    }
    return three_digit.join("")
  }

  play(){
    const NUM = this.createNumber()
    console.log(NUM)
  
}
}

module.exports = App;


const app = new App();
app.play()