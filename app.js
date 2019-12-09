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

const mixedArray = [22, "banana", true]
mixedArray.forEach(element => {
    console.log(typeof(element), element);
});

console.log("Banana is", mixedArray[1].length, "chars long")