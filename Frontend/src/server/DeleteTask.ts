"use server";

interface DeleteProps {
  id: string;
}

export const deleteTask = async ({ id }: DeleteProps) => {
  try {
    await fetch(`${process.env.API}/task/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    console.log("DELETE Task SUCCESS");
  } catch (error) {
    console.error("DELETE Task Error: ", error);
  }
};
