//Primitive Datatypes

let a = 10;
let b = null;
let c = true;
let d = BigInt("598");
let e = "Bappa";
let f = Symbol("I am a tiny symbol");
let g = undefined;
console.log(a, b, c, d, e, f, g);
console.log(typeof d);

//NonPrimitive Datatypes
//Object 
const item = {
    "Harry": true,
    "Shubh": false,
    "Lovi": 98,
    "Rohu": undefined
}
console.log(item["Harry"]);
console.log(typeof item);