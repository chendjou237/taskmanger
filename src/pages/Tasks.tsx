import { useState } from "react";
import { TaskInterface } from "../types/taskType";

const Tasks = () => {
  const [tasks, setTasks] = useState<TaskInterface[]>([]);

  const fetchTask
    // Simulate API call with Axios
    // setTasks(response.data);
    setTasks([
      {
        id: 1,
        title: "Task 1",
        description: "Description 1",
        completed: false,
        category: "Work",
      },
      {
        id: 2,
        title: "Task 2",
        description: "Description 2",
        completed: true,
        category: "Personal",
      },
      {
        id: 3,
        title: "Task 3",
        description: "Description 3",
        completed: false,
        category: "Work",
      },
    ]);
  };

  useState(() => {
    fetchTasks();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl mb-6">Tasks</h1>
      <div className="mb-4">
        <button
          className="bg-green-500 text-white p-2 rounded"
          onClick={/* handleAddTask */}
        >
          Add Task
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="p-4 border-b">
            {/* Task details here */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
