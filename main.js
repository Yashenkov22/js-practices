
// Задание №1

console.log('Задание №1');


let x1 = 8;
let y1 = 1;


let x2 = 5;
let y2 = 1;


let xSumm = Math.abs(x1 - x2);
let ySumm = Math.abs(y1 -y2);


console.log(xSumm * ySumm);

// Задание №2
console.log('Задание №2');


let a = 13.890123;
let b =  2.891564;
let n =  3;

let aFloor = Math.floor(a);
let bFloor = Math.floor(b);

let aSurplus = Math.floor((a - aFloor) * Math.pow(10, n));


let bSurplus = Math.floor((b - bFloor) * Math.pow(10, n));


console.log(aSurplus, bSurplus);
console.log(aSurplus > bSurplus);
console.log(aSurplus < bSurplus);
console.log(aSurplus === bSurplus);
console.log(aSurplus !== bSurplus);


// Задание №3

console.log('Задание №3');

let m = 100;
let f = 0; //n заменил на f;

let min = Math.min(m, f);

let range = Math.abs(m - f);
let randomNumber = Math.floor(Math.random() * range) + min;

console.log('Нечетные числа');
let OddNumber = randomNumber + 1 - Math.abs(randomNumber % 2);
console.log(OddNumber);

console.log('Четные числа');
let EvenNumber = randomNumber + 1 - Math.abs((randomNumber + 1) % 2);
console.log(EvenNumber);


// let numOne = Math.round((1.005 + Number.EPSILON) * 100) / 100;
// console.log(numOne);

console.log('Пракитка условных операторов');

// сonsole.log('Задание №1');

let password;

password = "123456789-";

if (password.length > 4 && (password.includes('-') || password.includes('_'))) {
  console.log('Надежный пароль');
} else {
  console.log('Пароль не достаточно надежный');
};


let userName;
let userSurname;

userName = 'Григорий';
userSurname = 'Петров';
// let surname;

let upperLetterName = userName.substr(0, 1);
let lowerLetterName = userName.substr(1);

// console.log(upperLetterName);
// console.log(lowerLetterName);

let upperCaseName = upperLetterName.toUpperCase();
// console.log(upperCaseName);

let lowerCaseName = lowerLetterName.toLowerCase();
// console.log(lowerCaseName);

let newName = upperCaseName + lowerCaseName;
console.log(newName);
//
let upperLetterSurname = userSurname.substr(0, 1);
let lowerLetterSurname = userSurname.substr(1);

// console.log(upperLetterName);
// console.log(lowerLetterName);

let upperCaseSurname = upperLetterSurname.toUpperCase();
// console.log(upperCaseName);

let lowerCaseSurname = lowerLetterSurname.toLowerCase();
// console.log(lowerCaseName);

let newSurname = upperCaseSurname + lowerCaseSurname;
console.log(newSurname);


if (userName === newName && userSurname === newSurname) {
  console.log('Имя осталось без измениний');
} else {
  console.log('Имя было преобразовано');
}


let fibo = [1, 1];

for (let i = 1; i < 49; ++i) {
  fibo.push(fibo[i] + fibo[i - 1]);
}
console.log(fibo);

console.log('For of')

let fruits = ['Яблоко','Апельсин','Банан','Груша'];
for (let fruit of fruits) {
  console.log(fruit)
}

console.log('Русская Рулетка');

do {
  console.log('Нажимаем на курок');
} while (Math.random() > 0.1);

console.log('Похоже, Вам не повезло');

let masive = [];
let i;
for(i = 0; i < 31; i += 2) {
  masive.push(i);
}
console.log(masive.length);
console.log(masive);


// Генератор массивов

console.log('Генератор массивов');

let mass = [];
let q = -3;
let w = -10;
let count = 42;
let rangeMass = Math.abs(q - w);
let minMean = Math.min(q, w);
let maxMean = Math.max(q, w);
let randomNum;

for (i = 0; i < count; ++i) {
  randomNum = Math.round((Math.random() * rangeMass)) + minMean;
   mass.push(randomNum);
}


// while (mass.length < count) {
//   randomNum = Math.round((Math.random() * rangeMass)) + minMean;
//   mass.push(randomNum);
// }

console.log(mass);


console.log('Перевертыш');

let string = 'Салам алейкум';
console.log(string);
let newString = '';

for (i = string.length - 1; i >= 0; --i) {
  newString += string[i];
}

console.log(newString);


// танк

console.log('Танк');


let roadMines = [true, false, false, false, false, false, false, false, true, false];

let lives = 2;

for (i = 0; i < roadMines.length; ++i) {
  if (roadMines[i] == 1) {
    lives -= 1;
    if (lives > 0) {
      console.log(`Танк продвинулся на ${i + 1}ую позицию`);
      console.log(`Танк поврежден на ${i + 1}ой позиции`);
    } else {
      console.log(`Танк продвинулся на ${i + 1}ую позицию`);
      console.log(`Танк уничтожен на ${i + 1}ой позиции`);
      break;
    }

  } else {
    console.log(`Танк продвинулся на ${i + 1}ую позицию`);
  }
}
