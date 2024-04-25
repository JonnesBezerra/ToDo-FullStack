"use server";

export const getTasks = async () => {
  try {
    const response = await fetch(`${process.env.API}/tasks`, {
      method: "GET",
    });
    const data = await response.json();
    console.log("GET Tasks SUCCESS");
    return data;
  } catch (error) {
    console.log("GET Tasks ERROR:", error);
  }
};
