// Number to be reversed
const number = -29463

const reverseInteger = (number) => {

    // Converts number to a string
    const stringNumber = number.toString()

    reverseNumberArray = []

    // Iterates through the string in reverse and pushes it to the reverseNumberArray
    for (i = stringNumber.length -1; i >= 0;i--) {
        reverseNumberArray.push(stringNumber[i])
    }

    // Converts the reverse number array into a string
    reverseStringNumber = reverseNumberArray.join("")
    
    // Converts the reversed number string into an integer and returns it
    reverseNumber = parseInt(reverseStringNumber)

    if (number < 0) {
        return reverseNumber * -1
    } else if (reverseNumber > (2 ** 31 || reverseNumber < 2 ** -31)) {
        return 0
    } else {
        return reverseNumber
    }
   
}

console.log(reverseInteger(number))