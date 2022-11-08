const checkInput = (input) => {
    if(input.length !== 3){
      return false;
    }
    if (isNaN(input)){
      return false;
    }
  
    let newArray = [];
    for (let i = 0;  i < input.length; i++){
      if(!newArray.includes(input[i])){
        newArray.push(input[i]);
      } else{
        return false;
      }
    }
    return true;
}
  
  
  const getInputIntArray = (input) => {
    const userInputArray = [...input];
    const newArray = userInputArray.map((num) => parseInt(num));
    return newArray;
};

module.exports = {checkInput, getInputIntArray};