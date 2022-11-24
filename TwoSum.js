// Array off numbers
const numbers = [2, 7, 11, 15]

//Target value
const target = 22

// Function to find the inidices of the numbers that add up to the target
const twoSums = (nums, target) => {

    outputArray = []

    // Outer loop
    for (i = 0; i < nums.length; i++) {

        // Inner loop
        for (j = i + 1; j < nums.length ; j++) {

            // Checks if the numbers add up to the target
            if (nums[i] + nums [j] == target){

                // Logs to the console the indices of the numbers that add up to the target
                outputArray.push(i)
                outputArray.push(j)
            }
        }
    }
    return outputArray
}

console.log(twoSums(numbers, target))