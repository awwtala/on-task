// API routes
const router = require("express").Router();
const userRoutes = require("./userRoutes");
const projectRoutes = require("./projectRoutes");
const tasksRoutes = require("./tasksRoutes");

router.use("/users", userRoutes);
router.use("/projects", projectRoutes);
router.use("/tasks", tasksRoutes);

module.exports = router;
