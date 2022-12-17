let taskName = document.getElementById("taskName");
let hours = document.getElementById("hrs");
let mins = document.getElementById("mins");
let ap = document.getElementById("ap");
let taskstatus = document.getElementById("status");
let taskDate = document.getElementById("taskDate");
let taskListUl = document.getElementById("taskList");
let empTask = document.getElementById("emptyTask");
let tabsUl = document.querySelector("#tabsUl");
let taskCount = 0;
let pTask = 0;
let cTask = 0;
let taskList = [];
taskstatus = "Pending";
hours = 12;
mins = '00';
ap = "AM";

taskListUl.style.display = "none";

const changeTab = (tabNo, type) => {
    console.log(type)
    for (let i = 0; i < 3; i++) {
        if (i != tabNo) {
            tabsUl.children[i].classList.remove("border-b-2");
            tabsUl.children[i].classList.remove("border-b-[black]");
        } else {
            tabsUl.children[i].classList.add("border-b-2");
            tabsUl.children[i].classList.add("border-b-[black]");
        }
    }
    for (let i = 0; i < taskListUl.children.length; i++) {

        if (type == "All") {
            taskListUl.children[i].style.display = "block";
        }
        else if (taskListUl.children[i].children[0].children[3].textContent !== type) {
            taskListUl.children[i].style.display = "none";
        } else {
            taskListUl.children[i].style.display = "block";
        }
    }
    if (type === "Completed") {
        if (cTask === 0) {
            empTask.style.display = "block"
        } else {
            empTask.style.display = "none"
        }
    } else if (type === "Pending") {
        if (pTask === 0) {
            empTask.style.display = "block"
        } else {
            empTask.style.display = "none"
        }
    } else {
        console.log("222")
        if (pTask === 0 && cTask === 0) {
            empTask.style.display = "block";
        } else {
            empTask.style.display = "none";
        }
    }
}

const getTaskName = (value) => {
    taskName = value;
}

const changeHours = (value) => {
    hours = value;
}

const changeMins = (value) => {
    mins = value
}

const changeap = (value) => {
    ap = value;
}

const changeStatus = (value) => {
    taskstatus = value;
}

const changeTaskDate = (value) => {
    taskDate = value;
}

const addTask = () => {

    for (let i = 0; i < 3; i++) {
        if (i != 0) {
            tabsUl.children[i].classList.remove("border-b-2");
            tabsUl.children[i].classList.remove("border-b-[black]");
        } else {
            tabsUl.children[i].classList.add("border-b-2");
            tabsUl.children[i].classList.add("border-b-[black]");
        }
    }

    empTask.style.display = "none";
    taskCount++;
    if (taskstatus === "Pending") {
        pTask++;
    } else {
        cTask++;
    }
    const time = hours + ":" + mins + " " + ap;
    let taskData = [taskCount, taskName, time, taskDate, taskstatus];
    taskList.push(taskData);

    if (taskList.length > 0) {
        taskListUl.style.display = "flex";
    }

    const listItem = document.createElement("li");
    const listItemUl = document.createElement("ul");
    let listItemUlLi;
    listItem.classList.add("py-1");
    listItem.classList.add("cursor-pointer");
    listItem.classList.add("hover:bg-[black]");
    listItem.classList.add("hover:text-white");
    listItem.attr
    listItemUl.classList.add("flex");
    listItemUl.classList.add("justify-evenly");


    let count = 0;
    taskData.forEach((data) => {
        if (count == 0) {
            count++;
        } else {
            listItemUlLi = document.createElement("li");
            listItemUlLi.classList.add("w-full");
            listItemUlLi.classList.add("text-center");
            listItemUlLi.textContent = data;
            listItemUl.append(listItemUlLi);
        }
    });

    listItem.append(listItemUl);
    taskListUl.append(listItem);
}