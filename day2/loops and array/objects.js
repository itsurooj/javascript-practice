// object

let a  =   {

    firstname : "Ali",
    lastname : "baloch",

    email : "example65@gmail.com",
    age : "20",
    country : "pakistan",   
    students : ['ali','sobia','fatima','naeema'],
    salary : function(){
        return 25000;



    },
    fullname : function(){
        return this.firstname+" "+this.lastname;

    }

}


console.log(a);
console.log(a.email);
console.log(a.salary());
console.log(a.fullname());


// object Methods

let person  = new Object();

person.fname ='naeema';
person.lname ='baloch';
person.email ='naeema@yhoo.com';

console.log(person.fname);
console.log(person.lname);
console.log(person.email);

// array with Objects
    
let students = [

    {name : 'ali', rollno : 33, email :'ali@gmail.com'},
    {name : 'sobia', rollno : 34, email :'sobia@gmail.com'},
    {name : 'fatima', rollno : 35, email :'fatima@gmail.com'}
];
console.log(students);


for(i = 0; i< students.length; i++){

    console.log(students[i]);


}