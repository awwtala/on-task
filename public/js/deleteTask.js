async function deleteTaskHandler(event) {
  //   event.preventDefault();
  console.log(event);
  const id = event.getAttribute("data-id");

  const response = await fetch(`/api/tasks/${id}`, {
    method: "DELETE",
    body: JSON.stringify({
      id: id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

//   if (response.ok) {
//     document.location.replace("/");
//   } else {
//     alert(response.statusText);
//   }
}

document
  .querySelector(".delete-task-btn")
  .addEventListener("click", deleteFormHandler);
