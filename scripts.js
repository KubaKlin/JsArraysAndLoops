// 1
const thingsInHome = ["mint", "basil", "cactus", "table", "wooden spoon", "bread"];
const thingsInGarden = ["apple", "trees", "stairs", "plum", "wooden bench"];

// -- edit below --
const madeOutOfWood = [thingsInHome[3], thingsInHome[4], thingsInGarden[1], thingsInGarden[2], thingsInGarden[4]];
const edibles = [thingsInHome[0], thingsInHome[1], thingsInHome[5], thingsInGarden[0], thingsInGarden[3]];
// -- edit above --

console.log(
    `made out of wood: ${JSON.stringify(madeOutOfWood)}\n edibles: ${JSON.stringify(edibles)}`
);

// 2
function getSmallestNumber(numbers) {
  let smallestNumber = numbers[0];

  for (let i = 1; i < numbers.length; ++i) {
    const currentNumber = numbers[i];

    if (currentNumber < smallestNumber){
      smallestNumber = currentNumber;
    }
  }

  return smallestNumber;
}

function getSmallestNumberSort(numbers) {
  numbers.sort(function(firstNumber, secondNumber){
    return firstNumber - secondNumber
  });
  return numbers[0];
}

getSmallestNumber([2, -5, 10, 1, 4]); // -5
getSmallestNumber([200, 25, 4, 123, 87]); // 4

console.log(getSmallestNumber([2, -5, 10, 1, 4]));
console.log(getSmallestNumber([200, 25, 4, 123, 87]));

console.log(getSmallestNumberSort([2, -5, 10, 1, 4]));
console.log(getSmallestNumberSort([200, 25, 4, 123, 87]));

// 3
function getSquaredNumbers(numbers) {
  let squaredNumbers= [];

  for (let i = 0; i < numbers.length; ++i) {
    squaredNumbers[i] = numbers[i] * numbers[i];
  }

  return squaredNumbers;
}

getSquaredNumbers([1, 2, 3, 4, 5]); // [1, 4, 9, 16, 25]
getSquaredNumbers([6, 7, 8, 9, 10]); // [36, 49, 64, 81, 100]

const numbers = [1, 2, 3];
const squaredNumbers = getSquaredNumbers(numbers);
console.log(squaredNumbers); // [1, 4, 9]
console.log(numbers); // [1, 2, 3]
console.log(numbers !== squaredNumbers); // true

// 4
function getReversedString(string) {
  let characters = string.split('');
  characters.reverse();

  return characters.join('');
}

console.log(getReversedString('Hello!')); // '!olleH'
console.log(getReversedString('Arrays')); // 'syarrA'

//5
function isPalindrome(string) {
  string = string.replace(/\s/g, '');

  return string.toLowerCase() === getReversedString(string.toLowerCase());
}

console.log(isPalindrome('Kayak')); // true
console.log(isPalindrome('Racecar')); // true
console.log(isPalindrome('Was it a cat I saw')); // true
console.log(isPalindrome('Hello!')); // false

//6
function countLetters(string) {
  let countedLetters = {};
  let characters = string.replace(/\s/g, '');
  characters = characters.toLowerCase();

  for (let i = 0; i < characters.length; ++i){
    let character = characters.charAt(i)
    if (!countedLetters[character]) {
      countedLetters[character] = 1;
    } else {
      countedLetters[character] += 1;
    }
  }

  return countedLetters;
}

const lettersObject = countLetters('The quick brown fox jumps over the lazy dog');

console.log(lettersObject);

// 7
function getYoungestPerson(peopleArray) {
  let youngestPerson = peopleArray[0];

  for (let i = 0; i < peopleArray.length; ++i) {
    if (youngestPerson.age > peopleArray[i].age) {
      youngestPerson = peopleArray[i];
    }
  }

  return youngestPerson;
}

function getOldestPerson(peopleArray) {
  let oldestPerson = peopleArray[0];

  for (let i = 0; i < peopleArray.length; ++i) {
    if (oldestPerson.age < peopleArray[i].age) {
      oldestPerson = peopleArray[i];
    }
  }

  return oldestPerson;
}

function getAgeDifference(peopleArray) {
  return getOldestPerson(peopleArray).age - getYoungestPerson(peopleArray).age;
}

const peopleArray = [
  {
    name: 'Adam',
    age: 20
  },
  {
    name: 'Amanda',
    age: 5
  },
  {
    name: 'John',
    age: 75
  },
  {
    name: 'Dave',
    age: 15
  }
]

console.log(getYoungestPerson(peopleArray));
console.log(getOldestPerson(peopleArray));
console.log(getAgeDifference(peopleArray)); // 70

// 8
function positiveSum(numbers) {
  let numbersSum = 0;

  for (let i = 0; i < numbers.length; ++i) {
    if (numbers[i] > 0) {
      numbersSum = numbersSum + numbers[i];
    }
  }

  return numbersSum;
}

console.log(positiveSum([1, 5, 10]));
console.log(positiveSum([-1, -5, -10]));

// 9
function squaredNumbersSummary(numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; ++i) {
    total = total + numbers[i] * numbers[i];
  }

  return total;
}

console.log(squaredNumbersSummary([0, 3, 4, 5]));

// 10
function abbreviateName(name) {
  const nameParts = name.split(' ');
  const firstName = nameParts[0].toUpperCase();
  const lastName = nameParts[1].toUpperCase();
  return `${firstName[0]}.${lastName[0]}`;
}

console.log(abbreviateName('Kuba klin'));

// 11
function countSheep(sheep) {
  let presentSheep = 0;

  for (let i = 0; i < sheep.length; ++i) {
    if (sheep[i] === true) {
      presentSheep = presentSheep + 1;
    }
  }

  return presentSheep;
}

// 12
function digitize(numbers) {
  const reverseArray = [];
  const digits = String(numbers);

  for (let i = 0; i < digits.length; ++i) {
    reverseArray.push(digits[i]);
  }

  return reverseArray.reverse();
}

console.log(digitize(35231));

// 13
function findNeedle(haystack) {
  for (let i = 0; i < haystack.length; ++i) {
    if (haystack[i] === 'needle') {
      return "found the needle at position" + ' ' + i;
    }
  }
}

// 14
function doubleNumbers(numbers){
  let doubledNumbers = [...numbers];

  for (let i = 0; i < doubledNumbers.length; ++i) {
    doubledNumbers[i] = doubledNumbers[i] * 2;
  }

  return doubledNumbers;
}

console.log(doubleNumbers([1, 2, 9]));

// 15
function invertNumbers(numbers) {
  let invertedNumbers = [...numbers];

  for (let i = 0; i < invertedNumbers.length; ++i) {
    invertedNumbers[i] = invertedNumbers * -1;
  }

  return invertedNumbers;
}

// 16
function summary(numbers) {
  let summaryNumbers = 0;

  for (let i = 0; i < numbers.length; ++i) {
    summaryNumbers = summaryNumbers + numbers[i];
  }

  return summaryNumbers;
}

// 17
function getArraySum(numbers) {
  let summaryNumbers = 0;

  for (let i = 0; i < numbers.length; ++i) {
    summaryNumbers = summaryNumbers + numbers[i];
  }

  return summaryNumbers;
}

function arrayPlusArray(firstNumbers, secondNumbers) {
  return getArraySum(firstNumbers) + getArraySum(secondNumbers);
}

console.log(arrayPlusArray([1, 2, 4], [1, 2, 4]));

// 18
function countSheep(num){
  let countedSheep = '';

  for (let i = 1; i < num + 1; ++i) {
    countedSheep += `${i} sheep... `;
  }

  return countedSheep;
}

console.log(countSheep(2));

// 19
function getAverage(marks){
  let averageMarks = 0;

  for (let i = 0; i < marks.length; ++i) {
    averageMarks += marks[i];
  }

  return Math.floor(averageMarks / marks.length);
}

// 20
function monkeyCount(monkeys) {
  let monkeyCounted = [];

  for (let i = 1; i <= monkeys; ++i) {
    monkeyCounted.push(i);
  }

  return monkeyCounted;
}

console.log(monkeyCount(5));