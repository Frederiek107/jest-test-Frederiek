function divideBy3(number) {
    const result= (number/3);
if (number%3 ===0) {
    return true;
}
else {
    return false;
}
}


module.exports = {
    divideBy3:divideBy3,
}