"use server";

interface DataProps {
  completed: boolean;
}

export const updateStatusTask = async (taskID: string, data: DataProps) => {
  try {
    const response = await fetch(`${process.env.API}/task/${taskID}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    await response.json();
    console.log("UPDATE Task SUCCESS");
  } catch (error) {
    console.error("PUT Task Error:", error);
  }
};
