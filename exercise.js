// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// const objC = { a: 5, d: 11, e: 8 }
// const objD = { c: 3 }

// function combine(...rest) {
//     resultObj = {isEmpty: 0}
//     let isIssue = false;
//     for (const el of rest) { 
//         for (const key1 in el) {
//             isIssue = false
//             for (const key2 in resultObj) { 
//                 if (key1 !== key2) {
//                     isIssue = true
//                 } else {
//                     resultObj[key2] += el[key1]
//                     isIssue = false
//                     break
//                 }
//             }
//             if (isIssue) {
//                 resultObj[key1] = el[key1]
//             }
//         }
//     }
//     delete resultObj.isEmpty
//     return resultObj
// }

// combine({}, {}, {} )
//____________________________________________________________________________________________________________

// let user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;

//____________________________________________________________________________________________________________

//Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// function isEmpty(obj) {
//     for (const key in obj) {
//         return false
//         }
//     return true
// }

//____________________________________________________________________________________________________________

// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
// let sum=0;
// for (const key in salaries) {
//     sum += salaries[key]
// }
// console.log(sum);

//____________________________________________________________________________________________________________

//Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2. 
//P.S. Используйте typeof для проверки, что значение свойства числовое.

// до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

console.log(menu);

function multiplyNumeric(obj) {
    for (const key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2
        }
    }
}

multiplyNumeric(menu);
console.log(menu);

