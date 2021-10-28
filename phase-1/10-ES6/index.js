// ✅ What is ES6?

	// ES6 => ECMAScript 2015

	// latest version of the ECMAScript standard, introduced new features / syntax that
	// we have been using already (i.e., arrows, const, let, etc.)

	// syntactic sugar => easier to write, read and scale

// ✅ Declaring Arrow Functions vs. Regular Functions

	// arrow functions improve readability, especially when being used as callbacks (i.e., in iterators, etc.)

		// let myArray = [1,2,3,4,5];

		// // myArray.forEach(function(element) {
		// //   return element;
		// // });

		// const myFunction = (item) => {
		// 	console.log(item);
		// }

		// myArray.forEach(myFunction);

	// Declaring functions as constants

		// ❓ what are the costs / benefits of using this approach?

		// function myFunction() {
		// 	console.log("This is my function");
		// }

		// // ...
		// // ...
		// // ...
		
		// // myFunction();

		// function myFunction() {
		// 	console.log("No, this is my function!");
		// }

		// const myFunction = () => console.log("This is my function");

		// myFunction();
		

// ✅ Using the Spread Operator

	// to easily "unpack" elements in arrays

		// let myNums = [2, 4, 6, 8];

		// const multiplyNums = (myNums) => {
		//   console.log(myNums[0] * myNums[1] * myNums[2]);  
		// }

		// multiplyNums(myNums);

		// const multiplyNums = (x, y, z) => {
		//   console.log(x * y * z);  
		// }

		// multiplyNums(...myNums);
		// multiplyNums(2, 4, 6);
		
	// as well as "unpack" object properties

		// let firstObject = { id: 1, name: "first", color: "blue" };
		// let secondObject = { id: 2, name: "second", weight: "heavy" };

		// let mergedObject = { ...secondObject, ...firstObject };

		// // { id: 1, id: 2 }

		// console.log(mergedObject)

	// creates a copy of original array by default, avoids direct mutation

		// let originalArray = [1, 2, 3];

		// let duplicateArray = [...originalArray];
		// // let duplicateArray = [1, 2, 3];

		// duplicateArray[-1]

		// console.log(duplicateArray);

	// objects can be copied as well

		// let myObject = {key: "value"};

		// let duplicateObject = {...myObject}
		// // let duplicateObject = {key: "value"};

		// console.log(duplicateObject);

// ✅ Destructuring (Unpacking) Arrays & Objects

	// allows us to "unpack" array elements / object properties into unique variables

		// arrays

			// let x, y, z;

			// let [x, y, z] = [1, 2, 3];

			// let x = 1;
			// let y = 2;
			// let z = 3;

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

			// const logName = ({ myId }) => {
			//   console.log(myId);
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

	// Breakout Activity #1, Part 1: Use "const" instead of "function"
	const loadPokemons= () => {
		fetch(BASE_URL + '/pokemons')
		.then(resp => resp.json())
		.then(pokemons => pokemons.forEach(renderPokemon));
	}

	// Breakout Activity #1, Part 1: Use "const" instead of "function"
	const loadComments = () => {
		fetch(BASE_URL + '/comments')
		.then(resp => resp.json())
		.then(comments => comments.forEach(renderComment));
	}

	// Breakout Activity #1, Part 2: Helper Function to Create DOM Elements
	const createEl = tag => document.createElement(tag);

	// Breakout Activity #1, Part 1: Use "const" instead of "function"
	// Breakout Activity #2, Part 2: Destructured Object Parameters
	const renderPokemon = ({ id, name, img, likes }) => {
		
		// Breakout Activity #1, Part 2: Helper Function to Create DOM Elements
		const pokeCard = createEl("div");
		const pokeImg = createEl("img");
		const pokeName = createEl("h3");
		const pokeLikes = createEl("h3");
		const likesNum = createEl("h5");
		const likeBttn = createEl("button");
		const deleteBttn = createEl("button");

		// Breakout Activity #2, Part 1: Destructured Array Assignment
		// ❗ Try removing the semicolons at the end of each line below. What happens?
		[ pokeCard.id, pokeCard.className ] = [ `poke-${id}`, "poke-card" ];
		[ pokeImg.src, pokeImg.alt ] = [ img, `${name} image` ];
		[ likesNum.className, likesNum.textContent ] = [ "like-num", likes ];
		[ likeBttn.className, likeBttn.textContent ] = [ "like-bttn", "♥" ];
		[ deleteBttn.className, deleteBttn.textContent ] = [ "delete-bttn", "Delete" ];

		// DOM elements with single property, no need for destructured array assignment
		
		pokeName.textContent = name;
		pokeLikes.textContent = "Likes: ";

		likeBttn.addEventListener("click", () => increaseLike(id, likes, likesNum));
		deleteBttn.addEventListener("click", () => deletePoke(id, pokeCard));

		pokeCard.append(pokeImg, pokeName, pokeLikes, likesNum, likeBttn, deleteBttn);
		pokeContainer.appendChild(pokeCard);
	}

	// Breakout Activity #2, Part 2: Destructured Object Parameters
	const renderComment = ({ content, user }) => {
		const commentCard = createEl("div");
		const userName = createEl("h3");
		const userContent = createEl("p");

		commentCard.className = "comment-card";
		userName.textContent = content;
		userContent.textContent = `Added by ${user}`;

		commentCard.append(userName, userContent);
		commentsContainer.append(commentCard);
	}

	// Breakout Activity #1, Part 1: Use "const" instead of "function"
	const createComment = (e) => {
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

	// Breakout Activity #2, Part 2: Handling Destructured Object Parameters
	const increaseLike = (id, likes, likesNum) => {
		++likes

		fetch(BASE_URL + `/pokemons/${id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			
			// ❗ Here, we can replace "pokemon" with a simple Object containing the
			//	properties that we want to be updated. It will not remove the
			// 	remaining properties of the Pokemon object.
			body: JSON.stringify({
				likes: likes
			})
		})
		.then(resp => resp.json())
		.catch(error => console.error('Error:', error))
		.then(updatedPokemon => { 
			console.log(updatedPokemon);
			likesNum.textContent = likes;
		});
	}

	// Breakout Activity #1, Part 1: Use "const" instead of "function"
	const deletePoke = (id, pokeCard) => {
		fetch(BASE_URL + `/pokemons/${id}`, {
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

	// Breakout Activity #1, Part 1: Use "const" instead of "function"
	const init = () => {
		loadPokemons();
		loadComments();
		commentsForm.addEventListener("submit", createComment);
	}

	// load up all pokemons and comments
	init();

// 🚧 Break Out Activity 1: Declaring Arrow Functions vs. Regular Functions

	// 🚨 Comment out any conflicting code above before proceeding.

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

		// 	✔️ Accepts a single String, tag

		// 	✔️ Uses document.createElement() to return the generated DOM element

			//	Example: 
			
				// const pokeCard = createEl("div");

		// ✅ Check Answer in Browser Window

// 🚧 Break Out Activity 2: Destructuring Objects & Arrays

	// 🚨 Comment out any conflicting code above before proceeding.

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