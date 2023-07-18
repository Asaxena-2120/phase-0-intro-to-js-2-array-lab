// Write your solution here!
const cats= ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name)
}

function destructivelyPrependCat(name){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
    return [...cats,name]
}

function prependCat(name){
    return [name,...cats]
}

function removeLastCat(){
    let new_array=[...cats]
    
    new_array.pop()
    return new_array
}

function removeFirstCat(){
    
    let new_array=[...cats]
    
    new_array.shift()
    return new_array
}