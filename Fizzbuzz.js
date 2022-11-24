const fizzbuzz = (n) => {

    // This will be the array outputed to the console
    const outputArray = []

    // Iterates from 1 up to and including the inputed number
    for (i = 1; i <= n; i++) {

        // If i id divisible by 3 and not 5 it adds fizz to the array
        if (i % 3 == 0 && i % 5 != 0) {
            outputArray.push('Fizz')

        // If the number is divisble by 5 but not 3 it pushes buzz to the array    
        } else if (i % 5 == 0 && i % 3 != 0) {
            outputArray.push('Buzz')

        // If the number is divisble by 3 and 5 and pushes Fizzbuzz to the arrray    
        } else if (i % 5 == 0 && i % 3 == 0) {
            outputArray.push('Fizzbuzz')

        // If the number is divisble by neither it will push the number the array    
        } else {
            outputArray.push(i.toString())
        }
    }
    return outputArray
   
}

console.log(fizzbuzz(15))