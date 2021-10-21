// ✅ Request-Response Cycle

    // request => url + http verb
    // response => status code + message body
    // async functions => allow us to "wait" before performing additional actions 

        // synchronized => happening at the same time

            // function sayHello() {
            //     console.log("Hello!");
            // }

            // function sayGoodbye() {
            //     console.log("Goodbye!");
            // }

            // sayHello();
            // sayGoodbye();

        // asynchronized => not happening at the same time

            // async function sayHello() {
            //     console.log("Hello!");
            //     return new Promise(resolve => setTimeout(resolve, 1000));
            // }

            // function sayGoodbye(){
            //     console.log("Goodbye!");
            // }

            // sayHello().then(sayGoodbye);

// ✅ HTTP Verbs

    // CRUD => POST, GET, PATCH, DELETE

// ✅ GET Requests with External API

    // https://api.openbrewerydb.org
    // https://www.postman.com/

// ✅ Handling Promises from .fetch()

    // .fetch() => used for fetching resources asynchronously across a network

    // fetch('https://api.openbrewerydb.org/breweries') // returns a promise
    
    // // once first Promise is resolved...
    // .then(resp => resp.json()) // ...convert the response into JSON and return another promise
    
    // // once second Promise is resolved...
    // .then(breweries => {

    //     // ...console.log the JS response
    //     console.log(breweries)
    // });

// ✅ .catch()

    // .catch() => deals with rejected cases only

    // fetch('https://api.openbrewerydb.org/breweries') // returns a promise
    // .then(resp => resp.json()) // returns another promise
    // .then(breweries => {
    //     console.log(breweries)
    // }).catch(error => {
    //     console.log(`HERE'S MY ERROR: ${error}`);
    // });

// -------------------------------------------

console.log("------------------------");
console.log("⬇️ Break Out Activities ⬇️");
console.log("🚨 Comment Out Lecture Code Above Before Starting 🚨");
console.log("💡 Use console.log() To Check Answers 💡");
console.log("------------------------");

// 🚧 Break Out Activity 1: Fetch GET Requests (Static)

    // 🚨 Comment out any conflicting code above before proceeding.

    // ❗ Refer to these constants in your solutions.
    const BASE_URL = 'https://api.openbrewerydb.org/breweries';
    const brewList = document.getElementById('brew-list');
    const brewForm = document.getElementById('brew-form');

    function renderBrew(brew){
        const div = document.createElement('div');
        const icon = document.createElement('h1');
        const header = document.createElement('h3');
        const p = document.createElement('p');

        div.id = `brew-card-${brew.id}`;
        div.className='card alert-success';
        div.style = 'padding: 20px; margin: 20px;'

        icon.textContent='🍺';
                
        header.textContent = `${brew.name}`;

        p.id = `brew-info-${brew.id}`
        p.textContent = `
            Type: ${brew.brewery_type} - 
            City: ${brew.city} -
            State: ${brew.state}
        `
        div.append(icon, header, p);
        brewList.appendChild(div);
    }

    function returnNone() {
        const div = document.createElement('div');
        const icon = document.createElement('h1');
        const header = document.createElement('h3');

        div.className='card alert-warning';
        div.style = 'padding: 20px; margin: 20px;'
        
        icon.textContent='😢';

        header.textContent = "No Breweries Found";

        div.append(icon, header);
        brewList.appendChild(div);
    }

    // 1️⃣ Create a function (getAllBreweries) that:

        //  ✔️ Fetches all breweries (/breweries)
        
        //  ✔️ Invokes renderBrew() for each returned "brewery"

        // 	✨ BONUS: Include error handling using .catch()

        function getAllBreweries(){
            // ❗ your code here
        }

        // ✅ Check Answer: 
        // document.addEventListener('DOMContentLoaded', getAllBreweries);

    // 2️⃣ Create a function (getBreweriesByCity) that:

        //  ✔️ Accepts one parameter, a "city" string
    
        //  ✔️ Fetches all breweries by "city" (.../breweries?by_city=miami)

        //  ✔️ Invokes renderBrew() for each returned "brewery"

        // 	✨ BONUS: Include error handling using .catch()

        function getBreweriesByCity(city){
            // ❗ your code here
        }

        // ✅ Check Answer: 
        // document.addEventListener('DOMContentLoaded', getBreweriesByCity('miami'));

    // 3️⃣  Create a function (getBreweriesByState) that:

        //  ✔️ Accepts one parameter, a "state" string
    
        //  ✔️ Fetches all breweries by "state" (.../breweries?by_state=florida)

        //  ✔️ Invokes renderBrew() for each returned "brewery"

        // 	✨ BONUS: Include error handling using .catch()

        function getBreweriesByState(state){
            // ❗ your code here
        }
    
        // ✅ Check Answer: 
        // document.addEventListener('DOMContentLoaded', getBreweriesByState('florida'));

// 🚧 Break Out Activity 2: Fetch GET Requests (Dynamic)

    // 1️⃣ Create a function (searchBreweries) that:

        //  ✔️ Accepts one parameter, "e" (i.e., an "event")

        //  ✔️ Accesses and stores the value of '#brew-input' (query) from the DOM

        //  ✔️ Fetches all breweries matching "query" (`...breweries/search?query=${query}`)

        //  ✔️ Invokes renderBrew() for each returned "brewery"

        //  ✔️ Clears out "brewForm" using .reset()

        //  ✔️ Replaces previous results (clears out "brewList") using .replaceChildren()

        //  ❗ If no breweries are returned, invoke returnNone() (see beginning of Break Out code)

        // 	✨ BONUS: Include error handling using .catch()

        function searchBreweries(e){
            // ❗ your code here
        }

        // ✅ Check Answer: 
        // brewForm.addEventListener('submit', searchBreweries);