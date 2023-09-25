// can define blueprints for objects
class Student {
    // define properties
    // firstName: string;
    // lastName: string;
    // age: number;
    // private courses: string[];

    // the constructor is the default method that will be called when we instantiate a new object based on that class
    // assign values to the properties through the constructor
    // constructor(first: string, last: string, age: number, courses: string[]) {
    //     this.firstName = first;
    //     this.lastName = last;
    //     this.age = age;
    //     this.courses = courses;
    // }

    // in TS you can do the above all in one step:
    constructor(
        public firstName: string,
        public lastName: string,
        public age: number,
        private courses: string[]
    ) {}
    // this is shorthand notaction for defining certain properties of this class
    // and their types, and for letting the user assign values to those properties
    // when that class is instantiated

    enroll(courseName: string) {
        this.courses.push(courseName)
    }

    listCourses() {
        return this.courses.slice();
    }
}

const student = new Student('Max', 'Schwarz', 32, ['Angular']);
student.enroll('React');

// if courses doesn't have the private keyword, then
// student.courses => Angular, React

// private properties and methods can only be used from inside the class
// we can't call student.courses because it's private, but we can call student.listCourses


