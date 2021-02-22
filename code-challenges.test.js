// ASSESSMENT 2: Coding practical questions with Jest

// Please read all questions thoroughly

// Pseudo coding is HIGHLY recommended

// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisble by three"


// describe ("When divisibleByThree gets called, return if value can be evenly devided by 3", () =>{
//     it (`if number is evenly divisible by 3, return ${argument} is divisible by 3`, () => {
//         const argument = 15;
//         const actualResults = divisibleByThree(argument)
//         expect(actualResults).toEqual(`${argument} is divisible by 3`)
//     })
//     it (`if number is evenly divisible by 3, return ${argument} is divisible by 3`, () => {
//         const argument = 0;
//         const actualResults = divisibleByThree(argument)
//         expect(actualResults).toEqual(`${argument} is divisible by 3`)
//     })
//      it (`if number is not evenly divisible by 3, return ${argument} is not divisible by 3`, () => {
//             const argument = -7;
//             const actualResults = divisibleByThree(argument)
//             expect(actualResults).toEqual(`${argument} is not divisible by 3`)
//     })
// })

const divisibleByThree= (value) =>{
    if(value % 3 !== 0){
        return `${value} is not divisible by 3`
    }else if(value % 3 === 0){
        return `${value} is divisible by 3`
    }else
    return `${value} is not divisible by 3`
}

var num1 = 15

var num2 = 0

var num3 = -7

console.log(divisibleByThree(num1))
console.log(divisibleByThree(num2))
console.log(divisibleByThree(num3))







// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.


//creating function that takes in an array 
//retruns new array .map
// index of 0 toUpperCase

// test ("when function capitalize is called, return will retrun a new array with first letter capitalize", () =>{
//     const argument = randomNouns1
//     const actualResults = cappedWord(argument)
//     expect (actualResults).toEqual["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// })


const capitalize = (array) => { 
    let cappedWord =[]
    array.forEach(element => {
        cappedWord.push (element[0].toUpperCase() + element.slice (1,element.length));
    })
    return cappedWord.join(" ")
}



// a) Create a test with expect statements for each of the variables provided.

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

console.log(capitalize(randomNouns1))
console.log(capitalize(randomNouns2))




// b) Create the function that makes the test pass.





// --------------------3) Create a function that takes in an array of mixed data types and returns an array with ONLY NUMBERS sorted from least to greatest.

// creating function onlyNumbers
//takes mixed array as function 
//returns only numbers
//create a test that take function as the argument and check if it retruns numbers

// test ("when function onlyNumbers is called, return a new array with only numbers", () =>{
//     const argument = mixedDataArray1
//     const actualResults = newArray(argument)
//     expect (actualResults).toEqual["-8","0", "8", "46", "59", "107"]
// })

const onlyNumbers = (array) => {
    let newArray = array.filter(value =>{
        return typeof value === "number"
    })
    return newArray
}

// a) Create a test with expect statements for each of the variables provided.

var mixedDataArray1 = [true, 8, "hello", -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 107]

var mixedDataArray2 = [3, "yo!", 94, -9, false, 0, 18, "hola!"]
// Expected output: [-9, 0, 3, 18, 94]


console.log(onlyNumbers(mixedDataArray1))
console.log(onlyNumbers(mixedDataArray2))


// b) Create the function that makes the test pass.





// --------------------4) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

//create a function that takes a string as argument
//returns index of first vowel

//newArray = string.split() to split the string into a new array
//use foreach to run throught the vlues of the array and retrun the indexof(value)

////????? i finally gave up i have spend most of my day trying to make this work. 

//?????i can make it five me the location of the vowels at one point i also had it giving pushing the first vowel to the new array but i I counlnt get it give me the location of the index 

//????the .forEach was my last ditch effort to make it work. 

// describe("When firsVowlIndex gets called, return only the index of the first vowel in string")
// const argument = vowlTester1
// const actualResults = firstLett(argument)
// expect(actualResults).teEqual("1")


// const firstVowleIndex = (string) => {
//     let newArray = string.split('');
//     // let firstLett =[]
//     let firstVowel = newArray.indexOf('a' || 'e' ||'i' || 'o'|| 'u' || 'y')
//   // return firstVowel.forEach(value => {
//   //   if ('a' > 'e','i','o','u')
//   //   return firstLett.push(value);
//   //   else if('e' > 'a','i','o','u')
//   //     return firstLett.push(value);
//   //       else if('i' > 'a','i','o','u')
//   //     return firstLett.push(value);
//   //       else if('o' > 'a','i','o','u')
//   //     return firstLett.push(value);
//   //       else if('u' > 'a','i','o','u')
//   //     return firstLett.push(value);
//   //     })  
//     //   return firstLett
//     // }

//   return firstVowel

//     }   
//   // for(let i = 0 ; i < array.length; i++)
//     // { 
// // }
// // if ('a' > 'e','i','o','u')
// // return
  

// var vowelTester1 = "learn"
// Expected output: 1

// var vowelTester2 = "academy"
// Expected output: 0
// var vowelTester3 = "challenge"
// Expected output: 3
// console.log(firstVowleIndex(vowelTester1))
// console.log(firstVowleIndex(vowelTester2))
// console.log(firstVowleIndex(vowelTester3))




// b) Create the function that makes the test pass.
