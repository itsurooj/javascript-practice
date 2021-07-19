let ary = [10, 20, 30,40, 50, 60];


let sum = 0;
for(a =0; a <= 5; a++ ){

    console.log(ary[a]);

    sum = sum + ary[a];
    

}
console.log("total sum "+sum);

// Another way to create array

let b = new Array ();


b [0] = 'ali';
b [1] = 'sara';

b [2] = 'sana';

b [3] = 'faizan';

for(i = 0; i <= 3; i++){

    console.log(b[i]);
}
// Multidimensional Array

let m_array =[


    ["ali", 18, "male", "Bcs"],

    ["faizan", 19, "male", "Bcom"],

    ["danish", 20, "male", "Bcs"],

    ["sara", 18, "female", "Bcs"],
];


console.log("<table> border='2px'");

for(g = 0; g <= 3; g++){

    console.log("<tr>");

    console.log(m_array[g]);


    for(h =0; h <= 3; h++){

       
        console.log("<td>"+m_array[g][h]+"</td>");

    }
    console.log("</tr>");
    

}
    
    console.log("</table>");

    // change the array value 

    
    let d_array = ["asma", 19, "female"];

    d_array[1]= 20;
    console.log(d_array);

    delete d_array[1];
    console.log(d_array);

    // Methods of Array

    // Sorting

    let method_array  = ['mujtba','eman','zareen','asma','ali'];

    method_array.sort();

    console.log( method_array);

    // Reverse

    method_array.reverse();
    console.log( method_array);

    // Pop function
    method_array.pop();
    console.log( method_array);

    // Push function

    method_array.push('arsalan');
    console.log( method_array);



// Array method foreah

let j= [1,2,3,4,5];

j.forEach(function(value, index){

    console.log(index+" : "+value);

});
