"use strict";
const $head = document.querySelectorAll(".accordion__head");
const $icons = document.querySelectorAll(".accordion__icon");
const $description = document.querySelectorAll(".accordion__description");
const iconSrcActive = "./assets/images/icon-minus.svg";
const iconSrc = "./assets/images/icon-plus.svg";
$head.forEach((head, index) => {
    head.addEventListener("click", () => {
        const isActive = $description[index].classList.contains("accordion__description--active");
        $description.forEach(content => {
            content.classList.remove("accordion__description--active");
        });
        $icons.forEach((icon) => {
            icon.src = iconSrc;
        });
        if (!isActive) {
            $icons[index].src = iconSrcActive;
            $description[index].classList.add("accordion__description--active");
        }
    });
});
