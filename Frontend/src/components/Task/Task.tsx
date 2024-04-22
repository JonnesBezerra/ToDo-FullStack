"use client";
import React, { useState } from "react";
import { getTasks, updateStatusTask } from "@/server";
import { EditTaskForm, LoadingTask } from "../";
import {
  CheckCircleIcon as CheckOutline,
  TrashIcon,
} from "@heroicons/react/24/outline";
import {
  CheckCircleIcon as CheckSolid,
  PencilIcon,
} from "@heroicons/react/24/solid";

interface TaskProps {
  _id: string;
  description: string;
  completed: boolean;
  setTasks: Function;
}

const Task = ({ _id, description, completed, setTasks }: TaskProps) => {
  const [loading, setLoading] = useState(false);
  const [taskDescription, setTaskDescription] = useState(description);
  const [editTask, setEditTask] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    await updateStatusTask(_id, { completed: !completed });
    await getTasks().then((data) => {
      setTasks(data);
      setLoading(false);
    });
  };

  const handleEdit = (taskText: string) => {
    setTaskDescription(taskText);
    setEditTask((prev) => !prev);
  };

  if (loading) {
    return <LoadingTask />;
  }

  return (
    <li id={_id}>
      {editTask ? (
        <div
          className={`bg-white rounded-lg px-2 py-3 flex items-center justify-between ${
            completed ? "bg-opacity-30" : "bg-opacity-50"
          }`}
        >
          <EditTaskForm
            _id={_id}
            description={description}
            handleEdit={handleEdit}
          />
        </div>
      ) : (
        <div
          className={`bg-white rounded-lg px-2 py-3 flex items-center justify-between ${
            completed ? "bg-opacity-30" : "bg-opacity-50"
          }`}
        >
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={async () => handleClick()}
          >
            {completed ? (
              <CheckSolid
                className="text-slate-900 h-6"
                data-testid="check-solid"
              />
            ) : (
              <CheckOutline
                className="text-slate-900 h-6"
                data-testid="check-outline"
              />
            )}
            <p
              className={`text-slate-900 ${
                completed ? "line-through text-gray-500" : "no-underline"
              }`}
            >
              {taskDescription}
            </p>
          </div>
          <div>
            <button
              type="button"
              className="w-8 h-6 rounded-lg hover:bg-gray-500 hover:bg-opacity-[0.125]"
              onClick={() => setEditTask((prev) => !prev)}
            >
              <PencilIcon className="text-slate-900 h-4 m-auto" />
            </button>
            <button
              type="button"
              className="w-9 h-6 rounded-lg hover:bg-gray-500 hover:bg-opacity-[0.125]"
            >
              <TrashIcon className="text-red-800 h-5 m-auto" />
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default Task;
