async function deleteTaskHandler(event) {
    event.preventDefault();

    const id = data.task.id;

    const response = await fetch(`/api/tasks/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
            id: id,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/project');
    }   else {
        alert(response.statusText);
    }
}

document.querySelector('.delete-task-btn').addEventListener('click', deleteTaskHandler);