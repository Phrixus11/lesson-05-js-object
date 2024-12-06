// const prop = "name"

// const car = {
//     year: 2015,
//     mark: "BMW",
//     model: "X5",
//     engine: {
//         capacity: 2.5,
//         fuel: "diesel",
//     },
//     ["car_" + prop]: "beshka"
// }

// const human = {
//     gender: "female",
//     age: 25,
//     ["human_" + prop]: "Anne",
//     friends: ["Bob", "Alex"]
// }

// const newObject = new Object()

// console.log(car );
// console.log(human);
// console.log(newObject);

class Student {
    constructor(name, age, isStudent) {
        this.name = name,
            this.age = age,
            this.isStudent = isStudent
    }
}

// const student = new Student("Bob", 32, true)



// // чтение св-ва
// console.log(student.name);
// // создание св-ва
// student.course = "Front-end"
// // изменение св-ва
// student.course = "Бык-энд"
// // удаление св-ва
// delete student.course
// // перебор ключей в объекте
// for (const key in student) {
//     console.log(`${key} => ${student[key]}`);
// }


// Дайте имя вашему виртуальному питомцу
let name = 'Strider'
// Состояние питомца
let happiness = 50
let hunger = 50

// Функция приветствиия
function sayHi() {
    console.log('Meow!')
}

// Функция для проверки состояния питомца
function checkStatus() {
    console.log(`Счастье: ${happiness}, Голод: ${hunger}`)
}

// Функция для кормления питомца
function feedPet(foodQuantity) {
    hunger -= foodQuantity // // то же самое, что и hunger = hunger - foodQuantity

    if (hunger < 0) {
        hunger = 0
    }
    console.log('Питомец покормлен!')
}



const myPet = {
    name: 'Strider',
    happiness: 100,
    hunger: 100,
    sayHi() {
        console.log('Meow!')
    },
    checkStatus() {
        console.log(`Счастье: ${this.happiness}, Голод: ${this.hunger}`)
    },
    feedPet(foodQuantity) {
        this.hunger -= foodQuantity
        if (this.hunger < 0) {
            this.hunger = 0
        }
        console.log('Питомец покормлен!')
    },
    playWithPet() {
        this.happiness += 20
    }
}

myPet.checkStatus()
myPet.feedPet(30)
myPet.checkStatus()
myPet.playWithPet()
myPet.checkStatus()


class Pet {
    constructor(type, name, happiness, hunger, voice) {
        this.type = type;
        this.name = name;
        this.happiness = happiness;
        this.hunger = hunger;
        this.voice = voice
    }
    sayHi() {
        console.log(`${this.voice}`)
    };
    checkStatus() {
        console.log(`${this.name}: счастье - ${this.happiness}, голод: - ${this.hunger}`)
    };
    feedPet(foodQuantity) {
        this.hunger -= foodQuantity
        if (this.hunger < 0) {
            this.hunger = 0
        }
        console.log(`${this.name} покормлен!`)
    };
    playWithPet() {
        this.happiness += 20
    }
}


const pet = new Pet("rat", "Belka", 100, 100)
pet.checkStatus()

const veraS_pet = new Pet("lizard", "Rex", 1000, 1000)
veraS_pet.checkStatus()
veraS_pet.feedPet(200)
veraS_pet.checkStatus()
console.log(pet);



