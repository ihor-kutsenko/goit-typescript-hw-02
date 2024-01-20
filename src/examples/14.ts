// Спроєктуйте інтерфейс для ресторанного меню.
// Він повинен містити поля: назва, ціна, категорія(наприклад, закуска, основна страва, десерт).
// Розробіть функцію, яка приймає список страв і фільтрує їх за категорією.

interface MenuItem {
  name: string;
  price: number;
  category: "starter" | "main" | "dessert";
}

const menuItems: MenuItem[] = [
  { name: "Caesar Salad", price: 12.99, category: "starter" },
  { name: "Grilled Chicken", price: 18.99, category: "main" },
  { name: "Chocolate Cake", price: 8.99, category: "dessert" },
];

function filterByCategory(
  menu: MenuItem[],
  category: "starter" | "main" | "dessert"
): MenuItem[] {
  return menu.filter((item) => item.category === category);
}

const starters = filterByCategory(menuItems, "starter");
console.log("Starters:", starters);

const mains = filterByCategory(menuItems, "main");
console.log("Mains:", mains);

const desserts = filterByCategory(menuItems, "dessert");
console.log("Desserts:", desserts);
