const burger = document.querySelector(".burger_lines");
const menu = document.querySelector(".menu");
const logo = document.querySelector(".logo");
const burger_invisible = document.querySelector(".burger_invisible");

burger.addEventListener("click", () => {
  burger.classList.toggle("rotate");
  if (menu.className === "menu menu_js") {
    menu.classList.toggle("active", true);
    body.style.overflow = "hidden";
  } else if (menu.className === "menu menu_js active") {
    menu.classList.toggle("active", false);
    body.style.overflow = "visible";
  }

  burger_invisible.classList.toggle("not-visible");

  logo.addEventListener("click", () => {
    burger.classList.remove("rotate");
    menu.classList.remove("active");
    burger_invisible.classList.add("not-visible");
  });

  burger_invisible.addEventListener("click", () => {
    burger.classList.remove("rotate");
    menu.classList.remove("active");
    burger_invisible.classList.add("not-visible");
  });
});

menu.addEventListener("click", (e) => {
  const target = e.target;
  if (target.tagName === "A" && target.className === "nav_link active") {
    document.location = "index.html";
  }
});

const popupBack = document.querySelector(".popup_our-friends");
const popup = document.querySelector(".popup");
const openPopup = document.querySelectorAll(".our-friends_btn");
const clonePopup = document.querySelector(".exit_popup");

openPopup.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    popupBack.classList.add("active");
    popup.classList.add("active");
  });
});

clonePopup.addEventListener("click", () => {
  popupBack.classList.remove("active");
  popup.classList.remove("active");
});

document.addEventListener("click", (e) => {
  if (e.target === popupBack) {
    popupBack.classList.remove("active");
    popup.classList.remove("active");
  }
});

const slider = document.querySelector(".our-friends_slider");
const sliderCards = document.querySelectorAll(".our-friends_card");
const nextSlider = document.querySelector(".our-friends_arrow-right");
const prevSlider = document.querySelector(".our-friends_arrow_left");

const sliderCardWidth = sliderCards[0].clientWidth;
let counter = 1;

let translation = 0;

const nextSlide = function () {
  let start = Date.now();

  let timer = setInterval(function () {
    let timePassed = Date.now() - start;

    nextSlider.classList.add("inactive-button");
    if (timePassed > sliderCardWidth) {
      setTimeout(() => {
        nextSlider.classList.remove("inactive-button");
      }, 400);
      clearInterval(timer);
      translation = sliderCardWidth * counter;
      counter++;
      return;
    }
    draw(timePassed);
  }, 0);

  function draw(timePassed) {
    sliderCards.forEach((item) => {
      item.style.right = translation + timePassed + "px";
    });
  }
};

const prevSlide = function () {
  let start = Date.now();
  let timer = setInterval(function () {
    let timePassed = Date.now() - start;

    prevSlider.classList.add("inactive-button");

    if (timePassed > sliderCardWidth) {
      setTimeout(() => {
        prevSlider.classList.remove("inactive-button");
      }, 400);
      clearInterval(timer);
      translation = sliderCardWidth * (counter - 2);
      counter--;
      return;
    }
    draw(timePassed);
  }, 0);

  function draw(timePassed) {
    sliderCards.forEach((item) => {
      item.style.right = translation - timePassed + "px";
    });
  }
};

nextSlider.addEventListener("click", nextSlide);
prevSlider.addEventListener("click", prevSlide);
