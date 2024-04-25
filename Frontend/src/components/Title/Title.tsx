import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

const Title = () => {
  return (
    <div className="flex items-center">
      <CheckCircleIcon className="text-slate-900 h-12 mr-1 hover:transform hover:scale-150 hover:duration-1000 duration-500 animate-spin-once" />
      <h1 role="title" className="text-slate-900 text-4xl font-bold">
        ToDoApp
      </h1>
    </div>
  );
};

export default Title;
