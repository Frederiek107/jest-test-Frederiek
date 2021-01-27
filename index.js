//divisibleBy3() should return if dividing a given number by 3 returns a round number: true/false

function divisibleBy3(number) {
if (number%3===0) {
    return true;
}
else {
    return false;
}
}

module.exports = {
    divisibleBy3:divisibleBy3,
}