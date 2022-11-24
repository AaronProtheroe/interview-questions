// Number to be checked
const number = 12321

const isPalindrome = (num) => {

    // Converts the number to a string
    const stringNumber = num.toString()
    
    // Converts string to an array
    const arrayNumber = stringNumber.split("")
    
    // Revereses the array
    const reverseArrayNumber = arrayNumber.reverse()
    
    // Converts the reversed array to a string  
    const reverseStringNumber = reverseArrayNumber.join("")
    
    // Checks if the reversed string and the original strings are equal and returns true or false
    if (reverseStringNumber == stringNumber) {
        return true
    } else {
        return false
    }
}

console.log(isPalindrome(number))