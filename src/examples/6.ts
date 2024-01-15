// Задача : Ви розробляєте функцію, яка приймає масив чисел і повертає його ж,
//   але ви хочете гарантувати, що функція не змінює вхідний масив.

function doSomethingWithArray(input: ReadonlyArray<number>): number[] {
  // Деякі операції над масивом, але без його зміни
  return Array.from(input);
}

const number = [1, 2, 3];
doSomethingWithArray(number);
