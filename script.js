//To-do list
"use strict";
let list = document.querySelector("#toDoList");
let array = ["Exempel"];

toDoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    array.push(inputItem.value.trim());
    inputItem.value = "";
    update();
});

toDoForm.addEventListener("click", event => {removeItem(event, list);})

function removeItem(event) {
    for (var i = 0; i < array.length; i++) {
        if (event.target.innerHTML == array[i]) {
            array.splice(i, 1);
        }
    }
    update();
}

function update() {
    list.innerHTML = "";
    for (var i = 0; i < array.length; i++) {
        let listItem = document.createElement("li");
        let content = document.createTextNode(array[i]);
        listItem.append(content);
        list.append(listItem);
    }
}

update();