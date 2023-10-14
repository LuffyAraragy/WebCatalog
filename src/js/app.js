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
            var elementsWithBorderClass = document.querySelectorAll(".my-button");
        
            // Применяем красный цвет к каждому найденному элементу
            elementsWithBorderClass.forEach(function(element) {
            element.style.background = "#D4E8D9";
            element.style.color = "#2C2D35";
            });
        }
        
        
        // Изменяем цвет кнопки, на которую нажали
        button.style.backgroundColor = "#376B44";
        button.style.color = "#F4F6F5";
    });
});

