const MissionUtils = require("@woowacourse/mission-utils");
const {ANSWER_LENGTH} = require("../constant/constant");

const compareNumbers = (userInput,answerInput) => {
    const result = {
        strike : 0,
        ball : 0,
    };

    userInput = userInput.split("");
    answerInput = answerInput.split("");
    
    for(let i=0; i<ANSWER_LENGTH; i++){     
        for(let j=0; j<ANSWER_LENGTH; j++){ 
            if(userInput[i] === answerInput[j]){
                if(i===j){ 
                    result.strike++;
                } else if(i !== j) { 
                    result.ball++;
                }          
            }
        }
    }
    return result;
  };

module.exports = compareNumbers;