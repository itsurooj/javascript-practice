
// Slice
var a = ["ali", "Amina", "praveen", "Memoona","Raheela"];

document.write("<h3>"+ a +"</h3>");

var b = a.slice(1,4);

document.write("<h3>"+ b +"</h3>");

// Splice
document.write("<h1>Splice Function</h1>")

var c = ["ali", "Amina", "praveen", "Memoona",];

document.write("<h3>"+ c+"</h3>");

c.splice(2,0,"Neha","Razia");

document.write("<h3>"+ c+"</h3>");

// is Array()

document.write("<h1>IS Array Function</h1>");
var g = 20 ;

var d = Array.isArray(a);

document.write("<h3>"+ d+"</h3>");

var e = Array.isArray(g);

document.write("<h3>"+ e+"</h3>");

if (Array.isArray(a)){
    document.write("it is an array");

}
else{

    document.write("it is not an array");

    
}











