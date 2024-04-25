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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getTasks().then((data) => {
      setTasks(data);
      setLoading(false);
    });
  }, []);

  return (
    <section className="flex flex-1 flex-col w-full my-4">
      <h2 className="font-bold text-slate-900 text-2xl mt-5" role="heading">
        Tasks
      </h2>
      {loading ? (
        <p className="mt-5 text-gray-700">Loading tasks...</p>
      ) : (
        <ul className="flex flex-col gap-2 mt-5">
          {tasks.length ? (
            tasks.map((item) => (
              <Task
                _id={item._id}
                description={item.description}
                completed={item.completed}
                setTasks={setTasks}
                key={item._id}
              />
            ))
          ) : (
            <p className="mx-auto text-gray-700">No tasks yet.</p>
          )}
        </ul>
      )}
    </section>
  );
};

export default Tasks;
