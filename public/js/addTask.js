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
      body: JSON.stringify({ name: taskName, description: taskDescription }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    if (response.ok) {
      document.location.replace(`/project/${id}`);
    } else {
      alert("Failed to create task");
    }
  }
};

document.querySelector("#add-task").addEventListener("click", newTaskHandler);

// js function pull task from db using api route not a handlebar, js function render cards || js function pull task from routes (handlebars render) (requires page to reload)
// make an api endpoint that returns an array of task

// function createTaskCard(task) {
//     const taskCard = $('<div>');
//     taskCard.addClass('card task-card draggable my-3')
//     .attr('data-task-id', task.id);
// const cardBody = $('<div>').addClass('card-body');
// const title = $('<div>').addClass('card-header h4').text(task.title);
// const description = $('<p>').addClass('card-description').text(task.description);
// const taskDue = $('<p>').addClass('card-text').text(task.taskDue);
// const cardDelete = $('<button>');
// cardDelete
//     .addClass('btn btn-danger delete')
//     .text('Delete')
//     .attr('data-task-id', task.id);

// if (task.taskDue && task.taskStatus !== 'done') {
//     const now = dayjs();
//     const taskDueDate = dayjs(task.taskDue, 'YYYY-MM-DD');

//     if (now.isSame(taskDueDate, 'day')) {
//     taskCard.addClass('bg-warning text-white');
//     } else if (now.isAfter(taskDueDate)) {
//       taskCard.addClass('bg-danger text-white');
//       cardDelete.addClass('border-light');
//     }
// }

// cardBody.append(description, taskDue, cardDelete);
// taskCard.append(title, cardBody);

// return taskCard;
// }

// function renderTaskList() {
//     // re-write this
//     const taskList = getTasks();

//     // if (taskName && taskDescription) {
// need new route for this ---- c
//     //     const response = await fetch(`/api/tasks/getall/${id}`, {
//     //       method: 'GET',
//     //       headers: {
//     //         'Content-Type': 'application/json',
//     //       },
//     //     });

//     const todoList = $('#todo-cards');
//     todoList.empty();

//     const inProgressList = $('#in-progress-cards');
//     inProgressList.empty();

//     const doneList = $('#done-cards');
//     doneList.empty();

// ******* make sure match those strings ******* to-do, in-progress, done
//     for (let task of taskList) {
//         if (task.status === 'to-do') {
//           todoList.append(createTaskCard(task));
//         } else if (task.status === 'in-progress') {
//           inProgressList.append(createTaskCard(task));
//         } else if (task.status === 'done') {
//           doneList.append(createTaskCard(task));
//         }
//     };

//     $('.draggable').draggable({
//         opacity: 0.5,
//         zIndex: 100,
//         helper: function (e) {
//             const original = $(e.target).hasClass('ui-draggable')
//                 ? $(e.target)
//                 : $(e.target).closest('.ui-draggable');
//             return original.clone().css({
//                 width: original.outerWidth(),
//             });
//         },
//     });
// }

// function handleDrop(event, ui) {
//     const taskList = getTasks();
//     const taskId = ui.draggable[0].dataset.taskId;
//     const currentStatus = event.target.id;

//     for (let toDo of taskList) {
//         if (toDo.id == taskId) {
//             toDo.status = currentStatus;
//         }
//     }

//     saveTask(taskList);
//     renderTaskList();
// };

// $(document).ready(function () {
//     renderTaskList();

//     $('.lane').droppable({
//         accept: '.draggable',
//         drop: handleDrop,
//     });

//     $('#taskDue').datepicker({
//         changeMonth: true,
//         changeYear: true,
//     });
// });

// taskForm.on('click', '#add-task', function(event){event.preventDefault()
//     taskForm.modal("hide");
// });
