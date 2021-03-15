let newPassword = prompt('Please enter your new password: ')
let confirmPassword = prompt('Please re-enter your new password: ')

function Compare(pass1, pass2){
	let userNewPassword = pass1.localeCompare(pass2)
    return userNewPassword
}

let matchingPasswords = Compare(newPassword, confirmPassword)
switch(matchingPasswords){
  case 0: console.log('The passwords are the same.')
  break
  case 1: console.log('The passwords are not the same.')
  break
}