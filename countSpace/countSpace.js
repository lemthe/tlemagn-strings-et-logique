function countSpace(string) {
    let count=0;
    for (const element of string) {
        if (element==0) {
            count++;
        }
    }
    return count-1;
}

module.exports=countSpace;