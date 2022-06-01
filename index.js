const express = require('express')
const axios = require("axios"); // HTTP request library
const path = require("path");
const PORT = process.env.PORT || 8000;

/* Express Setup */
// Use Express to create the application
const app = express();


// Set views
app.set("views", path.join(__dirname, "views"));

// Set the view engine to use Pug
app.set("view engine", "pug");

// Set the stylesheets as static
app.use(express.static(path.join(__dirname, 'public')));

/* Routing */
// Request for root URL
app.get("/", async (_req, res) => {
  res.render("index", {
  title: "Home"});
});

// Request for 'about' URL
app.get("/about", async (_req, res) => {
  res.render("about", {
  title: "About"});
});

// Request for 'experience' URL
app.get("/experience", async (_req, res) => {
  res.render("experience", {
  title: "Experience"});
});

// Request for 'travel' URL
app.get("/travel", async (_req, res) => {
  res.render("travel", {
  title: "Travel"});
});

// Request for faq URL
app.get("/faqs", async (_req, res) => {
  res.render("faqs", {
  title: "FAQs"});
});

// Error Handling
app.use((_req, res) => {
  res.statusCode = 404;
  res.end("404 Error... Page cannot be found! Please contact an administrator.");
});

// Set the application to listen on a port for requests
app.listen(PORT, () => {
  console.log(`Listening to requests on http://localhost:${PORT}...`);
});