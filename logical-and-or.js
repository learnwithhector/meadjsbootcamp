let temp = 55

if (temp >= 60 && temp <=90) {
    console.log('It is pretty nice out')
} else if (temp <= 0 || temp >= 120) {
    console.log('Do not go outside')
} else {
    console.log('Eh, do what you want')
}

// Challenge area

let isGuestOneVegan = false
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only offer vegan food')
} else if ( isGuestOneVegan || isGuestTwoVegan) {
    console.log('Offer some vegan options')
} else {
    console.log('Offer everything on menu')
}