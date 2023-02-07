
function writeCards(firstArray) {
    let array = [];
    for (let i = 0; i < firstArray.length; i++) {
        array.push(`Thank you, ${firstArray[i]}, for the wonderful surprise gift!`);

    };
    return array;
};

writeCards();

function countDown() {
let number = 10;
while(number >= 0) {
    console.log(number--);
}
}

