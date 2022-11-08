const App = require("./App");

class Validation{
    static number_input_valid=function checkUserInputValid(number){
        let check_number = /^[0-9]+$/;
        if(!check_number.test(number)){
            throw new Error("숫자만 입력하십시오.");
        }
        if(!(number.length==3)){
            throw new Error("숫자 3개를 입력하세요.");
        }
    };
    static endgame_choice_valid=function checkChoiceInputValid(number){
        let check_number = /^[0-9]+$/;
        if(!check_number.test(number)){
            throw new Error("숫자만 입력하십시오.");
        }
        if(!(number=="1"||number=="2")){
            throw new Error("1과 2 중 숫자를 입력하십시오.");
        }
    };
    
}

module.exports = Validation;