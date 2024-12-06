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


const pet = {
    name: 'Strider',
    happiness: 50,
    hunger: 50,
    health: {
        hygiene: 75,
        energy: 50,
        dental: 100,
        coat: 30,
        // могут быть и другие показатели
    },
    sayHi() {
        console.log('Meow!')
    },
    checkStatus() {
        console.log(`Счастье: ${this.happiness}, Голод: ${this.hunger}`)
    },
    feedPet(foodQuantity) {
        this.hunger -= foodQuantity

        if (this.hunger < 0) {
            this.hunger = 0;
        }

        console.log(`Питомец покормлен! Текущий голод: ${this.hunger}`)
    }
}

pet.feedPet(20) // Уменьшает голод на 20

pet.checkStatus()

pet.sayHi() // 'Meow!'

// К свойствам объекта можно обратится с помощью точечной нотации
console.log(pet.hunger)

pet.age = 2
console.log(pet)

delete pet.age
console.log(pet)

const property = 'name'
console.log(pet[property]) // Strider


function playWithPet(petObject) {
    petObject.happiness += 20;  // Увеличиваем счастье
}

// Вызов функции с объектом pet
playWithPet(pet)

// Проверяем состояние питомца после игры
console.log(pet)



const pet1 = {
    name: 'Strider',
    character: {
        kindness: 75,
    },
}

const pet2 = {
    name: 'Percival',
    character: pet1.character,
}

pet2.character.kindness = 100

console.log(pet1.character.kindness)
console.log(pet2.character.kindness)


function generateHealthReport(pet) {
    console.log(`Отчет о здоровье ${pet.name}:`)
    const health = pet.health

    for (const key in health) {
        console.log(`${key}: ${health[key]}`)
    }
}

generateHealthReport(pet)