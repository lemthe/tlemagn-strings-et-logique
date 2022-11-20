function onlyDigits(x){
    const myArray = x.split(" ");
    for (const element of myArray){
        if (!(Number.isInteger(+element))) {
            return false;
         } 
    }
    return true;

}
module.exports=onlyDigits;