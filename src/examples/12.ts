// Задача 1: У вас є тип користувача, але ви хочете створити новий тип
//  без поля пароля для відправлення даних на клієнтську сторону.

interface User1 {
  name: string;
  password: string;
  email: string;
}

type SaveUser = Omit<User1, "password">;

const client: SaveUser = {
  name: "Alice",
  email: "alice@example.com",
};
