function logPerson(){
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {name: 'Mikhail', age: 32, job: 'Farmer'}
const person2 = {name: 'Elena', age: 25, job: 'SMM'}

function bind (context, fn){
    return function (...args){
        fn.apply(context, args)
    }
}
bind(person2, logPerson)()
bind(person1, logPerson)()
