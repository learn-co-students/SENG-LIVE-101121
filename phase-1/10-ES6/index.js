// ✅ What is ES6?

	// ES6 => ECMAScript 2015

	// latest version of the ECMAScript standard, introduced new features / syntax that
	// we have been using already (i.e., arrows, const, let, etc.)

	// syntactic sugar => easier to write, read and scale

// ✅ Declaring Arrow Functions vs. Regular Functions

	// arrow functions improve readability, especially when being used as callbacks (i.e., in iterators, etc.)

		// myArray.forEach(function(element) {
		//   console.log(element);
		// })

		// myArray.forEach(element => console.log(element));

	// Declaring functions as constants

		// ❓ what are the costs / benefits of using this approach?

		// const myFunction = () => {
		//   console.log("This is my function");
		// }

// ✅ Using the Spread Operator

	// to easily "unpack" elements in arrays

		// let myNums = [2, 4, 6];

		// const multiplyNums = (x, y, z) => {
		//   console.log(x * y * z);  
		// }

		// multiplyNums(...myNums);

	// as well as "unpack" object properties

		// let firstObject = { id: 1 };
		// let secondObject = { id: 2 };

		// let mergedObject = { ...firstObject, ...secondObject };

		// console.log(mergedObject)

	// creates a copy of original array by default, avoids direct mutation

		// let originalArray = [1, 2, 3];

		// let duplicateArray = [...originalArray];

		// console.log(duplicateArray);

	// objects can be copied as well

		// let myObject = {key: "value"};

		// let duplicateObject = {...myObject}

		// console.log(duplicateObject);

// ✅ Destructuring (Unpacking) Arrays & Objects

	// allows us to "unpack" array elements / object properties into unique variables

		// arrays

			// let x, y, z;

			// [x, y, z] = [1, 2, 3]

			// console.log(x);
			// console.log(y);
			// console.log(z);

		// objects

			// let myPokemon = {
			//   id: 1,
			//   name: "Bulbasaur",
			//   img: "./images/bulbasaur.png",
			//   likes: 0
			// }

			// function logName({name, likes}) {
			//   console.log(`${name} has ${likes} likes.`);
			// }

			// logName(myPokemon);

// -------------------------------------------

console.log("------------------------");
console.log("⬇️ Break Out Activities ⬇️");
console.log("🚨 Comment Out Lecture Code Above Before Starting 🚨");
console.log("💡 Use console.log() To Check Answers 💡");
console.log("------------------------");

	// ❗ Use these constants / functions in your solutions
	const BASE_URL = 'http://localhost:3000';
	const pokeContainer = document.getElementById('poke-container');
	const commentsContainer = document.getElementById('comments-container');
	const commentsForm = document.getElementById('comments-form');
  
  	commentsForm.addEventListener("submit", createComment);
	
	function loadPokemons() {
		fetch(BASE_URL + '/pokemons')
		.then(resp => resp.json())
		.then(pokemons => {
			pokemons.forEach(renderPokemon);  
		});
	}

	function loadComments() {
		fetch(BASE_URL + '/comments')
		.then(resp => resp.json())
		.then(comments => {
			comments.forEach(renderComment);  
		});
	}

	function renderPokemon(pokemon) {
		const pokeCard = document.createElement("div");
		const pokeImg = document.createElement("img");
		const pokeName = document.createElement("h3");
		const pokeLikes = document.createElement("h3");
		const likesNum = document.createElement("h5");
		const likeBttn = document.createElement("button");
		const deleteBttn = document.createElement("button");

		pokeCard.id = `poke-${pokemon.id}`;
		pokeCard.className = "poke-card";

		pokeImg.src = pokemon.img;
		pokeImg.alt = `${pokemon.name} image`;

		pokeName.textContent = pokemon.name;
		
		pokeLikes.textContent = "Likes: ";
		
		likesNum.className = "like-num";
		likesNum.textContent = pokemon.likes;
		
		likeBttn.className = "like-bttn";
		likeBttn.textContent = "♥";
		likeBttn.addEventListener("click", () => increaseLike(pokemon, likesNum));

		deleteBttn.className = "delete-bttn";
		deleteBttn.textContent = "Delete";
		deleteBttn.addEventListener("click", () => deletePoke(pokemon, pokeCard));

		pokeCard.append(pokeImg, pokeName, pokeLikes, likesNum, likeBttn, deleteBttn);
		pokeContainer.appendChild(pokeCard);
	}

	function renderComment(comment) {
		const commentCard = document.createElement("div");
		const userName = document.createElement("h3");
		const userContent = document.createElement("p");

		commentCard.className = "comment-card";
		
		userName.textContent = comment.content;

		userContent.textContent = `Added by ${comment.user}`;

		commentCard.append(userName, userContent);
		commentsContainer.append(commentCard);
	}

	function createComment(e) {
		e.preventDefault();
		
		let commentUser = commentsForm.querySelector("#user").value;
		let commentContent = commentsForm.querySelector("#content").value;
		let comment = {
			user: commentUser,
			content: commentContent,
		};
	
		fetch(BASE_URL + '/comments/', {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json',
			},
			body: JSON.stringify(comment),
		})
		.then(resp => resp.json())
		.then(newComment => {
			console.log(newComment);
			commentsForm.reset();
			commentsContainer.replaceChildren();
			loadComments();
		});
	}

	// 	❗ PREVIOUS LECTURE (CRUS with Fetch: PATCH and DELETE Requests) ❗

	function increaseLike(pokemon, likesNum) {
		++pokemon.likes;

		fetch(BASE_URL + `/pokemons/${pokemon.id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(pokemon)
		})
		.then(resp => resp.json())
		.catch(error => console.error('Error:', error))
		.then(updatedPokemon => { 
			console.log(updatedPokemon);
			likesNum.textContent = pokemon.likes;
		});
	}

	function deletePoke(pokemon, pokeCard) {
		fetch(BASE_URL + `/pokemons/${pokemon.id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			}
		})
		.then(resp => resp.json())
		.catch(error => console.error('Error:', error))
		.then(deletedPokemon => { 
			console.log(deletedPokemon);
			pokeCard.remove();
		});
	}

	function init() {
		loadPokemons();
		loadComments();
	}

	// load up all pokemons and comments
	init();

// 🚧 Break Out Activity 1: Declaring Arrow Functions vs. Regular Functions

	// 🚨 Comment out any conflicting lecture code above before proceeding.

	// 1️⃣ Refactor the above code to declare all functions using "const" instead of "function"

		// 	Example: 
		
			// const loadPokemons = () => {
			// 	fetch(BASE_URL + '/pokemons')
			// 	.then(resp => resp.json())
			// 	.then(pokemons => {
			// 		pokemons.forEach(renderPokemon);  
			// 	});
			// }

		// ✅ Check Answer in Browser Window

	// 2️⃣ To reduce redundancy in renderPokemon() and renderComment(), create a helper 
	// function (createEl) that:

		// 	✔️ Accepts a single String, "tag"

		// 	✔️ Uses document.createElement() to return the generated DOM element

			//	Example: 
			
				// const pokeCard = createEl("div");

		// 	✨ BONUS: Look for other opportunities in your code to incorporate helper functions.

		// ✅ Check Answer in Browser Window

// 🚧 Break Out Activity 2: Destructuring Objects & Arrays

	// 🚨 Comment out any conflicting lecture code above before proceeding.

	// 1️⃣ Refactor the above code to assign multiple DOM element properties using 
	// array destructuring.

		// 	Example: 
		
			// [ pokeCard.id, pokeCard.className ] = [ `poke-${pokemon.id}`, "poke-card" ];

		// ✅ Check Answer in Browser Window

	// 2️⃣ Refactor renderPokemon() and renderComment() to access Object properties 
	// directly using object destructuring.

		// 	Example: 
		
			// const renderPokemon = ({ id, name, likes, img }) => {
				
			// 	// ...
			// 	pokeCard.id = `poke-${id}`;
			// 	// ...
			// }

		// ✅ Check Answer in Browser Window