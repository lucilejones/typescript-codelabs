// generics
function insertAtBeginning(array: any[], value: any) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updateArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
// updatedArray is inferred to be an array of type any
// TS won't automatically keep track of the values in updatedArray being numbers

// with the generics feature we can convert this function to a generic function
// using specific syntax
// we can define a generic type that will only be available inside the function
// typically T for type
// then we can use this type in our function, including the parameter list
// we say the array will be full of Ts (not any). and the value will be T

// then when we call the function TS will look at the concrete values of the arguments
// and it understands that the demoArray is an array of numbers and the -1 is a number
// and it will get that updatedArr will be an array of numbers

function genericExample<T>(array: T[], value: T) {
    const newArr = [value, ...array];
    return newArr;
}

const updatedArr = genericExample(demoArray, -1);
// and we'll get an error if we try to call
// updatedArr[0].split('');

// if we call the function with an array of strings, TS will also be able to correcly identify the type of the new array from that call
const stringArray = genericExample(['a', 'b', 'c'], 'd')

// generics allow us to combine flexibility and type safety
