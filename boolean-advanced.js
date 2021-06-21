let isAccountLocked = false
let userRole = 'user'

if (isAccountLocked) {
    console.log('The account is locked.')
} else if (userRole === 'admin') {
    console.log('Welcome admin')
} else {
    console.log('Welcome')
}

let temp = 4

if (temp >= 110) {
    console.log('It is way too hot outside.')
} else if (temp <= 32) {
    console.log('It is freezing outside.')
} else {
    console.log('Go for it. It is pretty nice outside.')
}