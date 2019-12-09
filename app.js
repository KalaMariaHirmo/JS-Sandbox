//alert("Hello from app.js")

const name = 'John';
const age = 25;
const job = "Software Developer";
const city = "Tallinn"
function hello(){
    return "Hello!";
}

//let html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' +  job + '</li><li>City: ' +  city + '</li></ul>';

let html =`
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${name} says: ${hello()}</li>
    </ul>
`;

document.body.innerHTML = html;

//get data type
console.log(typeof(job));
console.log(typeof(age));

//arrays
const numbers1 = [1,2,3,4,5];
console.log(numbers1);
console.log(typeof(numbers1));

const numbers2 = new Array(6,7,8,9,10);
//foreach 
numbers2.forEach(number => {
    console.log("Let count: ", number);
});
//more arrays
const mixedArray = [22, "banana", true]
mixedArray.forEach(element => {
    console.log(typeof(element), element);
});

console.log("Banana is", mixedArray[1].length, "chars long")

console.log("")
//adds a new element to the end
mixedArray.push("apple")
mixedArray.forEach(element=>{
    console.log("Updated array: ",element)
});

console.log("")
//adds an element to the front
mixedArray.unshift(1000);
mixedArray.forEach(element=>{
    console.log("Updated array: ",element)
});

console.log("")
//removes last element
mixedArray.pop();
//removes first element 
mixedArray.shift();
mixedArray.forEach(element=>{
    console.log("Updated array: ",element)
});

console.log("")
//removes an element at a certain position
mixedArray.splice(1,1);
mixedArray.forEach(element=>{
    console.log("Updated array: ",element)
});

//Object literals
const person = {
    firstName: "Joe",
    lastName: "Mama",
    age: 25,
    email: "JoeMama@gmail.com",
    hobbies: ['music', 'sports'],

    getYearOfBirth: function() {
        return 2019 - this.age;
    }
}

console.log("")

let val;
val = person;
val = person.firstName;
val = person.lastName;
val = person['lastName']
val = person.age;
val = person.hobbies[0];
val = person.getYearOfBirth();
console.log(val);

const people = [
    {name: "John", age: 25},
    {name: "Boomer", age: 69},
    {name: "Zoomer", age: 17},
]

people.forEach(person =>{
    console.log(person.name, "is", person.age, "years old.")
});