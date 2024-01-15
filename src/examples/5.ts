//   Задача : У вас є конфігураційний об'єкт з декількома полями.
// Створіть функцію, яка приймає часткові налаштування та повертає повний конфігураційний об'єкт.

interface Config {
  host: string;
  port: number;
  protocol: string;
}

function setupConfig(partial: Partial<Config>): Config {
  return {
    host: partial.host || "localhost",
    port: partial.port || 80,
    protocol: partial.protocol || "http",
  };
}
