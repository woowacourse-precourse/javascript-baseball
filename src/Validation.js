const App = require("./App");

class Validation{
    static check_input_valid=function checkUserInputValid(number){
        let check_number = /^[0-9]+$/;
        if(!check_number.test(number)){
            throw new Error("숫자만 입력하십시오.");
        }
    };
}

module.exports = Validation;