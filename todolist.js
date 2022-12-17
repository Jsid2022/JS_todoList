// get Task name from input div
let taskName = document.getElementById("taskName");
// get selected hours from select elemenet
let hours = document.getElementById("hrs");
// get selected minutes from select elemenet
let mins = document.getElementById("mins");
// get selected AM/PM from select elemenet
let ap = document.getElementById("ap");
// get selected Task Status(Pending/Completed) from select elemenet
let taskstatus = document.getElementById("status");
// get selected Task Date from select elemenet
let taskDate = document.getElementById("taskDate");
// Get Task ul from html
let taskListUl = document.getElementById("taskList");
// Get Empty Tasks Div from HTML
let empTask = document.getElementById("emptyTask");
// get Tabs Div from HTML
let tabsUl = document.querySelector("#tabsUl");

// To count number of Pending Tasks
let pTask = 0;
// To count number of Completed Tasks
let cTask = 0;
// Set Default Task status to Pending
taskstatus = "Pending";
// Set Default hours to 12
hours = 12;
// Set Default mins to 00
mins = '00';
// Set Default AM/PM to AM
ap = "AM";

// Hide TaskList to none on website Reload
taskListUl.style.display = "none";

// This Function will filter Tasks according to tabs
const changeTab = (tabNo, type) => {
    // On tab change Change border bottom for active tab
    for (let i = 0; i < 3; i++) {
        if (i != tabNo) {
            tabsUl.children[i].classList.remove("border-b-2");
            tabsUl.children[i].classList.remove("border-b-[black]");
        } else {
            tabsUl.children[i].classList.add("border-b-2");
            tabsUl.children[i].classList.add("border-b-[black]");
        }
    }

    // Hide/show Task according to tabs
    for (let i = 0; i < taskListUl.children.length; i++) {

        // If All tab is active Show all Tasks
        if (type == "All") {
            taskListUl.children[i].style.display = "block";
        }
        // hide Tasks if Completed/Pending Tasks is active
        // ex: Hide Pending Task if Completed tab is active
        else if (taskListUl.children[i].children[0].children[3].textContent !== type) {
            taskListUl.children[i].style.display = "none";
        }
        // Show Tasks if Completed/Pending Tasks is active
        // ex: Show Pending Task if Pending tab is active
        else {
            taskListUl.children[i].style.display = "block";
        }
    }


    // Show empty Task Div
    // if Completed Task is 0
    if (type === "Completed") {
        if (cTask === 0) {
            empTask.style.display = "block"
        }
        else {
            empTask.style.display = "none"
        }
    }
    // else if Pending Task is 0
    else if (type === "Pending") {
        if (pTask === 0) {
            empTask.style.display = "block"
        }
        else {
            empTask.style.display = "none"
        }
    }
    // else if both Task are 0 only show Empty Task Div
    else {
        if (pTask === 0 && cTask === 0) {
            empTask.style.display = "block";
        }
        else {
            empTask.style.display = "none";
        }
    }
}

// This Function will set the task name onChange
const setTaskName = (value) => {
    taskName = value;
}

// This function will set the hours on select Change
const changeHours = (value) => {
    hours = value;
}

// This function will set the minutes on select Change
const changeMins = (value) => {
    mins = value
}

// This function will set the AM/PM on select Change
const changeap = (value) => {
    ap = value;
}

// This function will set the Tas Status on select Change
const changeStatus = (value) => {
    taskstatus = value;
}

// This function will set the Task Date on input Change
const changeTaskDate = (value) => {
    taskDate = value;
}

// This function will handle add task changes (DOM CHANGES)
const addTask = () => {

    // Hide Empty Task Div
    empTask.style.display = "none";

    // Whenever a Task is Added Change Tab to All
    for (let i = 0; i < 3; i++) {
        if (i != 0) {
            tabsUl.children[i].classList.remove("border-b-2");
            tabsUl.children[i].classList.remove("border-b-[black]");
        }
        else {
            tabsUl.children[i].classList.add("border-b-2");
            tabsUl.children[i].classList.add("border-b-[black]");
        }
    }

    // According to Task Status Increment Task Number
    if (taskstatus === "Pending") {
        pTask++;
    }
    else {
        cTask++;
    }

    // Format time ex: 12:00 AM
    const time = hours + ":" + mins + " " + ap;
    // create a for Task Data
    let taskData = [taskName, time, taskDate, taskstatus];

    // Every Time a task is Added Display Task List UL
    if (pTask > 0 || cTask > 0) {
        taskListUl.style.display = "flex";
    }

    // Create HTML element List Item for task Data
    const listItem = document.createElement("li");
    
    // Create HTML element UL for list item
    // So we can add - task name, time , date, status
    const listItemUl = document.createElement("ul");
    let listItemUlLi;

    // Add some CSS
    listItem.classList.add("py-1");
    listItem.classList.add("cursor-pointer");
    listItem.classList.add("hover:bg-[black]");
    listItem.classList.add("hover:text-white");
    listItemUl.classList.add("flex");
    listItemUl.classList.add("justify-evenly");

    // for every item in task data array
    // create List item and
    // append List item to UL
    taskData.forEach((data) => {
        listItemUlLi = document.createElement("li");
        listItemUlLi.classList.add("w-full");
        listItemUlLi.classList.add("text-center");
        listItemUlLi.textContent = data;
        listItemUl.append(listItemUlLi);
    });

    // append UL to List item (task)
    listItem.append(listItemUl);

    // append that listItem to Task UL
    taskListUl.append(listItem);
}