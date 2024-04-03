import React from "react";
import { Task } from "..";

const todo = [
  {
    _id: "65ea7111922a2b5ccd89c7ac",
    description: "Write MongoDB code",
    completed: false,
    __v: 0,
  },
  {
    _id: "65ea7121922a2b5ccd89c7af",
    description: "Write JavaScript code",
    completed: false,
    __v: 0,
  },
  {
    _id: "65ea712d922a2b5ccd89c7b1",
    description: "Write Python code",
    completed: false,
    __v: 0,
  },
];

const Tasks = () => {
  return (
    <section className="flex flex-1 flex-col w-full my-4">
      <h2 className="font-bold text-slate-900 text-2xl mt-5">Tasks</h2>
      <ul className="flex flex-col gap-2 mt-5">
        {todo.map((item) => (
          <Task
            _id={item._id}
            description={item.description}
            completed={item.completed}
            key={item._id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Tasks;
