// ✅ Defining Functions

    // define a function 'printTemp' using function declaration that returns 'Today's temperature is 90 degrees fahrenheit'

        // function printTemp() {
        //     return "Today's temperature is 90 degrees fahrenheit";
        // } 

        // 💡 Check Answer: 
        // console.log(printTemp());

    // define a function 'printTemp' using function expression that returns 'Today's temperature is 90 degrees fahrenheit'

        // const printTemp = function () {
        //     return "Today's temperature is 90 degrees fahrenheit";
        // }

        // 💡 Check Answer: 
        // console.log(printTemp());

    // define a function 'printTemp' using arrow syntax that returns 'Today's temperature is 90 degrees fahrenheit'
    
        // Explicit Return
        // const printTemp = () => {
        //     return "Today's temperature is 90 degrees fahrenheit"
        // };
        
        // Implicit Return
        // const printTemp = () => "Today's temperature is 90 degrees fahrenheit";
        // const printTemp = () => (
        //     "Today's temperature is 90 degrees fahrenheit"
        // );

        // 💡 Check Answer: 
        // console.log(printTemp());

// ✅ Referencing vs. Invoking Functions

    // function printTemp() {
    //     return "Some temp";
    // }

    // function someFunction() {
    //     console.log(printTemp());
    // }

    // print a reference to the 'printTemp' function

    // console.log(printTemp);

    // someFunction();

    // call function and evaluate logic
    
// ✅ Parameters vs. Arguments

    // Parameters go with function definitions, arguments go with function invocations

    // using the printTemp function again, let's define a parameter 'temperature'

    // function printTemp(temperature) {
    //     return "Some temperature";
    // }

    // how can we use the paramater to make our code more dynamic?

    // function printTemp(temperature) {
    //     return `The temperature is: ${temperature}`;
    // }

    // now invoke the function and pass in an argument

    // console.log(
    //     printTemp(75)
    // );


// ✅ First Class / Higher Order Functions

    // regular first class function => can treated like any other JS object

        // function printTemp(temperature) {
        //     return `My temperature is ${temperature}`;
        // }

        // let myString = printTemp(50);

        // printTemp.status = "posted";

    // higher order function => accepts another function as a parameter or returns a function
    // https://www.codecademy.com/learn/game-dev-learn-javascript-higher-order-functions-and-iterators/modules/game-dev-learn-javascript-iterators/cheatsheet

        // function higherOrder(someFunction) {
        //     let result = someFunction();
        //     console.log(result);
        // }

        // higherOrder(printTemp);

// ✅ Scope

    // Global Scope

        // let x = 5;

        // function myFunction() {
        //     console.log(x);
        // }

        // function anotherFunction() {
        //     console.log(x);
        // }

        // myFunction();
        // anotherFunction();

    // Function Scope

        // function myFunction() {
        //     let x = 5;
        //     console.log(x);
        // }

        // 🚫 triggers "Uncaught ReferenceError: x is not defined" error
        // console.log(x);

// -------------------------------------------

console.log("------------------------");
console.log("⬇️ Break Out Activities ⬇️");
console.log("🚨 Comment Out Lecture Code Above Before Starting 🚨");
console.log("💡 Use console.log() To Check Answers 💡");
console.log("------------------------");

// 🚧 Break Out Activity 1: Defining, Declaring, and Invoking Functions 

    // ❗ Define a function that takes two numbers as arguments and returns their sum.

        // Example: addNumbers(5, 5) ➞ 10

        function addNumbers(a, b) {
            return a + b;
        }

        // 💡 Check Answer: 
        console.log(addNumbers(5, 5));

        // ✨ BONUS: Try providing a default value for one of your arguments.    

        // function addNumbers(a, b = 0) {
        //     return a + b;
        // }

    // ❗ Define a function that accepts a parameter (minutes) and converts it to seconds.

        // Example: convert(6) ➞ 360

        function convert(minutes) {
            return minutes * 60;
        }

        console.log(convert(6));

    // ❗ Define a function that takes any number between 1 and 1000. Sum all the numbers 
    // from 1 to the number passed to the function. For instance, if the input is 5 then 
    // your function should return 15 because 1 + 2 + 3 + 4 + 5 = 15.

        // Example: sumNumbers(5) ➞ 15

        // using one function

            function sumNumbers(n) {
                 // arithmetic progression => http://www.maths.surrey.ac.uk/hosted-sites/R.Knott/runsums/triNbProof.html
                 return n * (n + 1) / 2;
            }

            console.log(sumNumbers(5));

        // using two functions / leveraging global scope
        
            // function sumTo(n) {
            //     return n * (n + 1) / 2;
            // }

            // function sumNumbers(n) {
            //     return sumTo(n);
            // }

            // console.log(sumNumbers(5));

// 🚧 Break Out Activity 2: Creating / Implementing Higher Order Functions

    // ❗ Define a function, compareFunctions(), that will be passed two parameterless functions, 
    // first and second. compareFunctions() should call each function and return a string indicating 
    // which function returned the larger number.

        // If first() returns the larger number, return the string "First Function is Higher!". 
        // If second() returns the larger number, return the string "Second Function is Higher!". 
        // If the functions return the same number, return the string "Draw!".
    
        // Example: compareFunctions(() => 1, () => 10) ➞ "Second Function is Higher!"
        // Example: compareFunctions(() => 10, () => 1) ➞ "First Function is Higher!"
        // Example: compareFunctions(() => 10, () => 10) ➞ "Draw!"

    function compareFunctions(firstFunction, secondFunction) {
        
        // invoke each function just once and capture return values to optimize 
        // performance. each time we unnecessarily invoke a function in our code, 
        // we end up using excess processing power.
        const firstReturn = firstFunction();
        const secondReturn = secondFunction();

        if (firstReturn > secondReturn) {
            return "First Function Return is Higher!"
        } else if (secondReturn > firstReturn) {
            return "Second Function Return is Higher!"
        } else {
            return "Draw!"
        }
    }

    // passing in anonymous (unnamed), parameterless functions
    
        console.log(compareFunctions(() => 10, () => 1));
        console.log(compareFunctions(() => 1, () => 10));
        console.log(compareFunctions(() => 10, () => 10));

    // we can also define these functions as consts...
    
        // const firstFunction = () => 1;
        // const secondFunction = () => 10;

    // ...and pass those consts as arguments for improved readability
        
    // console.log(compareFunctions(firstFunction, secondFunction));

// 🚧 Break Out Activity 3: Advanced Functions

    // ❗ Define a function that reverses all the words in a sentence beginning with a particular letter.

        // Reverse the words themselves instead of the entire sentence.

        // All characters in any sentence should remain in lower case.

        // Example: reverseWords("sally sells seashells by the sea shore", "s") ➞ "yllas slles sllehsaes by the aes erohs"

    // 🚨 Note that this solution makes use of the Array method ".map", which we will cover more in depth during our next lecture.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

    // ❗ There are far more advanced solutions possible for this exercise, and I've intentionally laid out each step for greater
    // clarity. I'd encourage you all to refactor this solution and explore different ways that you can improve it. 

    function reverseWords(oldSentence, letter) {
        
        // break apart "sentence" along each single space character into an array of originalWords
        let oldWords = oldSentence.split(' ');

        // "map" over each word and store returned values in an array of newWords
        let newWords = oldWords.map(word => {
            
            // if the first letter of "word" matches "letter"...
            if (word[0] === letter) {

                // break apart "word" along each empty space character into an array of oldCharacters
                let oldCharacters = word.split('');

                // reverse() the ordering of elements in oldCharacters 
                oldCharacters.reverse();
                
                // and merge oldCharacters back into a string (reversedWord) using join()
                let reversedWord = oldCharacters.join('');

                // before returning reversedWord and adding it to newWords
                return reversedWord
            
            // in all other cases...
            } else {

                // ... return word / add it to newWords anyway
                return word;
            }
        });

        // merge newWords back into a string (newSentence)
        let newSentence = newWords.join(' ');

        // return a newSentence with matching words reversed
        return newSentence;
    }

    console.log(reverseWords("sally sells seashells by the sea shore", "s"));