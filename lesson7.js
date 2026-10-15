// //Loops

// console.log('Hello World!')
// console.log('Hello World!')
// console.log('Hello World!')
// console.log('Hello World!')
// console.log('Hello World!')

// for (statement1; statement2; statement3) {

// }

//for loop(for i loop)
for (let i = 0; i < 5; i++) {
    console.log('Hello World!' + i)
}

//WAP to print each element of an array using for loop

var cars = ["Volvo", "BMW", "Toyota"]
//for of loop
for (let car of cars) {
    console.log(car)
    if (car == "BMW") {
        break
    }
}

//E56 syntax for each loop
cars.forEach(car => {
    console.log(car)
}
)