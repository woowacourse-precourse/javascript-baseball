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
        if(!duplicate_number(number)){
            throw new Error("서로 다른 숫자를 입력하세요.")
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
const duplicate_number = function duplicate_number(n){
    if(n[0]==n[1]) return 0;
    if(n[0]==n[2]) return 0;
    if(n[1]==n[2]) return 0;
    return 1;
}

module.exports = Validation;