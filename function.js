const hello = () => {
    console.log("Hey how are you.I am toh fine yar");
}
const sum = (p, q) => {
    return p + q;
}

function one(x, y) {
    console.log("Done");
    //return 1+(x+y)/2;
    return Math.round(1 + (x + y) / 2);
}
let a = 1;
let b = 2;
let c = 3;
hello();
console.log("one Avg of a,b", one(a, b));
console.log("one Avg of b,c", one(b, c));
console.log("one Avg of a,c", one(a, c));
console.log(sum(30, 60));