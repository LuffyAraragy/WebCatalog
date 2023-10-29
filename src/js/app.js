//console.log("alax");
//import Swiper from "swiper";

import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();



const buttons = document.querySelectorAll('.my-button');

// Добавляем обработчик события для каждой кнопки
buttons.forEach(button => {
    button.addEventListener('click', function() {
        for(let i = 0; i < 3; i++){
            //можно найти первый объект определёного цвета и поменять цвет на другой
            let elementsWithBorderClass = document.querySelectorAll(".my-button");
            
            
            // Применяем красный цвет к каждому найденному элементу
            elementsWithBorderClass.forEach(function(element) {
            element.style.background = "#D4E8D9";
            element.style.color = "#2C2D35";
            });

        }
        
        // ПОЛУЧИЛОСЬ ПОМЕНЯТЬ КАРТИНКУ ЧЕРЕЗ СКРИПТ
      // let elements = document.querySelectorAll(".card-block_img");

      // for (let i = 0; i < elements.length; i++) {
      //   elements[i].src = "../img/card/bear.jpg";
      // }

        // Изменяем цвет кнопки, на которую нажали
        button.style.backgroundColor = "#376B44";
        button.style.color = "#F4F6F5";
    });
});


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

const buttons2 = document.querySelectorAll('.but');

// Добавляем обработчик события для каждой кнопки
buttons2.forEach(button => {
    button.addEventListener('click', function() {
    
      //можно найти первый объект определёного цвета и поменять цвет на другой
      let elementsWithBorderClass = document.querySelectorAll(".swipe-menu");
  
      // Применяем красный цвет к каждому найденному элементу
        elementsWithBorderClass.forEach(function(element) {
        // element.style.background = "#D4E8D9";
        // element.style.color = "#2C2D35";
        //скрывает или открывает данный контент Swiper
        if(element.style.display == "none"){
          element.style.display = "block";
        }
        else{
          element.style.display = "none";
        }
        

      });
      


    });
});
// let chapter = document.querySelector('.card-block__author');
// console.log(chapter.length);
// let divs = document.getElementsByClassName('card-block__author');
// alert(divs.length);



// Назначаем обработчик события для каждой кнопки
const buttonElements = document.querySelectorAll(".my-button__1");
buttonElements.forEach(function (button) {
  button.addEventListener("click", function (){
    let elements = document.querySelectorAll(".card-block_img");

      for (let i = 0; i < elements.length; i++) {
        elements[i].src = "../img/card/card_art1.jpg";
      }
  });
});

const buttonElements1 = document.querySelectorAll(".my-button__2");
buttonElements1.forEach(function (button) {
  button.addEventListener("click", function (){
    let elements = document.querySelectorAll(".card-block_img");

      for (let i = 0; i < elements.length; i++) {
        elements[i].src = "../img/card/card_art2.jpg";
      }
  });
});

const buttonElements2 = document.querySelectorAll(".my-button__3");
buttonElements2.forEach(function (button) {
  button.addEventListener("click", function (){
    let elements = document.querySelectorAll(".card-block_img");

      for (let i = 0; i < elements.length; i++) {
        elements[i].src = "../img/card/card_art3.jpg";
      }
  });
});



