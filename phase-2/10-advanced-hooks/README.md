# Advanced Hooks
## SWBAT
- [] implement useRef to track state in memory 
- [] implement useContext to store and access state without props
- [] implement custom hooks

## useRef
   useRef returns a mutable ref object whose .current property. The properties in useRef will persist through reacts re-render, however updating useRef will not trigger a re-render. 

```
  let clicks = useRef(0);
  const onButtonClick = () => {
      clicks.current = clicks.current+1
  };

```


## useContext
useContext is an alterative way to manage state. Instead of passing state through props to components, context stores state in its own file and gives every component access to it.  