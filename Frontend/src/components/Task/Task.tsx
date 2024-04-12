"use client";
import React, { useState } from "react";
import { getTasks, updateStatusTask } from "@/server";
import { CheckCircleIcon as CheckOutline } from "@heroicons/react/24/outline";
import { CheckCircleIcon as CheckSolid } from "@heroicons/react/24/solid";
import LoadingTask from "../LoadingTask/LoadingTask";

interface TaskProps {
  _id: string;
  description: string;
  completed: boolean;
  setTasks: Function;
}

const Task = ({ _id, description, completed, setTasks }: TaskProps) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    await updateStatusTask(_id, { completed: !completed });
    await getTasks().then((data) => {
      setTasks(data);
      setLoading(false);
    });
  };

  if (loading) {
    return <LoadingTask />;
  }

  return (
    <li id={_id} className="bg-white bg-opacity-50 rounded-lg px-2 py-3 flex">
      <div
        className="flex gap-1 cursor-pointer"
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
            completed ? "line-through" : "no-underline"
          }`}
        >
          {description}
        </p>
      </div>
    </li>
  );
};

export default Task;
