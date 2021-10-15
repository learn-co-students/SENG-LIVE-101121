// ❗ Use console.log() To Check Answers

// ✅ Creating & Accessing Objects

    // creating object literals

        // object with no properties (no key / value pairings)

            // const emptyObject = {};

        // object with single property (one key / value pair)

            // const oneProperty = {
            //     key: "value",
            // }

        // object with multiple properties of different data types (multiple key / value pairs)

            // const episode = {
            //     season: 4,
            //     num: 5,
            //     title: "The One with Joeys New Girlfriend",
            //     air_date: "October 30, 1997",
            //     run_time: "22 min",
            //     printEpisode: () => console.log(episode.title)
            // }; 

    // accessing object properties

        // bracket notation (in what situations would we need to use this?)

            // can use bracket notation for placeholders

            // function someFunction(myObject, myKey) {

            //     // myObject['myKey'] => looks for a key matching the string 'myKey' 
            //     return myObject[myKey];

            //     // myObject.myKey => looks for a key matching the string 'myKey' 
            //     // return myObject.myKey;
            // }

            // console.log(someFunction(episode, 1));            

        // dot notation (better for readability)

            // console.log(episode.season);
        
    // convert object properties and values into an array

        // let valuesArray = Object.values(episode);
        
        // valuesArray.forEach(value => {
        //     console.log(value);
        // })
        
        // console.log(Object.keys(episode));
        // console.log(Object.entries(episode));

// ✅ Modifying Objects

    // const episode = {
    //     season: 4,
    //     num: 5,
    //     title: "The One with Joeys New Girlfriend",
    //     air_date: "October 30, 1997",
    //     run_time: "22 min",
    //     printEpisode: () => console.log(episode.title)
    // }; 

    // destructively

        // adding a property
        
            // object.newKey = "new value";
            // object["newKey"] = "new value";

        // changing a property value
            
            // object.existingKey = "different value";
            // object["existingKey"] = "different value";

        // removing a property 
            
            // delete object.propertyToDelete

    // nondestructively

        // use the spread operator {...} to create a clone of the original object...

            // let newObject = {...oldObject};

        // ...that you can then modify without altering the original object
        
            // delete newObject.someKey;

// ✅ Iterating Over Objects vs. Arrays
        
    // what is one major distinction between looping and iterating?

        // looping => not bound by context of data structure

        // iteration => bound the context of data structure

    // for...in (iterate over keys of an object)

        // for (const key in object) {
        //     console.log(object[key]);
        // } 

    // for...of (iterate over values of an iterable object (e.g., array, string, etc.))

        // for (const value of myValues) {
        //     console.log(value);
        // }

// ✅ Prototypal Inheritance

    // every object contains a hidden property, [[Prototype]], which can be used to add other objects' methods and properties
    
        // firstPerson object
        // let firstPerson = {
        //     age: "25",
        //     canCode: true,
        //     sayHello: () => "Hello!", 
        // };
       
        // secondPerson object
        // let secondPerson = {
        //     age: "35",
            
        // //  inherit the properties and methods of firstPerson
        //     __proto__: firstPerson, 
        // };

    // "canCode" is now available as a property of secondPerson
    // console.log("The secondPerson canCode: " + secondPerson.canCode);
    // console.log("The secondPerson can sayHello: " + secondPerson.sayHello());
    // console.log("The secondPerson's age: " + secondPerson.age);

// -------------------------------------------

console.log("------------------------");
console.log("⬇️ Break Out Activities ⬇️");
console.log("🚨 Comment Out Lecture Code Above Before Starting 🚨");
console.log("💡 Use console.log() To Check Answers 💡");
console.log("------------------------");

// 🚧 Break Out Activity 1: Creating & Accessing Objects / Object Methods

    // 🚨 Comment out any conflicting code above before proceeding.

    // 1️⃣ Create a function that accepts an object (dimensions) and returns the computed volume.  

        // Example: computeVolume({ length: 2, width: 2, height: 2 }) => 8
        // Example: computeVolume({ length: 3, width: 5, height: 7 }) => 105

        // ❗ volume => length * width * height

        let dimensions = { length: 2, width: 2, height: 2 };

        function computeVolume(dimensions) {
            
            // directly access values using dot notation
            let computedVolume = dimensions.length * dimensions.width * dimensions.height;

            // ...or create an array of the "dimension" object's values
            // let valuesArray = Object.values(dimensions);

            // ...and use reduce() to multiply all dimensions in valuesArray
            // let computedVolume = valuesArray.reduce((previousComputation, currentDimension) =>
                
            //     // first iteration => 2 * 2
            //     // second iteration => 4 * 2
            //     previousComputation * currentDimension
            // );

            // ...or directly access valuesArray elements and multiply accordingly
            // let computedVolume = valuesArray[0] * valuesArray[1] * valuesArray[2];

            return computedVolume;
        }
        
        // ✅ Check Answer: 
        console.log(computeVolume(dimensions));

    // 2️⃣ Create a function that accepts an object (myObject) and converts it into / returns an array (myArray).
        
        // ❗ Each element of newArray should represent a key-value pairing from myObject
        
        // Example: convertToArray({ x: 1, y: 2, z: 3 }) => [["x", 1], ["y", 2], ["z", 3]]
        // Example: convertToArray({ firstName: "John", lastName: "Smith" }) => [["firstName", "John"], ["lastName", "Smith"]]

        // ❗ If the provided object (myObject) is empty, return an empty array
        
        // Example: convertToArray({}) => []

        // 💡 Consider using a combination of Object.keys and map() in your solution.

            let myObject = { x: 1, y: 2, z: 3 };

            function convertToArray(myObject) {
                if (myObject === {}) {
                    return [];
                }
                
                // Object.entries => returns an array of arrays (key / value pairings)
                return Object.entries(myObject);
            }


        // ✅ Check Answer: 
        console.log(convertToArray(myObject));

// 🚧 Break Out Activity 2: Modifying / Iterating Over Objects

    // 🚨 Comment out any conflicting code above before proceeding.

    // 1️⃣ Create a function that accepts an object (normalObject), inverts its keys / values, and returns the new object (invertedObject)

        // Example: invertObject({ x: 1, y: 2, z: 3 }) => { 1: x, 2: y, 3: z }

        // 💡 Try making use of a "for...in" iterator to iterate over normalObject's keys.

        let oldObject = { x: 1, y: 2, z: 3 };

        function invertObject(normalObject) {
        
            let newObject = {};

            for (const oldKey in oldObject) {

                // capture value using oldObject[key] and set as key
                // using bracket notation to assign 
                let newValue = oldObject[oldKey];
                newObject[newValue] = oldKey;

                // first iteration
                // oldObject["x"] => 1 
                // newObject["1"] = "x"; => { 1: "x" }

                // second iteration
                // oldObject["y"]] => 2
                // newObject["2"] = "y"; => { 1: "x", 2: "y" }

                // third iteration
                // oldObject["z"]] => 3
                // newObject["3"] = "y"; => { 1: "x", 2: "y", 3: "z" }

                // first iteration => newObject["1"] = "x" => { 1: "x" }
                // second iteration => newObject = { 1: "x", 2: "y" }
                // third iteration => newObject = { 1: "x", 2: "y", 3: "z" }
            }

            return newObject;
        }
        
        // 💯 Student Submitted Solution

        // const oldObject = {a: '111' , b: 'FFF', c: 'practice'}

        // const invertObject = (obj) => {
            
        //     // Object.assign(target, source)
        //     const newObject = Object.assign(
                
        //         // target => empty object
        //         {}, 
                
        //         // source => map() over array of key / value pairings
        //         // ... => necessary to remove [] array wrapper generated via map()
        //         ...Object.entries(obj).map(
                    
        //             // take each array pair and convert into an object 
        //             // with key / value inverted
        //             ([a,b]) => ({[b]: a})
        //         )
        //     );

        //     return newObject;
        // }

        // ✅ Check Answer: 
        console.log(invertObject(oldObject));

// 🚧 Break Out Activity 3: Stretch Challenge

    // 🚨 Comment out any conflicting code above before proceeding.

    // 1️⃣ Create a function that accepts an object (groupOfPeople) containing names and ages and returns the name of the youngest person.

        // Example: findYoungest({
        //   Jeremy: 65,
        //   Alice: 32,
        //   Bob: 18,
        //   Megan: 29
        // }) => "Bob"

        // ❗ All ages must be different.

        // 💡 Consider using Object.keys(), map(), and / or sort() in your solution.

        let groupOfPeople = {
            Jeremy: 65,
            Alice: 32,
            Bob: 18,
            Megan: 29,
        };

        function findYoungest(group) {
            
            // generate array of arrays (key / value pairings)
            let listOfAges = Object.entries(group);

            // sort() elements within listOfAges in ascending order
            let sortedList = listOfAges.sort((firstPerson, secondPerson) => 
                
                // "a - b" => sorts in ascending order
                // "b - a" => sorts in descending order
                // [1] => index number of second item in each key / value pairing (age)
                firstPerson[1] - secondPerson[1]
            );

            // sortedList[0] => first key / value pair array (["Bob", 18])
            // sortedList[0][0] => first element in first key / value pair array ("Bob")
            return sortedList[0][0]
        }

        // ✅ Check Answer: 
        console.log(findYoungest(groupOfPeople));