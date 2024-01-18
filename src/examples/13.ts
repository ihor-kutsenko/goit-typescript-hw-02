// Задача 2: Ви хочете створити новий тип на основі API-відповіді, але без дати створення.

interface ApiResponse1 {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
}

type Post = Omit<ApiResponse1, "createdAt">;

const displayedPost: Post = {
  id: 1,
  title: "Title",
  content: "Content",
};
