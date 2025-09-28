"First exercise"
/*
var Myvar = 1
var My2var = 2

function exchange2values(value1, value2) {
    let temp = value1
    value1 = value2
    value2 = temp
    console.log(value1)
    console.log(value2)
}
console.log(Myvar)
console.log(My2var)

exchange2values(Myvar, My2var)*/

"Exercices part 2 "
/*
const nu = [];
console.log(nu)
function sumofanarray(array){
    var sum = 0
    for (let i = 0; i<array.length;i++){
        sum += array[i];
    }
    return sum
}

somme = sumofanarray(nu)
console.log(somme)

function moyofanarray(array){
    var moy = 0
    moy = sumofanarray(array)/array.length
    return moy
}

moyenne = moyofanarray(nu)
console.log(moyenne)

function maxinanarray(array){
    var max = 0
    for (let i = 0;i<array.length;i++){
        if (array[i]>max){
            max = array[i]
        }
    }
    return max
}

max = maxinanarray(nu)
console.log(max)

function inversedarray(array){
    newArray = []
    for (let i=array.length-1;i>=0;i--){
        newArray.push(array[i])
    }
    return newArray
}

inverseofarray = inversedarray(nu)
console.log(inverseofarray)*/

"Exercice part 3"

import * as fs from 'fs'
import _ from 'lodash'

/* Use lodash to sort an array of numbers */
const myArray = [1, 3, 4, 2, 5]
const sortedArray = _.sortBy(myArray)
console.log(sortedArray)

/** Use lodash to delete duplicate  */
const duplicateArray = [1, 3, 4, 2, 5, 1, 3]
const uniqueArray = _.uniq(duplicateArray)
console.log(uniqueArray)

/** Do it with findIndex */
const uniqueArrayWithFindIndex = duplicateArray.filter(
  (item, index, self) => self.indexOf(item) === index
)
console.log(uniqueArrayWithFindIndex)

/** Do it in another way */
const uniqueArrayWithSet = [...[1, 2, 3, 4, 5]]
console.log(uniqueArrayWithSet)

/** Async function */
const myAsyncFunction = () => {
  return new Promise((resolve, reject) => {
    const num = Math.random()
    if (num > 0.5) {
      resolve(num)
    } else {
      reject('Because')
    }
  })
}

const myAsyncFunction2 = async () => {
  const num = Math.floor(Math.random() * 50) + 50
  if (num > 0.5) {
    return num
  } else {
    throw new Error('Because')
  }
}

try {
  console.log(await myAsyncFunction())
} catch(err) {
  console.error('Tough luck kid: ', err)
}

try {
  console.log(await myAsyncFunction2())
} catch(err) {
  console.error('Tough luck kid: ', err)
}

const data = fs.readFileSync('data.json', 'utf8')
console.log(data)