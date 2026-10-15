//objects

var customer = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    cars: ["BMW", "Toyota", "Honda"]
}
console.log(customer)
console.log(customer.firstName)
console.log(customer["lastName"])

//Dot notation 
customer.firstName = "Mike"

//Bracket notation
customer["lastName"] = "Silver"
console.log(`${customer.firstName} ${customer.lastName}`)

//arrays
var car = ["BMW", "Toyota", "Honda"]
car[1] = "Mercedes"
console.log(car)
console.log(car[1])
console.log(customer.cars[0])