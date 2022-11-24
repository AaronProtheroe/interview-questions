// Number to be raised
x = 3

// Power that the number will be raised to
n = -4

const myPow = (x, n) => {

    // Sets the power to x
    power = x

    // Multiplies the power by the number to be raised for each iteration
    for (i = 1; i < n; i++) {
        power = power * x
    }

    // If n is negative it converts the exponent to a positive number
    // and performs the same calculation but returns 1 / power instead of the power
    if (n < 0) {

        n = n * -1
        
        power = x

        for (i = 1; i < n; i++) {
            power = power * x
        }
        return 1 / power

    // Returns 1 if the number is raised tot the power of 0    
    } else if (n == 0) {
        return 1
    }
    else {
        return power
    }
    
}

console.log(myPow(x, n))