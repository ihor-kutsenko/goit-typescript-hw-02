// Визначте інтерфейс для об'єкта, де ключем є рядок, а значенням може бути або рядок, або число.
// Створіть декілька об'єктів цього типу.

interface MixedType {
  [key: string]: string | number;
}

const userInfo: MixedType = {
  name: "Bob",
  age: 23,
  country: "Ukraine",
};

const bookDetails: MixedType = {
  title: "Bible",
  pageCount: 350,
};
