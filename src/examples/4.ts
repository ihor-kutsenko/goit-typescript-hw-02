// Задача 1: Уявімо, що у вас є форма редагування профілю користувача.
// Користувач може вибирати, які поля він хоче оновити.Створіть тип для такої форми на основі існуючого типу User.

interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}

type UserUpdateForm = Partial<User>;

const form: UserUpdateForm = {
  name: "Updated Name",
  email: "updated.email@example.com",
};
