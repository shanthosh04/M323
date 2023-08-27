for (let i = 0; i < 10,i++) {
    console.log('i is',i);
}

let randomNumber= Math.floor(Math.random()* 10);

while (randomNumber> 8) {
    console.log('randomNumber is', randomNumber);
    randomNumber = Math.floor(Math.random()* 10);
}
