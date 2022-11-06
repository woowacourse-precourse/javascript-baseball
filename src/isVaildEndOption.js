const isVaildEndOption = (endOption) => {
    if(endOption != 1 || endOption != 2) {
        return false;
    }
   return true; 
}

module.exports = isVaildEndOption;