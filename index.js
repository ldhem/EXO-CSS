//console.log("Je m'appelle Mehdi")

// var myNumber = 31

// // console.log(myNumber)

console.log(myName)
var myName = ("Mehdi")
console.log(myName)

let myLastName = "Mbarek"

const myAge1 = 35
let myAge2 = 40


myAge2 = 21

console.log (myAge2)

// resulat = resulat + 10

result = 10

result += 10

result -= 10

result *= 10

result /= 10

result %= 10

// LES CHAINES DE CARACTERES

// const firstName = "Mehdi"
// const lastName = 'Mbarek'
// const sentence = 'Je m\'appelle Mehdi'

// // ES6 => 2015 Javascript moderne
// const presentation = `Je m'appelle Mehdi`

// // let fullName = firstName + '_' + lastName
// let fullName = `${firstName} --- ${lastName}`
// console.log(fullName)

let name1 = "J'habite a "
// name1 = name1 + "Talence"
name1 += "Pessac" 
console.log(name1)

let myTownn = "Bordeaux"
let myArea = 33

const result2 = myTownn + myArea
console.log(result2)


// LES BOOLEENS

let myBoolean = true
let myBoolean2 = false


if (myBoolean) {
    console.log("Ma condition est vraie")
} else {
    console.log("Ma condition est fausse")
}

// let myCurrentAge = "18"
// let legalAgeToDrive = 18

//  Opérateur de comparaison : >, >=, <, <=, ==, ==== (Triple égal teste le type de variables)

// if (myCurrentAge === legalAgeToDrive) {
//     console.log("Je peux conduire")
// } else {
//     console.log("Je ne peux pas conduire")
// }

// if (myCurrentAge > legalAgeToDrive) {
//     console.log("Je peux conduire")
// } else if (myCurrentAge < legalAgeToDrive){
//     console.log("Je ne peux pas conduire")
// } else if (myCurrentAge === legalAgeToDrive){
//     console.log("Tu as tout juste le droit de conduire")
// } else {
//     console.log("Derniere condition")
// }

// // 

// let myCurrentAge = 55
// let age1 = 10
// let age3 = 30
// let age4 = 30
// let age5 = 50

// Ecrire 4 conditions chainées pour afficher les resultats suivants :
// "Tu as moins de 10 ans "
// "Tu as entre 11 et 30 ans "
// "Tu as entre 31 et 50 ans "
// "Tu as plus de 50 ans "

// if (myCurrentAge < age1) {
//     console.log("Tu as moins de 10 ans")
// } else if (myCurrentAge <= age3) {
//     console.log("Tu as entre 11 et 30 ans")
// }else if (myCurrentAge >= age4) {
//     console.log("Tu as entre 31 de 50 ans")
// }else if (myCurrentAge > age5) {
//     console.log("Tu as plus de 50 ans")
// } else {
//     console.log("Derniere condition")
// }



// Variable Complexe : Les Objets

// const myIdentity = {
//     firstName: "Mehdi",
//     lastName: "Mbarek",
//     age: 35,
//     town: "Bordeaux"
// }

// let age = 25
// let ageChild = 16

// let child = "adulte"

// if (age < ageChild) {
//   "Enfant"
// } else if (age > ageChild) {
//   "Adulte"}



// console.log(myIdentity.firstName)

// const fullNameFromIdentity = myIdentity.firstName + " " + myIdentity.lastName

// console.log(fullNameFromIdentity)

// const myPresentation = "Bonjour je m'appelle "+ fullNameFromIdentity + " j'ai " + myIdentity.age + " ans, et j'habite " + myIdentity.town  + " et je suis un " + child

// console.log(myPresentation)

// Difficulté supplémentaire
// Ajoute une variable "adulte"
// Ajoute un test, si l'age est inférieur a 18, change ka variable en "enfant"
// Concatene cette variable a la fin de la phrase avec "et je suis un"

const person1 = {
    firstName: "Madi",
    lastName: "Mbarek",
    age: 17,
    town: "Bordeaux",
}

const person2 = {
    firstName: "Mehdi",
    lastName: "Mbarek",
    age: 18,
    town: "Paris",
}
const person3 = {
    firstName: "Modi",
    lastName: "Mbarek",
    age: 15,
    town: "Marseille",
}

let personToTest = person3

// if (personToTest.town === "Bordeaux") {
//     console.log ("habite a bordeaux")
// } else if (personToTest.town != "Bordeaux") {
//     console.log ("habite pas a bordeaux")
// }

//Ecrire le test pour savoir si la personne est mineur qui habite a bordeaux => &&

// if ((personToTest.age < 18) && (personToTest.town === "Bordeaux")) {
//     console.log(`${personToTest.firstName} est mineur est habite à Bordeaux`);
// } else {
//     console.log(`${personToTest.firstName} n'est pas mineur ou n'habite pas à Bordeaux`);
// }

//Ecrire le test pour savoir si la personne habite a Paris OU a Marseille

if (personToTest.town === "Paris") {
    console.log(`${personToTest.firstName} Habite à Paris`);
} else if (personToTest.town === "Marseille") {
    console.log(`${personToTest.firstName} Habite à Marseille`);
} else {
    console.log(`${personToTest.firstName} N'habite ni à Paris ni à Marseille`);
}


// LES TABLEAUX : Array
let myArray = ["Sara","Alice","Antoine","Stephane"]
let myArrayOfObjects = [
    {name: "Sara", gender: "f"},
    {name: "Alice", gender: "f"},
    {name: "Antoine", gender: "m"},
    {name: "Stephane", gender: "m"},
]


let fName = myArray[3]

//"Sara, Alice et Stéphane sont partis"

// console.log(`${myArray[0]}, ${myArray[1]} et ${myArray[3]} sont partis`);

let objectToTest = myArrayOfObjects[0]
let gone = "parti"

if(objectToTest.gender == 'f')
{    gone += 'e'
}    console.log(`${objectToTest.name} est ${gone} !`)
 







