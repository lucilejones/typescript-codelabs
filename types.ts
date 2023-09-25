// type inference
// often create a variable and immediately assign a value

let course = 'React - The Complete Guide';
// TS will infer the type of this variable as a string
// we'll get an error if we try to assign course to a number, course = 1234;
// we can write let course: string = 'React - The Complete Guide' 
// though maybe that is a bit redundant and use inference where possible


// Union Types
// sometimes we want to allow multiple different types
// maybe we want to allow both strings and numbers. or more than one kind of object
let highSchoolCourse: string | number = 'Angular Basics';
highSchoolCourse = 1234;

// another example
let personName: string | string[];
// here this could allow a string or an array of strings (that would have first name, last name, etc)


// Type Aliases
// define our own base type in which a more complex type definition is stored
// and then use that type aliases instead of repeating entire type definitions
// we can use the type keyword, then use whatever we'd like for the type name,
// then the type definition
type Person = {
    name: string;
    age: number;
};
// then use the alias in all the places we need it
let individual: Person;

let communityMembers: Person[];