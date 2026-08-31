const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function isPerfect(num) {
    if (num <= 1)
        return false;
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== num / i) {
                sum += num / i;
            }
        }
    }
    return sum === num;
}
rl.question("Enter a number: ", function(input) {
    let n = parseInt(input);
    if (isPerfect(n)) {
        console.log(n + " is a Perfect number.");
    } 
    else {
        let nearest = n - 1;
        while (nearest > 0 && !isPerfect(nearest)) {
            nearest--;
        }
        console.log(n + " is not a Perfect number.");
        if (nearest > 0) {
            console.log(
                "Nearest Perfect number less than " +
                n + " is " + nearest
            );
        } 
        else {
            console.log(
                "There is no Perfect number less than " + n
            );
        }
    }
    rl.close();
});