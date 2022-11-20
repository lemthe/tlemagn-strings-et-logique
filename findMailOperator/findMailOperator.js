function findMailOperator(address){
    console.log(address.slice(address.indexOf("@")+1,address.indexOf(".",address.indexOf("@"))));
}

findMailOperator("elon.musk@gmail.com");
findMailOperator("laurie@rbean.io");

module.exports=findMailOperator;