# Introduction to React
## SWBAT
 - [] Explain the ReactDOM.render() method including what arguments it takes and why it’s important
 - [] Explain the difference between declarative and imperative programming
 - [] Explain the benefits of components and writing modular code
 - [] Explain what JSX is and the difference between JSX and HTML

 ### Creating a react application 
 [Link to create react app docs](https://reactjs.org/docs/create-a-new-react-app.html)

 ```
 npx create-react-app my-app
 cd my-app
 npm start

 ```
### Imperative Programming  
    In imperative programing,(or procedural) code is written to describe the step the computer takes to perform a task.   

    How would you create an H1 tag and append it to the dom using vanilla js?

```
const h1 = document.createElement('h1')
h1.textContent = 'hello world'
document.querySelector('body').append(h1)
```

### Declarative Programming
    With declarative programming the syntax describes what should happen, and the details of the steps the computer takes to perform the task are abstracted away.


    Its much easier to read this and figure out what's suppose to happen
```
    function App(props){
    return(
        <div>Hello from {props.name}</div>
    )
    }
    export default App;

```

### JSX  
    JSX is a javaScript syntax extension that resembles html. React uses it to describe what the UI actually looks like.
    It was created specifically for React and allows us to write html directly into our components. 

    JSX needs a single parent for a component to render it.

    ```
    // will error
        render(
            <h1>Rose</h1>
            <p>Cat</p>
            <p>Age: 10 </p>
        )
    // will render 
        render(
            <div>
                <h1>Rose</h1>
                <p>Cat</p>
                <p>Age: 10 </p>
            </div>
        )
    // Can be cleaned up by using React fragment <> </>
          render(
            <>
                <h1>Rose</h1>
                <p>Cat</p>
                <p>Age: 10 </p>
            </>
        )
    ```

    JavaScript can be use within JSX

    ```
        const arr = ['rose', 'bubbles', 'tom']
        render(
            <>
            {arr.forEach(cat => <div>{cat}</div>)}
            </>
        )

    ```   

### Components  
    Components allow us to write reusable code that is module and organized. 

    ```
    BookCard.js
        function BookCard() {
            return (
                <>
                    <h2>Book title</h2>
                </>
            );
        }

        export default BookCard;
    App.js
        function App(){
            return(
                <>
                    <BookCard />
                    <BookCard />
                    <BookCard />
                </>
            )
        }
        export default App;

    ```
