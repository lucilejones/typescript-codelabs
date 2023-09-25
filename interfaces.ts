// interfaces are object type definitions
// we can define the structure, the type of any human object we want to create
interface Human {
    firstName: string;
    age: number;

    greet: () => void;
    // we don't add the method definition here; we don't add the actual code
    // just the type of that method 
    // this method will take no parameters and will return nothing
}

// we can use this interface as an object type
let max: Human;

// then we're only allowed to store an object to that value that has the correct structure
max = {
    firstName: 'Max',
    age: 32,
    greet() {
        console.log('Hello!')
    },
};

// we could do it with the type keyword instead: type Human = {}
// interfaces have an extra feature that the type keyword doesn't have
// interfaces can be implemented by classes and when they are they force classes to have the defined structure

// Angular has a couple interfaces which when we use them will force us to add certain features to the classes we define

// if we add the implements keyword it will implement our interface of Human before we start defining the class
class Instructor implements Human {
    firstName: string;
    age: number;
    greet() {
        console.log('Hi, there.')
    }
}
