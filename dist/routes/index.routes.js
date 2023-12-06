"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _taskController = require("../controllers/task.controller.js");
var router = (0, _express.Router)();
router.get('/', _taskController.renderTasks);
router.post('/task/add', _taskController.createTask);
router.get('/about', _taskController.about);
//
router.get('/edit/:id', _taskController.renderTaskEdit);
router.post('/edit/:id', _taskController.editTask);
router.get('/del/:id', _taskController.deleteTask);
router.get('/toggleDone/:id', _taskController.taskToggleDone);
var _default = exports["default"] = router;