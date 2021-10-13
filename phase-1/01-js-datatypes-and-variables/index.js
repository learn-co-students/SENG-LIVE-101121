// ✅ Using console.log()

    // console.log("Hey there!");

    // let x = 2;

    // let y = 2;

    // console.log(x + y);

// ✅ JS Data Types (Primitive)

    // String

        // let name = "Louis";

        // console.log(typeof "here");

        // console.log(typeof `My name is ${name}`);

    // Number

        // console.log(typeof 5.5);

    // Boolean

        // console.log(typeof true);

    // Undefined => empty value

        // console.log(typeof undefined);

        // let x;

        // x = 5;

        // console.log(x);

    // Null => absence of value

        // console.log(typeof null);

        // console.log(undefined === null);

        // let x = [];

        // console.log(x);

    // Symbol => unique identifier

        // let id = Symbol("test");

        // console.log(id);
    
    // BigInt => numbers larger than those JS can represent with a Number

        // let bigNum = BigInt(123456789101112131415);

        // console.log(typeof bigNum);

// ✅ let vs. const

    // 💡 what are main differences / use cases?

        // var someValue = "Louis";

        // var someValue;

    // let => expecting values to change

        // let x = 10;

        // let y = 5;

        // let z = x + y;

        // // ...

        // x = 15;

        // console.log(z);

    // const => expecting values to remain the same

        // const x = 10;

        // const x;
        
        // x = 5;

        // function someFunction() {
        //     return "Hello world!";
        // } 

        // const someFunction = () => {
        //     return "Hello world!";
        // }

        // someFunction(someValue);

// ✅ Conditional Statements

    // truthy / falsey values

    //     true

    //          5

    //         "hello"

    //     false

    //         null

    //         undefined

    // if...else

        // let x = "5";

        // // === also checks for data type
        // if (x === 5) {
        //     console.log("Equal to 5!");
        // } else {
        //     console.log("Not equal to 5!");
        // }

    // if...else if...else

        // let x = 5;

        // if (x > 5) {
        //     console.log("Greater than five!");
        //     // some
        //     // behaviors
        // } else if (x === 5) {
        //     console.log("Equal to five!");
        // } else {
        //     console.log("Less than five!");
        // }

    // ternary operator

        // let x = 5;

        // { CONDITION ? IF TRUE : IF FALSE }

        // { x === 5 ? console.log("Equal to five!") : console.log("Not equal to five!") }

console.log("------------------------");
console.log("⬇️ Break Out Activities ⬇️");
console.log("🚨 Comment Out Lecture Code Above Before Starting 🚨");
console.log("💡 Use console.log() To Check Answers 💡");
console.log("------------------------");

// 🚧 Break Out Activity 1: Using let vs. const

// Uncomment the code below to properly declare and assign a value to "x" using "const"

    // const x;

    const x = 5;

    // const x;

    console.log(`Success! x = ${x}`);
    
    // 🚨 Be sure to comment out any code above before proceeding to the next activity.

// Uncomment the code below to properly declare and assign a value to "y" using "let"

    // let y;

    let y = 5; 

    // let y;

    console.log(`Success! y = ${y}`);

    // 🚨 Be sure to comment out any code above before proceeding to the next activity.

// Uncomment the code below to get a successful response in console

    const a = 2;
    
    // a = 2;
    
    // let b;
    
    let b = 4;
    
    console.log(`Success! ${a} + ${a} = ${b}`);

    // 🚨 Be sure to comment out any code above before proceeding to the next activity.

// 🚧 Break Out Activity 2: Using if...else

    // 🚧 Set a value for "time" between 0 and 24
    let time = 12

    // 💡 If "time" is less than or equal to 11...
    if (time <= 11) {
        console.log(`${time} is in the AM.`)
    
    // 💡 In all other cases...
    } else {
        console.log(`${time} is in the PM.`)
    }

    // ✨ BONUS: Try refactoring the above expression using a ternary operator.

    { time <= 11 ? console.log(`${time} is in the AM.`) : console.log(`${time} is in the PM.`) }

    // 🚨 Be sure to comment out any code above before proceeding to the next activity.

// 🚧 Break Out Activity 3: Using if...else...if

    // We are given a variable "marks." Our task is to print:

    // - "AA" if marks is greater than 90.
    // - "AB" if marks is greater than 80 and less than or equal to 90.
    // - "BB" if marks is greater than 70 and less than or equal to 80.
    // - "BC" if marks is greater than 60 and less than or equal to 70.
    // - "CC" if marks is greater than 50 and less than or equal to 60.
    // - "CD" if marks is greater than 40 and less than or equal to 50.
    // - "DD" if marks is greater than 30 and less than or equal to 40.
    // - "FF" if marks is less than or equal to 30.

    // 🚨 Assign a value to "marks" between 0 and 100
    
    let marks = 100;

    // 🚨 Format your if...else if...else conditional below

    // ❗Try refactoring the below solution into a switch statement.
    // Is this the appropriate context for using one?
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

    if (marks > 90) {
        console.log("AA");
    } else if (marks > 80) {
        console.log("AB")
    } else if (marks > 70) {
        console.log("BB")
    } else if (marks > 60) {
        console.log("BC")
    } else if (marks > 50) {
        console.log("CC")
    } else if (marks > 40) {
        console.log("CD")
    } else if (marks > 30) {
        console.log("DD")
    } else {
        console.log("FF")
    }