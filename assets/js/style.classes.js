/*let personSimple = "John Doe";

const personObject = new Object();
personObject.firstName = "John";
personObject.lastName = "Doe";
personObject.age = 50;
personObject.eyeColor = "blue";

console.log(personSimple);
console.log(personObject);*/


/*let personSimple = "John Doe";

const personObject = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
}

personObject.age = 10;

console.log(personSimple);
console.log(personObject);*/


/*class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Olá, meu nome é ${this.name} e tenho ${this.age} anos!`);
    }
}*/


/*const user1 = new User('João', 30);
user1.introduce();
console.log(user1); // Saída: Olá, meu nome é João e tenho 30 anos!*/


/*class Pizza {
    constructor(base, sauce, toppings, cheese) {
        this.base = base;
        this.sauce = sauce;
        this.toppings = toppings;
        this.cheese = cheese;
    }

    getDescription() {
        return `A delicious pizza with ${this.base} base, ${this.sauce} sauce, ${this.toppings} toppings, and lots of cheese.`;
    }

    getTimerBase() {
        if (this.base == 'traditional') {
            return 10;
        } else if (this.base == 'integral') {
            return 15;
        } else {
            return 'This base does not exist!';
        }

    }

    getTimerSauce() {
        if (this.sauce == 'tomato') {
            return 10;
        } else if (this.sauce == 'pesto') {
            return 15;
        } else {
            return 'This sauce does not exist!';
        }
    }

    getTimerToppings() {
        if (this.toppings == 'pepperoni') {
            return 10;
        } else if (this.toppings == 'calabresa') {
            return 15;
        } else {
            return 'This toppings does not exist!';
        }
    }

    getTimerCheese() {
        if (this.cheese == 'mozzarela') {
            return 10;
        } else if (this.cheese == 'cheddar') {
            return 15;
        } else {
            return 'This cheese does not exist!';
        }
    }
}
// Example usage
const myPizza = new Pizza('traditional', 'tomato', 'calabresa', 'mozzarela');
let timeTotalPizza = myPizza.getTimerBase() + myPizza.getTimerSauce() + myPizza.getTimerToppings() + myPizza.getTimerCheese();
console.log(myPizza.getDescription());
console.log('Cooking time in minutes:' + timeTotalPizza );*/


/*class Calculator {
    add(a, b) {
        return a + b;
    }
    multiply(a, b) {
        return a * b;
    }
    subtract(a, b){
        return a - b;
    }
    division(a, b){
        return a / b;
    }
}

// Example usage
const calculator = new Calculator();

const sumResult = calculator.add(5, 3);
console.log("Sum:" , sumResult);

const multiplicationResult = calculator.multiply(4, 2);
console.log("Multiplication:" , multiplicationResult);

const subtractionResult = calculator.subtract(10, 4);
console.log("Subtraction:" , subtractionResult);

const divisionResult = calculator.division(50, 4);
console.log("Division:" , divisionResult);*/


/*class Witch {
    constructor(name, patron, house, colorEyes) {
        this.name = name;
        this.patron = patron;
        this.house = house;
        this.colorEyes = colorEyes;
    }

    getName() {
        return `O nome do bruxo(a) é: ${this.name}`;
    }
    getHouse() {
        return `Ele(a) está na casa ${this.house}`;
    }
    getPatron() {
        return `Seu patrono é: ${this.patron}`;
    }
    getColorEye() {
        return `A cor de seus olhos é: ${this.colorEyes}`;
    }
}

const witch1 = new Witch('Harry Potter', 'Deer', 'Grynffindor', 'green');

console.log(witch1.getName());
console.log(witch1.getHouse());
console.log(witch1.getPatron());
console.log(witch1.getColorEye());

// Exemplo Herança:
class TypeWitch extends Witch {
    constructor(name, patron, house, colorEyes, typeWitch) {
        super(name, patron, house, colorEyes);
        this.typeWitch = typeWitch;
    }

    getTypeWitch() {
        if (this.typeWitch === 'P') {
            return "Este bruxo é sangue puro";
        }
        else if (this.typeWitch === 'M') {
            return "Este bruxo é Mestiço";
        }
        else {
            return "Este é um trouxa";
        }
    }
}

const harry = new TypeWitch('Harry Potter', 'Cervo', 'Sonserina', 'verde', 'M');
console.log(harry.getTypeWitch());*/


class CamaraSecreta {
    constructor(name, pwd) {
        this.name = name;
        let _pwd = pwd; // Atributo privado.

        // Método privado, mas não no JS
        this.verifyPwd = (pwdInput) => {
            return pwdInput == _pwd; // True or False
        };

        // Método privado, mas não no JS
        this.acessChamber = () => {
            let pwdInput = prompt("Digite a senha");
            if (this.verifyPwd(pwdInput)) {
                console.log(`Bem vindos a Camara Secreta ${this.name}`)
            } else {
                console.log("Acesso negado trouxa!")
            }
        };

    }
    // Métodos públicos
    showName() {
        console.log(`Nome do bruxo: ${this.name}`);
    }
}

const myAccess1 = new CamaraSecreta('Harry Potter', 'senha123');

//Método público
myAccess1.showName(); // Top

myAccess1.name = 'HP'; // Funciona pois o atributo é público
myAccess1.pwd = '123'; // Não funciona, atributo privado

//Método privado
myAccess1.acessChamber(); // Na teoria não deveria funcionar, mas no JS funciona