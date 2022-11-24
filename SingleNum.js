// Array of numbers  where only 1 number does not have a duplicate in the array
const numbers = [2,2,1]

const singleNumber = (nums) => {

    // Sorts the array from smallest numbers to largest numbers
    const sortedNums = nums.sort()

    // Loops through the sorted array. If any duplicates occur they will be right next to one
    // another so it checks for the number that doess not a have a duplicate next to it and returns that number
    for (i = 0; i < nums.length; i++) {
        if (sortedNums[i] != sortedNums[i-1] && sortedNums[i] != sortedNums[i+1]) {
            return sortedNums[i]
        }
    }
}

console.log(singleNumber(numbers))