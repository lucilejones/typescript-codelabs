// functions combined with types
// there are different places where types can be assigned
function add(a: number, b: number){
    return a + b;
}
// TS will automatically infer a type for the return value which we can see if we hover over add
// we can set the return type by adding a colon after the function parameter list
function subtract(a: number, b: number): number {
    return a - b;
}
// we don't necessarily need to set it if the inference is correct

// a special return type
function printOutput(value: any) {
    console.log(value);
}
// this function doesn't return anything; it has no return statement
// so its return type is void (similar to null or undefined, but only used for functions)

