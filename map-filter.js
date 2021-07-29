// Map function

var ary = [1,2,3,4,5,6,10];

 b = ary.map(test);

 document.write("<h2>"+ b +"</h2>");

function test(x){

    return x*10;

}

// filter function


let ages = [10, 23, 34, 18, 9];

console.log(ages);

let c = ages.filter(checkage);

console.log(c);

function checkage(age){

    return age >= 18;
}



