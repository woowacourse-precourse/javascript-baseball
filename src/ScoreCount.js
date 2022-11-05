const ScoreCount = (input, Randomnumber) => {
  let inputarray = input.split('').map((a) => Number(a));
  let strike = 0,
      ball = 0,
      none = 0;
      
  for(let i=0; i<3; i++){
    if(Randomnumber.includes(inputarray[i])){
      if(inputarray[i] == Randomnumber[i]) strike += 1; 
      else ball += 1;   
    }
    else none += 1;
  };
  return [strike, ball, none];
}
  
module.exports = ScoreCount;