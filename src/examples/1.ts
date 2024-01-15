// Створіть інтерфейс для словника, де ключем є рядок, а значенням — число.
// Створіть кілька об'єктів цього типу, наприклад, для зберігання кількості товарів різних категорій.

interface Dictionary {
  [key: string]: number;
}

const categoryCounts: Dictionary = {
  Electronics: 10,
  Clothing: 20,
  Books: 15,
};

const productCounts: Dictionary = {
  Laptop: 5,
  "T-Shirt": 30,
  Novel: 25,
};
