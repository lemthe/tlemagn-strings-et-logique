function toNato(string){
    const nato = {
        a: "Alfa",
        b: "Bravo",
        c: "Charlie",
        d: "Delta",
        e: "Echo",
        f: "Foxtrot",
        g: "Golf",
        h: "Hotel",
        i: "India",
        j: "Juliett",
        k: "Kilo",
        l: "Lima",
        m: "Mike",
        n: "November",
        o: "Oscar",
        p: "Papa",
        q: "Quebec",
        r: "Romeo",
        s: "Sierra",
        t: "Tango",
        u: "Uniform",
        v: "Victor",
        w: "Whiskey",
        x: "Xray",
        y: "Yankee",
        z: "Zulu",
    };
    let string2=string.toLowerCase();
    const myArray = string2.split("");
    str="";
    for (let i=0;i<myArray.length;i++){
        if (nato[myArray[i]]){
            str+=nato[myArray[i]];
        } else if (!(myArray[i]==" ")){
            str+=[myArray[i]];
        } 
    }
    console.log(str);
}
module.exports=toNato;