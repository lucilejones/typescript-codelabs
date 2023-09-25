// more complex types
// arrays

let hobbies: string[];
// this tells TS that we want to have an array of strings
hobbies = ['sports', 'cooking', 'hiking'];


// objects
let person: {
    name: string;
    age: number;
};
// here we're creating a type assignment

person = {
    name: 'Max',
    age: 32
};
// typescript by default allows us to store any value in a variable (type: any)
// typically should not use
// we want to make very clear what kind of object can be stored in person

// person = {
//     isEmployee: true;
// }
// the above will throw an error because isEmployee is not a defined part of the object


// combine arrays and objects
let people: {
    name: string;
    age: number;
}[];
// this is saying we want to create an array of objects, each with a name and age
