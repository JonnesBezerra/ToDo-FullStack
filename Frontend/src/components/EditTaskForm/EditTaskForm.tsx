"use client";
import React, { FormEvent, useState } from "react";
import { updateDescriptionTask } from "@/server";
import { CheckIcon } from "@heroicons/react/24/solid";

interface EditTaskProps {
  _id: string;
  description: string;
  handleEdit: Function;
}

const EditTaskForm = ({ _id, description, handleEdit }: EditTaskProps) => {
  const [taskText, setTaskText] = useState(description);

  const handleChange = ({ target }: any) => {
    setTaskText(target.value);
  };

  const handleSubmitEdit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (taskText && taskText.trim()) {
      await updateDescriptionTask({
        taskID: _id,
        data: { description: taskText },
      });
      handleEdit(taskText);
    }
  };

  return (
    <form
      onSubmit={handleSubmitEdit}
      className="w-full flex justify-between mx-2"
    >
      <input
        type="text"
        name="EditTask"
        id="EditTask"
        value={taskText}
        onChange={handleChange}
        autoComplete="off"
        className="bg-transparent w-full text-slate-900 focus-visible:outline-none"
      />
      <button
        type="submit"
        className="w-8 flex justify-center rounded-lg hover:bg-gray-500 hover:bg-opacity-[0.125]"
      >
        <CheckIcon className="text-slate-900 h-6" />
      </button>
    </form>
  );
};

export default EditTaskForm;
