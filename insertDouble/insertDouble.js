function insertDouble(string){
    console.log(string
        .replaceAll('n', 'nn')
        .replaceAll('s', 'ss')
        .replaceAll('p', 'pp')
        .replaceAll('l', 'll'));
}
module.exports=insertDouble;
