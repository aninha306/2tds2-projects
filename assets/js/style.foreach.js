/*const companies = ["Apple", "Google", "Facebook"];

companies.forEach(company => {
    console.log(`Hey, ${company}!`);
});*/


/*const names = ["Whinds", "Freeway", "Teste", "Maria"];

names.forEach((name) => {
    console.log(`Hi, ${name}!`);
});*/


/*const numbers = [1,2,3,4,5,6,7,8,9,10];

console.log(numbers);

numbers.forEach((number, index) => {
    if(number % 2 == 0){
        console.log(`A posição de ${number} é ${[index]}`);
    }
});*/


class Cars{
    constructor(marca1, model2){
        this.marca1 = marca1;
        this.model2 = model2;
    }
}

class CarsList{
    constructor(){
        this.cars = [];
    }
    addCars(Cars){
        this.cars.push(Cars);
    }
    teste(){
        console.log();
    }
}
const carsList = new CarsList();

function CarsModel(){
    let marca1 = document.getElementById("marca").value;
    let model2 = document.getElementById("modelo").value;

    const myCar = new Cars(marca1, model2);

    carsList.addCars(myCar);

    console.log(carsList);

}


