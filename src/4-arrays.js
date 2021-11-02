//arrays
const arra = [1,2,3,4];
let arra2 = [...arra,5];
console.log(arra2);
let arra3 = arra2.map(function(number){
    return number * 2;
});
console.log(arra3);