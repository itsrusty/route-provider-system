"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const employees_controller_1 = require("../controllers/employees.controller");
const cache_config_1 = __importDefault(require("../middlewares/cache.config"));
const employeesController = new employees_controller_1.employees();
const subRoutesEmployees = new employees_controller_1.routesEmployees();
const routerEmployees = (0, express_1.Router)();
const path = "/api/v1";
// todo: render all employees
routerEmployees.get(`${path}/employees`, cache_config_1.default, (req, res) => {
    employeesController.getEmployees(req, res);
});
// todo: render employee by id
routerEmployees.get(`${path}/employee/:employeeId`, (req, res) => {
    employeesController.getEmployeeById(req, res);
});
// todo: create a new employee
routerEmployees.post(`${path}/employee/new`, (req, res) => {
    employeesController.createEmployee(req, res);
});
// todo: edit a employee PENDIENTE POR HACER
routerEmployees.patch(`${path}/employee/edit/:id`, (req, res) => {
    employeesController.editEmployee(req, res);
});
// todo: delete a employee
routerEmployees.delete(`${path}/employee/delete/:id`, (req, res) => {
    employeesController.deleteEmployee(req, res);
});
exports.default = routerEmployees;
