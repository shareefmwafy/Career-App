const express = require("express");
const Auth = require("../middleware/auth");
const router = new express.Router();
const {
  createProject,
  getMyProjects,
  deleteProject,
  updateProject,
} = require("../controllers/projectController");

router.post("/create-project", Auth, createProject);

router.get("/get-my-projects/:id", Auth, getMyProjects);

router.delete("/delete-project/:id", Auth, deleteProject);

router.put("/update-project/:id", Auth, updateProject);

module.exports = router;
