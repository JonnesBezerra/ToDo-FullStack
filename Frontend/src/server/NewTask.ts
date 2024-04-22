"use server";

interface NewTaskProps {
  description: string;
  completed: boolean;
}

export const newTask = async (data: NewTaskProps) => {
  try {
    await fetch(`${process.env.API}/task`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error("POST Task Error: ", error);
  }
};
