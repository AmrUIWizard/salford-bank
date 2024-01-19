const todos = [
  {
    id: 1,
    title: "Learn HTML",
    completed: false,
  },
  {
    id: 2,
    title: "Learn CSS",
    completed: false,
  },
  {
    id: 3,
    title: "Learn Javascript",
    completed: false,
  },
  {
    id: 4,
    title: "Learn React",
    completed: false,
  },
  {
    id: 5,
    title: "Learn Next.js",
    completed: false,
  },
];

/**
 * Mock function that mimics fetching todos from a database.
 */
export const fetchTodos = async (query = "") => {
  await new Promise((resolve) => resolve);

  console.log("fetched todos");

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(query.toLowerCase())
  );

  // Uncomment the line below to trigger an error
  // throw new Error();

  return [...filteredTodos];
};