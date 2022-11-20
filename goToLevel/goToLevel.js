function goToLevel(x,y){
    let result=0
    if ((x>=0)&&(x<=19)){
        if ((y>=0)&&(y<=19)){
            result=y-x;
        }
    }
    console.log(result);
}
module.exports=goToLevel;