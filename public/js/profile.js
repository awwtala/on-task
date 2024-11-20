console.log("running?");
const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#project-name").value.trim();
  const description = document.querySelector("#project-desc").value.trim();

  if (name && description) {
    const response = await fetch(`/api/projects`, {
      method: "POST",
      body: JSON.stringify({ name, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to create project");
    }
  }
};

const newTaskHandler = async (event) => {
  event.preventDefault();
  console.log("test");
  const taskName = document.querySelector("#taskTitle").value.trim();
  const taskDescription = document
    .querySelector("#taskDescription")
    .value.trim();

  if (taskName && taskDescription) {
    const response = await fetch(`/api/tasks`, {
      method: "POST",
      body: JSON.stringify({ taskName, taskDescription }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log("ok");
      document.location.replace("/project/id");
    } else {
      alert("Failed to create task");
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/projects/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to delete project");
    }
  }
};
function handleAddTask(event) {
  //what activates the task
  console.log(event); //object that contains info
  event.preventDefault();
  const name = $("#name").val(); //variable
  const description = $("#description").val(); //variables
  const task = {
    name: name,
    description: description,
  };
  //add fetch here
  window.location.reload(); // fixed the add task function.
}
$(document).ready(function () {
  const taskButtonEl = document.getElementById("taskbutton");
  taskButtonEl.addEventListener("click", handleAddTask);
});

document
  .querySelector(".new-project-form")
  .addEventListener("submit", newFormHandler);

document
  .querySelector(".project-list")
  .addEventListener("click", delButtonHandler);

document.querySelector("#addTask").addEventListener("click", newTaskHandler);
