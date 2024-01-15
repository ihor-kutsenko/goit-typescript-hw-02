// Задача 2: Створіть об'єкт конфігурації, який не можна змінювати після його створення.

interface Config1 {
  apiUrl: string;
  timeout: number;
}

const config: Readonly<Config1> = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
};
