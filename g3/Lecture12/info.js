function sayMyName() {
    return `My name is Igor Mitkovski`;
}
function sayAge() {
    return `Im 30 yo`
}
function calculateAge(birthDate) {
    return new Date().getFullYear - birthDate
}

module.exports = {
    sayMyName,
    sayAge
}