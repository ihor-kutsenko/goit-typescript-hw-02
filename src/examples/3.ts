// Створіть загальну функцію reverse, яка приймає масив будь-якого типу і повертає масив у зворотньому порядку.

function reverse<T>(items: T[]): T[] {
  return items.reverse();
}

let numbers = reverse<number>([1, 2, 3, 4, 5]);
console.log(numbers); // [5, 4, 3, 2, 1]

let strings = reverse<string>(["a", "b", "c", "d"]);
console.log(strings); // ["d", "c", "b", "a"]
