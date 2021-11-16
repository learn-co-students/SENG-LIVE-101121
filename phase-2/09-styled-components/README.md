# React Styled Components 
## SWBAT
- [] Use the Styled Components library to add CSS to React components.

## What are styled components
    Styled-components move css directly into your components. They make styling simple, by making it easier to find the css connected with specific features, avoid bugs with class name, and add a dynamic element to css. Under the hood styled-components keep track of which component is being render so limited css is being rendered at a time.

## Install
```
npm install --save styled-components

```

## Creating an element
    Styled-components utilise tagged template literals to style components. 

```
// Name the element you want to style
// add styled.element_name
const Container = styled.div`
    //use a template literal to add css
    display: flex;
    flex-direction: column;
    padding: auto;
    margin: auto;
    background: blue;
`

// Add the element to your render 

render(
    <Container>
        <h1>Rose is cute!</h1>
    </Container>
)

```

## CSS Review
- .class   .container
- #id      #logo
- element  div

- selector:pseudo-class a:hover

- Flex
    - [flex](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
   