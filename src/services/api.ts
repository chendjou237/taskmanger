import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const api = axios.create({
  baseURL: "https://example.com/api",
});

const mock = new MockAdapter(api);

mock.onGet("/tasks").reply(200, [
  { id: 1, title: "Task 1", status: "pending" },
  { id: 2, title: "Task 2", status: "in-progress" },
]);

mock
  .onPost("/tasks")
  .reply(201, { id: 3, title: "New Task", status: "pending" });

mock
  .onPut(/\/tasks\/\d+/)
  .reply(200, { id: 1, title: "Updated Task", status: "completed" });

mock.onDelete(/\/tasks\/\d+/).reply(204);

export default api;
