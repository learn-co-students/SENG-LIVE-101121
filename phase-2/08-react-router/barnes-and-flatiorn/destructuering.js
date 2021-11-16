const obj = {name:'rose', age:10, toy: 'string'}
const obj2 = {name:'luke', age:3}

//const {name, age, toy='ball'} = obj

function foo({name, age, toy='ball'}){
    console.log(name)
    console.log(age)
    console.log(toy)
}