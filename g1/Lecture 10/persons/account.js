function makeMeAnAccount(personId) {
    const result = {
        ownerId: personId,
        accountNumber: generateNewAccountNumber(),
        balance: 0,
        withdraw: function (ammount) {
            //...
        },
        deposit: function (ammount) {
            // ...
        }
    }
    return result;
}


function generateNewAccountNumber() {
    return 3;
}