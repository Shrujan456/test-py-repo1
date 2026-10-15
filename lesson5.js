//logical "AND"
console.log(true && true) //true
console.log(true && false) //false
console.log(false && true) //false
console.log(false && false) //false

//logical OR
console.log(true || true) //true
console.log(true || false) //true
console.log(false || true) //true
console.log(false || false) //false

var ageIsMoreThan18 = true
var isUSCitizen = true

var eligibleToVote = ageIsMoreThan18 && isUSCitizen
console.log('This customer is eligible to vote: ' + eligibleToVote)

//LOGICAL NOT
console.log(!true) //false
console.log(6 == 10) //false
console.log(!(6 == 10)) //true //console.log((6 != 10))
console.log(!(6 == 6)) //false