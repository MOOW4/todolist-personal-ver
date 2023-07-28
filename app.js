import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";
import { getDate } from "./modules/date.js";

const app = express();
const port = 3000;

//* VARS
let tasks = [];
let workTasks = [];

//*

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    let date = getDate();
    res.render("index.ejs", {tasks: tasks, Title: date});
});

app.post("/", (req, res) => {
    let task = req.body.taskText;
    if(task.length != 0){
        if(req.body.submitButton == "Work List"){
            workTasks.push(task);
            res.redirect("/work");
        }
        else{
            tasks.push(task);
            res.redirect("/");
        }
    }
    else{    
        res.redirect('back');
    }
});

app.get("/work", (req, res) => {
    let date = getDate();
    res.render("index.ejs", {tasks: workTasks, Title: "Work List"});
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});