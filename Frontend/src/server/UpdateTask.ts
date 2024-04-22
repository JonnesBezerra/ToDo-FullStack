"use server";

interface DataProps {
  completed: boolean;
}

interface EditProps {
  data: {
    description: string;
  };
  taskID: string;
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

export const updateDescriptionTask = async ({ taskID, data }: EditProps) => {
  try {
    const response = await fetch(`${process.env.API}/task/${taskID}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    await response.json();
    console.log("UPDATE Task description SUCCESS");
  } catch (error) {
    console.error("PUT Task description Error: ", error);
  }
};
