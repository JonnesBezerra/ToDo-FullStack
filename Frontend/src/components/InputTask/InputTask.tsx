"use client";
import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/16/solid";
import { newTask } from "@/server";

const InputTask = () => {
  const [task, setTask] = useState("");

  const handleChange = ({ target }: any) => {
    setTask(target.value);
  };

  const handleSubmit = async () => {
    if (task && task.trim()) {
      const data = {
        description: task,
        completed: false,
      };
      await newTask(data);
      setTask("");
    }
  };

  return (
    <form
      method="POST"
      role="form"
      onSubmit={handleSubmit}
      className="flex w-full"
    >
      <input
        type="text"
        name="InputTask"
        id="InputTask"
        data-testid="InputTask"
        value={task}
        onChange={handleChange}
        autoComplete="off"
        placeholder="What do you need to do?"
        className="grow p-3 px-5 rounded-s-lg bg-white bg-opacity-40 border-2 border-transparent text-gray-800 text-base font-medium placeholder-gray-600 focus-visible:outline-none focus:border-2 focus:border-slate-800 focus:rounded-s-lg"
      />
      <button
        type="submit"
        className="bg-gray-800 flex items-center justify-evenly w-28 px-4 py-2 rounded-e-lg"
      >
        <PlusIcon className="h-6 w-6 text-white" /> Add
      </button>
    </form>
  );
};

export default InputTask;
