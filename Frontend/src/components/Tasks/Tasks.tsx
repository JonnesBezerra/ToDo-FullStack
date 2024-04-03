import React from "react";
import { Task } from "..";

const Tasks = () => {
  return (
    <section className="flex flex-1 flex-col w-full my-4">
      <h2 className="font-bold text-slate-900 text-2xl mt-5">Tasks</h2>
      <ul className="flex flex-col gap-2 mt-5">
        <Task />
        <Task />
        <Task />
      </ul>
    </section>
  );
};

export default Tasks;
