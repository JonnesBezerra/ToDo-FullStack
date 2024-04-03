import { CheckCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

const Task = () => {
  return (
    <li className="bg-white bg-opacity-50 rounded-lg px-2 py-3 flex gap-1 text-slate-900">
      <CheckCircleIcon className="text-slate-900 h-6" />
      task 1
    </li>
  );
};

export default Task;
