const randomNumber = Math.random();

if(randomNumber >0.5) {
    console.log("grater than 0.5");
} else if (randomNumber >0.25){
    console.log("greater than 0.25")
} else {
    console.log("is smaller or exactly 0.25")
}

const intRandomNumber = Math.floor(Math.random()*5);

switch (intRandomNumber) {
    case 1:
        console.log("Random number is exatly 1");
        break;
    case 3:
        console.log("Random number is exatly 1");
        break;
    default:
        console.log("Random number is not 1 or 3");
        break;
}