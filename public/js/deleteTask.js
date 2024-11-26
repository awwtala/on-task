async function deleteTaskHandler(event) {
  //   event.preventDefault();
  console.log(event);
  const id = event.("data-id");

  const response = await fetch(`/api/tasks/${id}`, {
    method: "DELETE",
    body: JSON.stringify({
      id: id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

document
  .querySelector(".delete-task-btn")
  .addEventListener("click", deleteTaskHandler);
