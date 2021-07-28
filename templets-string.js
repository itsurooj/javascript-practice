
// Templetes Strings 

// Concatination

var user = "Urooj Fatima";

var b = 2021;


var a = ` Hello ${user} <br> `;

document.write(a);
console.log(a);

document.write(`  ${a} Wellcome to ${b}`);

console.log(`       ${a} Wellcome to ${b} `);



// Functions

var fname = "urooj";
var lname = "fatima";

function fullname(fname, lname){
    
    return `${fname} ${lname}`;
}

let hello = `Hello ${fullname(fname , lname)}`;
console.log(hello);