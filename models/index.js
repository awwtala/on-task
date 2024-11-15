// handlebars
const User = require("./User");
const Project = require("./Project");
const Task = require("./Tasks");

User.hasMany(Project, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
Project.belongsTo(User, {
  foreignKey: "user_id",
});
User.hasMany(Task, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
Task.belongsTo(Project, {
  foreignKey: "project_id",
});
Project.hasMany(Task, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
Task.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Project, Task };
