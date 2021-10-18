// ✅ What is the DOM?

	// Chrome Dev Tools

// ✅ Creating / Reading DOM Elements

	// CRUD => Create, Read, Update, Destroy

    // .createElement() => creates one DOM element

		// let myDiv = document.createElement("div");

		// let otherElement = document.getElementById('someId');

		// otherElement.append(myDiv);

	// .querySelector() => returns the first matching DOM element

		// let myQuery = document.querySelector('div');

	// .querySelectorAll() => returns an array of matching DOM elements

		// let myQuieries = document.querySelectorAll('div');

		// console.log(myQuieries);

	// .getElementById() => returns the DOM element with matching Id

		// let myElement = document.getElementById('');

	// .getElementsByClassName() => returns an array of DOM elements with matching Class

		// let myElements = document.getElementsByClassName("form-label");

		// console.log(myElements);

	// .getElementsByTagName() => when is this especially useful?

		// let myElements = document.getElementsByTagName("div");

		// console.log(myElements[0]);

		// myElements.map(element => {
		// 	return
		// });

		// let myArray = [] 

		// myArray.push(myElements[0])
        
// ✅ Updating / Deleting DOM Elements
        
	// .append
		
		// let myDiv = document.createElement("div");

		// let otherElement = document.createElement("h1");

		// myDiv.append(otherElement);

	// .remove()

		// console.log(myElements);

		// myElements[0].remove();

// ✅ .innerHTML vs. .innerText vs. .textContent

	// let firstDiv = document.getElementById('lecture-goals');

  	// .innerHTML => if you want to insert HTML within a DOM element, shows full HTML structure

	  	// let anotherElement = document.createElement("h1");
	 
		// firstDiv.append(anotherElement);

		// firstDiv.innerHTML = "<h1>Hey!</h1>"

	 	// console.log(firstDiv.innerHTML);

	// .innerText => if you only want to insert text, shows only human-readable elements

		// firstDiv.innerText = "Hey!";

		// console.log(firstDiv.innerText);

	// .textContent => if you only want to insert text, shows formatting of elements*

		// firstDiv.textContent = "Hey!";

		// console.log(firstDiv.textContent);

// -------------------------------------------

console.log("------------------------");
console.log("⬇️ Break Out Activities ⬇️");
console.log("🚨 Comment Out Lecture Code Above Before Starting 🚨");
console.log("💡 Use console.log() To Check Answers 💡");
console.log("------------------------");

// 🚧 Break Out Activity 1: Creating / Reading / Updating DOM Elements

  // 🚨 Comment out any conflicting code above before proceeding.

		// array of pokemon objects
		const pokemon = [
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

		// container to store DOM element with ID of "poke-container" => <div id="poke-container"></div>
		const pokeContainer = document.getElementById("poke-container"); 

  // 1️⃣ Given "pokemon" and "pokeContainer" above, create a function (renderPokemon) that:

	//  ✔️ Accepts a single "pokemon" object
 
 	//  ✔️ Creates a "div" element to contain information about each Pokemon and stores the "div" in a variable (pokeCard)
		//	Assign pokeCard a unique ID with the Pokemon's "id" prepended by "poke-" (i.e., "poke-1" for Bulbasaur)
		//	Assign pokeCard a className of "poke-card"
	
	//  ✔️ Creates an "img" element for each Pokemon and stores the "img" in a variable (pokeImg)
		//	Assign pokeImg a source (src) linking to the Pokemon's image
		// 	Assign pokeImg a unique alt with the Pokemon's name followed by " image" (i.e., "bulbasaur image")
	
	//	✔️ Creates an "h3" element for each Pokemon and stores the element in a variable (pokeName)
		// 	Use textContent() to fill in the heading with the Pokemon's name

	//	✔️ Appends all variables to "pokeCard" before appending "pokeCard" to "pokeContainer"
		// 	Use append() as necessary

	// 	💡 Use Chrome Dev Tools to view changes being made to the DOM

	// 	💡 Take a look at "styles.css" to see how the DOM Elements we're building out correspond to CSS class and ID selectors.

	// 	✨ BONUS: Try to reduce redudancy (DRY Principle) in your code through the use of JS functions and variables.

	// function renderPokemon(pokemon) {
	// 	const pokeCard = document.createElement("div");
		
	// 	pokeCard.id = `poke-${pokemon.id}`;
	// 	pokeCard.className = "poke-card";
	  
	// 	const pokeImg = document.createElement("img");
	// 	pokeImg.src = pokemon.img;
	// 	pokeImg.alt = `${pokemon.name} image`;
	  
	// 	const pokeName = document.createElement("h3");
	// 	pokeName.textContent = pokemon.name;
	  
	// 	pokeCard.append(pokeImg, pokeName);
	// 	pokeContainer.append(pokeCard);
	// }


	// // ✅ Check Answer: 
	// function init() {
	// 	pokemon.forEach(renderPokemon);
	// }

	// init();

// 🚧 Break Out Activity 2: Creating / Reading / Updating Elements

  // 🚨 Comment out any conflicting code above before proceeding.

  // 1️⃣ Add the following capabilities to renderPokemon:

	//  ✔️ Creates an "h3" element for each Pokemon and stores the element in a variable (pokeLikes)
		// 	Use textContent() to fill in the heading with "Likes: "
	
	//  ✔️ Creates an "h5" element for each Pokemon and stores the element in a variable (likesNum)
		// 	Assign likesNum a className of "likes-num"
		// 	Use textContent() to fill in the heading with the Pokemon's number of likes

	//  ✔️ Creates a "button" element for each Pokemon and stores the element in a variable (likesBttn)
		// 	Assign likesBttn a className of "likes-bttn"
		// 	Use textContent() to fill in the button with a label, "♥"

	//  ✔️ Creates a "button" element for each Pokemon and stores the element in a variable (deleteBttn)
		// 	Assign deleteBttn a className of "delete-bttn"
		// 	Use textContent() to fill in the button with a label, "Delete"

	//	✔️ Appends all variables to "pokeCard" before appending "pokeCard" to "pokeContainer"
		// 	Use append() as necessary

	// 	💡 Use Chrome Dev Tools to view changes being made to the DOM
	
	// 	💡 Take a look at "styles.css" to see how the DOM Elements we're building out correspond to CSS class and ID selectors.

	// 	✨ BONUS: Try to reduce redudancy (DRY Principle) in your code through the use of JS functions and variables.

	// 💯 student submission for dynamically setting property values using bracket notation
	// function setProperty(element, property, value) {
	// 	return element[property] = value;
	// }

	// reusable syntax for creating elements / shorter syntax
	const makeEl = el => document.createElement(el);

	function renderPokemon(pokemon) {
		
		// grouping variable assignments helps to improve readability
		const pokeCard = makeEl("div");
		const pokeImg = makeEl("img");
		const pokeName = makeEl("h3");
		const pokeLikes = makeEl("h3");
		const likesNum = makeEl("h5");
		const likeBttn = makeEl("button");
		const deleteBttn = makeEl("button");

		// --------- Break Out 1 --------- //
		
		// // set pokeCard attributes
		pokeCard.id = `poke-${pokemon.id}`;
		pokeCard.className = "poke-card";
				
		// // set pokeImg attributes
		pokeImg.src = pokemon.img;
		pokeImg.alt = `${pokemon.name} image`;

		// // set pokeName attributes
		pokeName.textContent = pokemon.name;

		// // --------- Break Out 2 --------- //

		// // set pokeLikes attributes
		pokeLikes.textContent = "Likes: ";
	
		// // set likesNum attributes
		likesNum.className = "like-num";
		likesNum.textContent = pokemon.likes;
	  
		// // set likeBttn attributes
		likeBttn.className = "likes-bttn";
		likeBttn.textContent = "♥";
		
		// // set deleteBtt attributes
		deleteBttn.className = "delete-bttn";
		deleteBttn.textContent = "Delete";

		// append DOM elements to pokeCard
		pokeCard.append(pokeImg, pokeName, pokeLikes, likesNum, likeBttn, deleteBttn);
		
		// append pokeCard to pokeContainer
		pokeContainer.append(pokeCard);
	};

	// ✅ Check Answer: 
	function init() {
		pokemon.forEach(renderPokemon);
	}

	init();