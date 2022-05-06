let meyve = document.querySelector(".fruitt");
let meyve1 = document.querySelector(".fruitt1");
let meyve2 = document.querySelector(".fruitt2");
let fruit = document.querySelector(".fruit")
let dragItem;
meyve.ondragstart = function () {
    dragItem = this;
}
meyve1.ondragstart = function () {
    dragItem = this;
}
meyve2.ondragstart = function () {
    dragItem = this;
}
fruit.ondragover = function (e) {
    e.preventDefault();
}

fruit.ondrop = function () {
    fruit.appendChild(dragItem);
}


let terevez1 = document.querySelector(".vegetablee1");
let terevez2 = document.querySelector(".vegetablee2");
let terevez3 = document.querySelector(".vegetablee3");
let vegetable = document.querySelector(".vegetable")
let dragItem1;

terevez1.ondragstart = function () {
    dragItem1 = this;
}
terevez2.ondragstart = function () {
    dragItem1 = this;
}
terevez3.ondragstart = function () {
    dragItem1 = this;
}
vegetable.ondragover = function (e) {
    e.preventDefault();
}

vegetable.ondrop = function () {
    vegetable.appendChild(dragItem1);
}