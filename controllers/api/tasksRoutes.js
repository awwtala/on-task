// CRUD TASK PAGE

// need put route to update task status and ?post route to done status ?
const router = require("express").Router();
const { Task } = require("../../models/index");
const withAuth = require("../../utils/auth");

// Get All Task
router.get("/", async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const taskData = await Task.findAll();

    // Serialize data so the template can read it
    const tasks = taskData.map((task) => task.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render("homepage", {
      tasks,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get Task by ID
router.get("/:id", async (req, res) => {
  try {
    const task = await Task.findOne({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!task) {
      res.status(404).json({ message: "No task found with this id!" });
      return;
    }
    res.render("project", {
      ...task,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/getall/:id", withAuth, async (req, res) => {
  const data = await Task.findAll({
    where: { project_id: req.params.id },
  });
  res.status(200).json(data);
});

//Create new task
router.post("/", withAuth, async (req, res) => {
  console.log("test");
  try {
    const newTask = await Task.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newTask);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  console.log(req.params);
  Task.update(
    { status: req.body.status },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((taskData) => {
      console.log(taskData);
      if (!taskData) {
        res.status(404).json({ message: "No task found with this id!" });
        return;
      }
      res.json(taskData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Delete Task
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const task = await Task.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!taskData) {
      res.status(404).json({ message: "No tasks found with this id!" });
      return;
    }

    res.status(200).json(taskData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
