class Validation{
    static number_input_valid = function(number){
        let number_format = /^[0-9]+$/;
        if(!number_format.test(number)){
            throw new Error("숫자만 입력하십시오.");
        }
        if(!(number.length==3)){
            throw new Error("숫자 3개를 입력하세요.");
        }
        if(!find_duplicate_number(number)){
            throw new Error("서로 다른 숫자를 입력하세요.")
        }
    };

    static endgame_choice_valid=function(number){
        let number_format = /^[0-9]+$/;
        if(!number_format.test(number)){
            throw new Error("숫자만 입력하십시오.");
        }
        if(!(number=="1"||number=="2")){
            throw new Error("1과 2 중 숫자를 입력하십시오.");
        }
    };
}

const find_duplicate_number = function(number){
    if(number[0]==number[1]) return 0;
    if(number[0]==number[2]) return 0;
    if(number[1]==number[2]) return 0;
    return 1;
}
module.exports = Validation;