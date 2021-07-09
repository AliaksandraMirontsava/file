let myImageSlider = new Swiper('.image-slider', {
   //Стрелки
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },
   // Навигация
   // Буллеты, текущее положение, прогрессбор
   pagination: {
      el: '.swiper-pagination',
      //Буллеты
      clickable: true,
     
    // Динамические буллеты
      dynamicBullets: true,
 
     
      // Кастомные буллеты (создает нумерацию)
      renderBullet: function (index, className) {
         return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
     

     /*
     // Фракция
     type: 'fraction',
     //Кастомный вывод фракции
     renderFraction: function (currentClass, totalClass) {
        return 'Фото <span class="' + currentClass + '"></span>' +
        ' из ' +
        '<span class="' + totalClass + '"></span>';
     },
     */
    

     /*
     // Прогрессбор
     type:'progressbar'
     */
   },

  
   /*
   // Скролл
   scrollbar: {
      el: '.swiper-scrollbar',
      //Возможность перетаскивать скролл
      draggable: true
   },
   */
   



      /*
   //Мультирядность (для работы нужно в автовысоте поставить false)
   //Также нужно задавать стили в css
   //автоширину нужно закомментировать,
   //.image-slider {height: 700px;}
   //.image-slider .swiper-slide{
   //     height: calc((100% - 30px) / 2);
   //     overflow: hidden;
   //     }
   slidesPerColumn: 2,
   */



   //Включение/отключение
   // перетаскивания на ПК
   simulateTouch: true,
   // Чувствительность свайпа
   touchRatio: 1,
   // Угол срабатывания свайпа/перетаскивания
   touchAngle: 45,
   // Курсор перетаскивания
   grabCursor: true,


   //Переключение при клике на слайд
   slideToClickedSlide: true,

   //Навигация по хешу
   hashNavigation: {
    //Отслеживать состояние
    watchState: true,
   },

   //Управление клавиатурой
   keyboard: {
      //Включить/выключить
      enabled: true,
      //Включить/выключить
      //только когда слайдер
      //в пределах вьюпорта
      onlyInViewport: true,
      //Включить/выключить
      //управление клавиатурой
      //pageUp, pageDown
      pageUpDown: true,
   },

   //Управление колесом мыши
   mousewhell: {
   // Чувствительность колеса мыши
   sensitivity: 1,
   // Класс объекта на котором
   // будет срабатывать прокрутка мышью.
   /*   eventsTarget: ".image-slider" */
   },

    //отключение функционала если слайдов меньше чем нужно
     watchOverflow: true,

   //Автовысота
   autoHeight: true,

   // КОЛЛИЧЕСТВО СЛАЙДОВ ДЛЯ ПОКАЗА
   // можно указывать целые, не целые числа, и auto.
   slidesPerView: 3,
   //ОТСТУП МЕЖДУ СЛАЙДАМИ
   spaceBetween: 20,
   //КОЛЛИЧЕСТВО ПРОЛИСТЫВАЕМЫХ СЛАЙДОВ
   slidesPerGroup: 1,
   /*
   // активный слайд по центру
   centeredSlide: true,
   */

   // Стартовый слайд
   initialSlide: 0,


   // Бесконечный слайдер
   loop: false,

   // Свободный режим
   //нет фиксированных позиций при перетаскивании, выглядит прикольно
   freeMode: false,



   /*
   //Автопрокрутка
   autoplay: {
      //Пауза между прокруткой
      delay: 3000,
      //Закончить на последнем слайде
      stopOnLastSlide: false,
      //Отключить после ручного переключения
      disableOnInteraction: false,
   },
   //Скорость прокрутки слайда
   speed: 600,
  

   /*
   //ВЕРТИКАЛЬНЫЙ СЛАЙДЕР
   //также в стилях нужно указать
   // .image-slider {
   //    padding: 0px 0 0px 0;
   //    height:700px;
   //     }
   // и закомментировать автоширину если она указана
   direction: 'vertical',
   */



   // Скорость
   speed:800,
   // горизонтальный слайдер
   direction: 'horizontal',
   //Эффекты переключения слайдов
   //Листание
   effect: 'slide',



   /*
   //Эффукты переключения слайдов
   //Смена прозрачности
   effect: 'fade',
   // Дополнение к fade
   fadeEffect: {
      //Параллельная
      //снена прозрачности
      crossFade: true,
   },
   */


   /*
   // Эффект переключения слайдов
   // ПЕРЕВОРОТ
   effect: 'flip',
   speed: 800,
   // Дополнение к flip
   flipEffect: {
      //тень
      slideShadows: true,
      //показ только активного слайда
      limitRotation: true,
   },
   */


   /*
   // Эффект переключения слайдов
   // Куб
   // в стилях image-slider нужно указать  margin: 0 auto; и width: 700px;
   effect: 'cube',
   speed: 800,
   //Дополнение к cube
   cubeEffect: {
      // Настройки тени
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94,
   },
   */


   /*
   //Эффект переключения слайдов
   // Эффект потока
   effect: 'coverflow',
   // Дополнение к overflow
   coverflowEffect: {
      //угол
      rotate: 40,
      // наложение
      stretch: 50,
      // тень
      slideshadows: true,
   },
   */



   // АДАПТИВ СЛАЙДЕРА (Брайк поинт)
   // Ширина экрана
   breakpoints: {
      320: {
         slidesPerView: 1,
      },
      480: {
         slidesPerView: 2,
      },
      992: {
         slidesPerView: 3,
      }
   },



   /*
   // АДАПТИВ СЛАЙДЕРА (Брайк поинт)
   // Соотношение сторон
   breakpointer: {
      '@0.75': {
         slidesPerView: 1,
      },
      '@1.00': {
         slidesPerView: 2,
      },
      '@1.50': {
         slidesPerView: 3,
      }
   },
   */


   /*
//Зум картинки
// также нужно добавить класс 
// swiper-zoom-container для картинки которуб хотим увеличить
zoom: {
   //максимальное увеличение
   maxRation:5,
   //Минимальное увеличение
   minRation:1
},
*/


//Доступность
ally: {
   //Включить/выключить
   enabled: true,
   // сообщения
   prevSlideMessage: 'Previous slide',
   nextSlideMessage: 'Next slide',
   firstSlideMessage: 'This is ths first slide',
   lastSlideMessage: 'This is the last slide',
   paginationBulletMessage: 'Go to slide {{index}}',
   notificationClass: 'swiper-notification',
   containerMessage: '',
   containerRoleDescriptionMessage: '',
   itemRoleDescriptionMessage: '',
   // и т.д
},

});



// Еще один слайдер
let myTextSlider = new Swiper('.text-slider', {
   //Колличество слайдов для показа
   slidesPerView: 3,
   // Отступ между слайдами
   spaceBetween: 30,
   breakpoints: {
      320: {
         slidesPerView: 1,
      },
      480: {
         slidesPerView: 2,
      },
      992: {
         slidesPerView: 3,
      }
   },
});

   //Передача управления
   myImageSlider.controller.control = myTextSlider;
   myTextSlider.controller.control = myTextSlider;




   //Параллакс слайдер
   new Swiper('.parallax-slider', {
      //Включение параллакс
      parallax: true,
      //скорость переключения
      speed: 2000,
      //стрелки
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
      autoplay: {
         //Пауза между прокруткой
         delay: 3000,
         //Закончить на последнем слайде
         stopOnLastSlide: false,
         //Отключить после ручного переключения
         disableOnInteraction: false,
      },
      loop: true,
      

   });


   //Автопрокрутка при наведении мыши
   let sliderBlock = document.querySelector('.image-slider');
   // myImageSlider -это переменная которой присвоен слайдер

   sliderBlock.addEventListener("mouseenter", function (e) {
      myImageSlider.params.autoplay.disableOnInteraction = false;
      myImageSlider.params.autoplay.delay = 1000;
      myImageSlider.autoplay.start();
   });
   sliderBlock.addEventListener("mouseleave", function (e) {
      myImageSlider.autoplay.stop();
   });