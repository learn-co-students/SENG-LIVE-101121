# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# Advanced HTTP
## SWBAT
- [] Implement POST, PATCH and DELETE

## json-server
We will be using json-server again!
```
json-server --watch --port4000 db.json
```

## Request Response
![request-response](./assets/requestResponse.png) 


## POST
`The HTTP POST method sends data to the server. The type of the body of the request is indicated by the Content-Type header. — MDN`




We can use post to persist data we've created. The data can be render on the dom optimistically (before the request has resolved) or pessimistically (after the request has resolved)

```
const cat = { name: 'rose' };

fetch('https://localhost:3000/pets', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(cat),
})
.then(res => res.json())
.then(data => {
  console.log(data);
})
.catch((error) => {
  console.error('Error:', error);
});

//Async and Await
async function postData(cat) {
  const res = await fetch('https://localhost:3000/pets', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
    body: JSON.stringify(cat) 
  });
  const data = await res.json(); 
  console.log(data)
}

```


## Patch  

`PATCH is somewhat analogous to the "update" concept found in CRUD (in general, HTTP is different than CRUD, and the two should not be confused).A PATCH request is considered a set of instructions on how to modify a resource. Contrast this with PUT; which is a complete representation of a resource. -MDN`

Patch takes the updated data and looks identical to a post, excluding the url which must contain the ID of the item being updated.

```
const cat = { name: 'bubbles' };

fetch('https://localhost:3000/pets/120', {
  method: 'PATCH', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(cat),
})
.then(res => res.json())
.then(data => {
  console.log(data);
})
.catch((error) => {
  console.error('Error:', error);
});


```

## Delete

`The HTTP DELETE request method deletes the specified resource.-MDN`

```

fetch('https://localhost:3000/pets/120', {
  method: 'DELETE', 
})
.then(res => res.json())
.then(data => {
  console.log(data);
})
.catch((error) => {
  console.error('Error:', error);
});

```