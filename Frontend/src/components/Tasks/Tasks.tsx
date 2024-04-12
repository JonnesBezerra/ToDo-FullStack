"use client";
import React, { useEffect, useState } from "react";
import { Task } from "..";
import { getTasks } from "@/server";

interface TaskItem {
  _id: string;
  description: string;
  completed: boolean;
}

const Tasks = () => {
  const [tasks, setTasks] = useState<TaskItem[]>([]);

  useEffect(() => {
    getTasks().then((data) => {
      setTasks(data);
    });
  }, []);

  return (
    <section className="flex flex-1 flex-col w-full my-4">
      <h2 className="font-bold text-slate-900 text-2xl mt-5" role="heading">
        Tasks
      </h2>
      <ul className="flex flex-col gap-2 mt-5">
        {tasks.map((item) => (
          <Task
            _id={item._id}
            description={item.description}
            completed={item.completed}
            setTasks={setTasks}
            key={item._id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Tasks;
