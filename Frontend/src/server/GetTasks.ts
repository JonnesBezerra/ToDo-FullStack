"use server";

export const getTasks = async () => {
  console.log(process.env.API);
  try {
    const response = await fetch(`${process.env.API}/tasks`, {
      method: "GET",
    });

    if (response) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log("GET Tasks ERROR:", error);
  }
};
