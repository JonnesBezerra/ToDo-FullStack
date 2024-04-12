import { CheckCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

interface Props {
  _id: string;
  description: string;
  completed: boolean;
}

const Task = ({ _id, description, completed }: Props) => {
  return (
    <li
      id={_id}
      className="bg-white bg-opacity-50 rounded-lg px-2 py-3 flex gap-1 text-slate-900"
    >
      <CheckCircleIcon
        className="text-slate-900 h-6"
        data-testid="check-outline"
      />
      {description}
    </li>
  );
};

export default Task;
