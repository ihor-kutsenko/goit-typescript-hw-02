// Задача 1: У вас є об'єкт користувача і вам потрібно створити функцію,
//  яка повертає лише ім'я та електронну пошту користувача.

interface User {
  name: string;
  age: number;
  email: string;
}

function getUserContact(user: User): Pick<User, "name" | "email"> {
  return {
    name: user.name,
    email: user.email,
  };
}
