//Conditional statements

//if (condition) {
//execute some code here
//} else {
//execute some other code here
//}

//if hour between 6 and 12, print "good morning"
//if hour between 12 and 18, print "good afternoon"
//otherwise print "good evening"

var hour = 16.5
if (hour >= 6 && hour < 12) {
    console.log('Good morning')
} else if (hour >= 12 && hour < 18) {
    console.log('Good afternoon')
} else {
    console.log('Good evening')
}

var ageIsMoreThan18 = true
var isUSCitizen = true

if (ageIsMoreThan18 && isUSCitizen) {
    console.log('This customer is eligible to vote')
} else {
    console.log('This customer is not eligible to vote')
}