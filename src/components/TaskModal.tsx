import { useState } from "react";

export const TaskModal = ({ task, onClose, onSave }) => {
  const [title, setTitle] = useState(task ? task.title : "");

  const handleSave = () => {
    // Handle save logic (create or update task)
    onSave({ title });
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">
          {task ? "Edit Task" : "New Task"}
        </h2>
        <input
          type="text"
          className="w-full p-2 border mb-4"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="flex justify-end">
          <button
            className="bg-gray-300 text-black p-2 rounded mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
