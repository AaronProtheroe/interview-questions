const nums = [4, 5, 1, 8]

const plusOne = (nums) => {

    // Creates a string of digits from the nums array
   const stringNumber = nums.join('')
   
   // Converts the string to an integer
   const number = parseInt(stringNumber)

   // Increments the integer by 1
   const newNumber = number + 1

   // Converts the incremented integer back to a string
   const newNumberString = newNumber.toString()

   // creates a new array from the string
   const newNumberStringArray = newNumberString.split('')

   const newNumberArray = []

   // Creates a new array of digits from the incremented number and returns it
   for (i = 0; i < newNumberStringArray.length; i++) {
    newNumberArray.push(parseInt(newNumberStringArray[i]))
   }

   return newNumberArray
    
}

console.log(plusOne(nums))