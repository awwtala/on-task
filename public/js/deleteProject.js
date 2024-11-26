async function deleteFormHandler(event) {
  //   event.preventDefault();
  console.log(event);
  const id = event.getAttribute("data-id");

  const response = await fetch(`/api/projects/${id}`, {
    method: "DELETE",
    body: JSON.stringify({
      project_id: id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/profile");
  } else {
    alert(response.statusText);
  }
}

// document
//   .querySelector(".delete-post-btn")
//   .addEventListener("click", deleteFormHandler);
