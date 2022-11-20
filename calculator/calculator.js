function calculator(x,y,operator) {
    let result="";
    if (operator=="+") {
        result=x+y;
    } else if (operator=="-") {
        result= x-y;
    } else if (operator=="*") {
        result= x*y;
    } else if (operator=="/") {
        result= x/y;
    } else if (operator=="%"){
        result=x%y;
    } else if (operator=="**"){
        result=x**y;
    }
    console.log("the result of " +x+ " " +operator+ " " +y+ " = " +result);
}
module.exports=calculator();


