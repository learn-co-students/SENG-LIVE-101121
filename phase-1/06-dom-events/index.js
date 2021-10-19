// ✅ Understand Static vs. Dynamic Web Applications

  // Static => Fixed, display the same content for each user
  // Dynamic => Display different content for each user, allow for user interation

// ✅ Handling Click and Submit Events
     
  // addEventListener(event, callbackFunction);

    // when would we define callbackFunction as an anonymous function instead
    // of as a function reference?

      // addEventListener("click", () => console.log("Test"));
        // vs. 
      // addEventListener("click", doSomething);

// ✅ .preventDefault()

  // event.preventDefault => prevents default event behavior (i.e., page reload
  // upon form submission)

// ✅ HTML Forms

  // .reset() => clears all values of HTML form elements

// -------------------------------------------

console.log("------------------------");
console.log("⬇️ Break Out Activities ⬇️");
console.log("🚨 Comment Out Lecture Code Above Before Starting 🚨");
console.log("💡 Use console.log() To Check Answers 💡");
console.log("------------------------");

// 🚧 Break Out Activity 1: Handling Click Events

  // 🚨 Comment out any conflicting code above before proceeding.

		// array of pokemon objects (pokemons)
		const pokemons = [
			{
				id: 1,
				name: "Bulbasaur",
				img: "./images/bulbasaur.png",
				likes: 4,
			},
			{
				id: 2,
				name: "Ivysaur",
				img: "./images/ivysaur.png",
				likes: 21,
			},
			{
				id: 3,
				name: "Venusaur",
				img: "./images/venasaur.png",
				likes: 7,
			},
			{
				id: 4,
				name: "Charmander",
				img: "./images/charmander.png",
				likes: 20,
			},
			{
				id: 5,
				name: "Charmeleon",
				img: "./images/charmeleon.png",
				likes: 11,
			},
		];

    const makeEl = el => document.createElement(el);
    const pokeContainer = document.getElementById("poke-container");

    // pokeForm = DOM element with ID of "poke-form" => <div id="poke-form"></div>
    const pokeForm = document.getElementById("poke-form");

  // 1️⃣ Create a function (addLike) that:

    //  ✔️ Accepts a single Pokemon object (pokemon) and likesNum (h5 displaying number of likes) as parameters

    //  ✔️ Increments the Pokemon's number of likes by +1

    //  ✔️ Updates the textContent of likesNum to reflect the Pokemon's updated number of likes
  
    // 	💡 In renderPokemon(), add an event listener to likeBttn, making sure to specify the event as well as the 
    //  callback function (addLike).

    // 	💡 Use Chrome Dev Tools to view changes being made to the DOM

  // 2️⃣ Create a function (deletePokemon) that:

    //  ✔️ Accepts a single pokeCard as a parameter

    //  ✔️ Removes the pokeCard from the DOM

    // 	💡 In renderPokemon(), add an event listener to deleteBttn, making sure to specify the event as well as the 
    //  callback function (deletePokemon).

    // 	💡 Use Chrome Dev Tools to view changes being made to the DOM

    function renderPokemon(pokemon) {
		
      // grouping variable assignments helps to improve readability
      const pokeCard = makeEl("div");
      const pokeImg = makeEl("img");
      const pokeName = makeEl("h3");
      const pokeLikes = makeEl("h3");
      const likesNum = makeEl("h5");
      const likeBttn = makeEl("button");
      const deleteBttn = makeEl("button");
      
      // set pokeCard attributes
      pokeCard.id = `poke-${pokemon.id}`;
      pokeCard.className = "poke-card";
          
      // set pokeImg attributes
      pokeImg.src = pokemon.img;
      pokeImg.alt = `${pokemon.name} image`;
  
      // set pokeName attributes
      pokeName.textContent = pokemon.name;
  
      // set pokeLikes attributes
      pokeLikes.textContent = "Likes: ";
    
      // set likesNum attributes
      likesNum.className = "like-num";
      likesNum.textContent = pokemon.likes;
      
      // set likeBttn attributes
      likeBttn.className = "like-bttn";
      likeBttn.textContent = "♥";
      
      // ❗ add likeBttn event listener ❗

      // set deleteBtt attributes
      deleteBttn.className = "delete-bttn";
      deleteBttn.textContent = "Delete";
  
      // ❗ add deleteBttn event listener ❗
  
      // append DOM elements to pokeCard
      pokeCard.append(pokeImg, pokeName, pokeLikes, likesNum, likeBttn, deleteBttn);
      
      // append pokeCard to pokeContainer
      pokeContainer.append(pokeCard);
    };

    function addLike(pokemon, likesNum){
    //   // ❗ your code here
    }

    function deletePoke(pokeCard){
    //   // ❗ your code here
    }

	// ✅ Check Answer: 
	function init() {
		pokemons.forEach(renderPokemon);
	}

	init();

// 🚧 Break Out Activity 2: Handling Submit Events

  // 1️⃣ Create a function (createPokemon) that:

    //  ✔️ Accepts a single submit event as a parameter

    //  ✔️ Prevents default form submission behavior (i.e., page refresh)

    //  ✔️ Creates a new Pokemon object and adds it to the "pokemons" Array

      //  Use .querySelector() to select and retrieve the value of '#name-input',
      //  setting it as the "name" for the new Pokemon object 

      //  Use .slice() to pull the final Pokemon's id from "pokemons," incrementing
      //  by one and setting the new value as the "id" for the new Pokemon object

      //  Each new Pokemon object should have an "img" of './images/whos_that_pokemon.png'
      //  as well as 0 "likes" initially

    //  ✔️ Creates a pokeCard for the new Pokemon using renderPokemon()

    //  ✔️ Resets pokeForm using .reset() 

	// 	💡 Use Chrome Dev Tools to view changes being made to the DOM
  
    // function createPokemon(){
    //   // ❗ your code here
    // }

  // ✅ Check Answer: 
  // function init() {
  //   pokemons.forEach(renderPokemon);
  //   pokeForm.addEventListener('submit', createPokemon)
  // }
  
  // init()
