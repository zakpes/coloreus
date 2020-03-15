// (function ($) {

//     // navbar toggle hamburger menu btn X
//     $(".navbar-toggle").mouseenter(function() {
//         $(".icon-bar").css("background-color", "#ccc");
//     }).mouseleave(function () {
//         $(".icon-bar").css("background-color", "#fff");
//     });

//     // navbar toggle hamburger menu btn X
//     $(".navbar-toggle").click(function() {
//         $(".bar-top").toggleClass("bar-top-x");
//         $(".bar-mid").toggleClass("bar-mid-x");
//         $(".bar-bot").toggleClass("bar-bot-x");
//     });

// })(jQuery);


// add numbers to colors
const containerArr = document.querySelectorAll(".col-3");
const colorsArr = document.querySelectorAll(".color");
// console.log(colorsArr.classList[2].substr(-2, 2));

function addNumberToColor(array) {

    for (let i = 0; i < array.length; i++) {
        
        const colorClass = array[i].classList[2];
        // console.log(element);
        const colorClassNum = colorClass.substr(-2, 2);
        // console.log(colorClassNum);
        array[i].innerText = colorClassNum;

        // add inverted text color
        const bgColor = window.getComputedStyle(array[i]).backgroundColor;
         
        // console.log(colorNew);

        for (let j = 0; j < array[i].length; j++) {
            
            array[i][j].style.color = window.getComputedStyle(array[i][j]).backgroundColor;
            console.log(window.getComputedStyle(array[i][j]).backgroundColor);
            
        }

    }
}

function changeTextColor(array) {

    for (let i = 0; i < array.length; i++) {

        console.log("array" + i);
        el1 = array[0];

    }

    for (let j = 0; j < array.length; j++) {


            
            console.log("Array J: " + j);
            
            

    }
}

const singleColorArr1 = document.querySelectorAll(".color-grey");
const singleColorArr2 = document.querySelectorAll(".color-blue-grey");
const singleColorArr3 = document.querySelectorAll(".color-cool-grey");
const singleColorArr4 = document.querySelectorAll(".color-warm-grey");
const singleColorArr5 = document.querySelectorAll(".color-red");
const singleColorArr6 = document.querySelectorAll(".color-red-br");
const singleColorArr7 = document.querySelectorAll(".color-orange");
const singleColorArr8 = document.querySelectorAll(".color-orange-br");
const singleColorArr9 = document.querySelectorAll(".color-yellow");
const singleColorArr10 = document.querySelectorAll(".color-yellow-br");
const singleColorArr11 = document.querySelectorAll(".color-lime-green");
const singleColorArr12 = document.querySelectorAll(".color-lime-green-br");
const singleColorArr13 = document.querySelectorAll(".color-green");
const singleColorArr14 = document.querySelectorAll(".color-green-br");
const singleColorArr15 = document.querySelectorAll(".color-cyan");
const singleColorArr16 = document.querySelectorAll(".color-cyan-br");
const singleColorArr17 = document.querySelectorAll(".color-light-blue");
const singleColorArr18 = document.querySelectorAll(".color-light-blue-br");
const singleColorArr19 = document.querySelectorAll(".color-blue");
const singleColorArr20 = document.querySelectorAll(".color-blue-br");
const singleColorArr21 = document.querySelectorAll(".color-indigo");
const singleColorArr22 = document.querySelectorAll(".color-indigo-br");
const singleColorArr23 = document.querySelectorAll(".color-purple");
const singleColorArr24 = document.querySelectorAll(".color-purple-br");
const singleColorArr25 = document.querySelectorAll(".color-pink");
const singleColorArr26 = document.querySelectorAll(".color-pink-br");

function setColor(arr) {
    
    let j = 3;
    let k = 2;

    for (let i = 0; i < arr.length; i++) {
        

        if (i < 5) {
            arr[i].style.color = window.getComputedStyle(arr[j]).backgroundColor;
            j++;
            
        } else if (i > 4) {
            arr[i].style.color = window.getComputedStyle(arr[k]).backgroundColor;
            k++;
            
        }
    }
}

addNumberToColor(colorsArr);
changeTextColor(containerArr);
setColor(singleColorArr1);
setColor(singleColorArr2);
setColor(singleColorArr3);
setColor(singleColorArr4);
setColor(singleColorArr5);
setColor(singleColorArr6);
setColor(singleColorArr7);
setColor(singleColorArr8);
setColor(singleColorArr9);
setColor(singleColorArr10);
setColor(singleColorArr11);
setColor(singleColorArr12);
setColor(singleColorArr13);
setColor(singleColorArr14);
setColor(singleColorArr15);
setColor(singleColorArr16);
setColor(singleColorArr17);
setColor(singleColorArr18);
setColor(singleColorArr19);
setColor(singleColorArr20);
setColor(singleColorArr21);
setColor(singleColorArr22);
setColor(singleColorArr23);
setColor(singleColorArr24);
setColor(singleColorArr25);
setColor(singleColorArr26);