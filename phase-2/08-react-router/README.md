# React Router
## SWBAT
- [] Create a multi-page SPA
- [] Explain the advantages of using React Router
- [] Utilize the most common react-router components to build a SPA:
BrowserRouter, Route, Switch, Link, and NavLink
- [] Use hooks like useHistory and useParams to access the state of the router
- [] Use the history object to navigate pages
Create dynamic routes and use params

## [Installing React Router](https://www.npmjs.com/package/react-router-dom) 
```
$ npm install --save react-router-dom
```

## Wrapping your app
To use react router we will need to wrap our app in BrowserRouter, this is the element that keeps our app synced with the url from our client side routes

```
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
<BrowserRouter>
    <App />
</BrowserRouter>,document.getElementById('root'));
``