// Задача 2: Ви хочете зберегти тільки певні поля з API-відповіді для відображення в UI.

interface ApiResponse {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
}

function displayPost(
  post: ApiResponse
): Pick<ApiResponse, "title" | "content"> {
  return {
    title: post.title,
    content: post.content,
  };
}
