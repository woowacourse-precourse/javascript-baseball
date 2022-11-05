class GameUtils {
  constructor() {}

  static userInputToNumberArr(text) {
    const splitString = text.split("");
    let userInputArr = [];
    splitString.forEach((char, index) => (userInputArr[index] = Number(char)));

    return userInputArr;
  }

  static evaluScore(user, computer) {
    const result = {};
    if (JSON.stringify(user) === JSON.stringify(computer)) {
      result.strike = 3;
      return result;
    }

    user.forEach((num,idx) => {
      if(isContain(num ,computer))
    })

    console.log(result)
  }
}

// const isContain = (number , arr) => {
//   return arr.includes
// };

module.exports = GameUtils;
