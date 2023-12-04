/* Filename: SophisticatedCode.js
   Description: A sophisticated and elaborate example of JavaScript code.
   Content: An Employee Management System with CRUD functionality and various features.
*/

// Importing libraries and dependencies
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Initialize express app
const app = express();

// Configure app to use bodyParser for JSON data
app.use(bodyParser.json());

// Connect to MongoDB database
mongoose
  .connect("mongodb://localhost/employee_management_system", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB"));

// Define Employee model using Mongoose
const employeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  position: String,
});

const Employee = mongoose.model("Employee", employeeSchema);

// Routes

// Create a new employee
app.post("/employees", (req, res) => {
  const newEmployee = new Employee(req.body);
  newEmployee
    .save()
    .then(() => res.status(201).json({ message: "Employee created successfully" }))
    .catch((err) => res.status(500).json({ error: "Failed to create employee" }));
});

// Get all employees
app.get("/employees", (req, res) => {
  Employee.find()
    .then((employees) => res.status(200).json(employees))
    .catch((err) => res.status(500).json({ error: "Failed to get employees" }));
});

// Get employee by ID
app.get("/employees/:id", (req, res) => {
  Employee.findById(req.params.id)
    .then((employee) => {
      if (!employee) {
        return res.status(404).json({ error: "Employee not found" });
      }
      res.status(200).json(employee);
    })
    .catch((err) => res.status(500).json({ error: "Failed to get employee" }));
});

// Update employee by ID
app.put("/employees/:id", (req, res) => {
  Employee.findByIdAndUpdate(req.params.id, req.body)
    .then((employee) => {
      if (!employee) {
        return res.status(404).json({ error: "Employee not found" });
      }
      res.status(200).json({ message: "Employee updated successfully" });
    })
    .catch((err) => res.status(500).json({ error: "Failed to update employee" }));
});

// Delete employee by ID
app.delete("/employees/:id", (req, res) => {
  Employee.findByIdAndDelete(req.params.id)
    .then((employee) => {
      if (!employee) {
        return res.status(404).json({ error: "Employee not found" });
      }
      res.status(200).json({ message: "Employee deleted successfully" });
    })
    .catch((err) => res.status(500).json({ error: "Failed to delete employee" }));
});

// Start server
app.listen(3000, () => console.log("Server started on port 3000"));