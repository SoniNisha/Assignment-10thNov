function generateArray (a,b) {
    let arr = new Array();
    for(let i = a; i <= b; i++) {
        arr.push(i);
    }
    return arr;
}

let reqArray = generateArray(2,15);
console.log(reqArray);