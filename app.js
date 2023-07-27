import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";
import { getDate } from "./modules/date.js";

const app = express();
const port = 3000;

//* VARS
let tasks = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    let date = getDate();
    res.render("index.ejs", {tasks: tasks, todayDate: date});
});

app.post("/", (req, res) => {
    let task = req.body.taskText;
    if(task.length != 0){
        tasks.push(task);
    }
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});