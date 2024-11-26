const id = window.location.toString().split("/")[
  window.location.toString().split("/").length - 1
];

const newTaskHandler = async (event) => {
  event.preventDefault();

  const taskName = document.querySelector("#task-title").value.trim();
  const taskDescription = document
    .querySelector("#task-description")
    .value.trim();
  console.log(taskName);
  console.log(taskDescription);
  if (taskName && taskDescription) {
    const response = await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify({
        name: taskName,
        description: taskDescription,
        status: "to-do",
        project_id: id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      window.location.replace(`/project/${id}`);
    } else {
      alert("Failed to create task");
    }
  }
};

document.querySelector("#add-task").addEventListener("click", newTaskHandler);

async function getTasks(id) {
  const response = await fetch(`/api/tasks/getall/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(response);
  if (response.ok) {
    console.log("retrieving tasks...");
    return await response.json();
  } else {
    alert("Failed to retreive tasks");
  }
}
async function deleteTaskHandler(event) {
  //   event.preventDefault();
  console.log(event);
  const id = $(this).attr("data-task-id");

  const response = await fetch(`/api/tasks/${id}`, {
    method: "DELETE",
    body: JSON.stringify({
      id: id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response) {
    renderTaskList();
  }
}
function createTaskCard(task) {
  const taskCard = $("<div>");
  taskCard
    .addClass("card task-card draggable my-3")
    .attr("data-task-id", task.id);
  const cardBody = $("<div>").addClass("card-body");
  const title = $("<div>").addClass("card-header h4").text(task.name);
  const description = $("<p>")
    .addClass("card-description")
    .text(task.description);
  //const taskDue = $('<p>').addClass('card-text').text(task.taskDue);
  const cardDelete = $("<button>");
  cardDelete
    .addClass("delete-task-btn btn btn-danger delete")
    .text("Delete")
    .attr("data-task-id", task.id);
  cardDelete.on("click", deleteTaskHandler);
  // if (task.taskDue && task.taskStatus !== 'done') {
  //     const now = dayjs();
  //     const taskDueDate = dayjs(task.taskDue, 'YYYY-MM-DD');

  // if (now.isSame(taskDueDate, 'day')) {
  // taskCard.addClass('bg-warning text-white');
  // } else if (now.isAfter(taskDueDate)) {
  //   taskCard.addClass('bg-danger text-white');
  //   cardDelete.addClass('border-light');
  // }
  //}

  cardBody.append(description, cardDelete);
  taskCard.append(title, cardBody);

  return taskCard;
}

async function renderTaskList() {
  const taskList = await getTasks(id);
  console.log(taskList);

  const todoList = $("#todo-cards");
  todoList.empty();

  const inProgressList = $("#in-progress-cards");
  inProgressList.empty();

  const doneList = $("#done-cards");
  doneList.empty();

  for (let task of taskList) {
    if (task.status === "to-do") {
      todoList.append(createTaskCard(task));
    } else if (task.status === "in-progress") {
      inProgressList.append(createTaskCard(task));
    } else if (task.status === "done") {
      doneList.append(createTaskCard(task));
    }
  }

  $(".draggable").draggable({
    opacity: 0.5,
    zIndex: 100,
    helper: function (e) {
      const original = $(e.target).hasClass("ui-draggable")
        ? $(e.target)
        : $(e.target).closest(".ui-draggable");
      return original.clone().css({
        width: original.outerWidth(),
      });
    },
  });
}

// Update status
async function saveTask(id, status) {
  const response = await fetch(`/api/tasks/${id}`, {
    method: "PUT",
    body: JSON.stringify({ status }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  //   if (response.ok) {
  //     window.location.reload();
  //   } else {
  //     alert("Failed to save task");
  //   }
}

async function handleDrop(event, ui) {
  const taskList = await getTasks(id);
  const taskId = ui.draggable[0].dataset.taskId;
  const currentStatus = event.target.id;

  for (let toDo of taskList) {
    if (toDo.id == taskId) {
      toDo.status = currentStatus;
    }
  }

  saveTask(taskId, currentStatus);
  renderTaskList();
}

$(document).ready(function () {
  renderTaskList();

  $(".lane").droppable({
    accept: ".draggable",
    drop: handleDrop,
  });

  // $('#taskDue').datepicker({
  //     changeMonth: true,
  //     changeYear: true,
  // });
});
