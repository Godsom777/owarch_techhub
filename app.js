// Step 1: Get DOM
var nextDom = document.getElementById('next');
var prevDom = document.getElementById('prev');
var next = document.getElementById('next');
var carouselDom = document.querySelector('.carousel');
var SliderDom = carouselDom === null || carouselDom === void 0 ? void 0 : carouselDom.querySelector('.carousel .list');
var thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
var thumbnailItemsDom = thumbnailBorderDom === null || thumbnailBorderDom === void 0 ? void 0 : thumbnailBorderDom.querySelectorAll('.item');
var timeDom = document.querySelector('.carousel .time');
if (thumbnailBorderDom && thumbnailItemsDom) {
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
}
var timeRunning = 3000;
if (nextDom) {
    nextDom.onclick = function () {
        showSlider('next');
    };
}
if (prevDom) {
    prevDom.onclick = function () {
        showSlider('prev');
    };
}
var runTimeOut;
function showSlider(type) {
    var SliderItemsDom = SliderDom === null || SliderDom === void 0 ? void 0 : SliderDom.querySelectorAll('.carousel .list .item');
    var thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    if (SliderDom && thumbnailBorderDom && SliderItemsDom && thumbnailItemsDom) {
        if (type === 'next') {
            SliderDom.appendChild(SliderItemsDom[0]);
            thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
            carouselDom === null || carouselDom === void 0 ? void 0 : carouselDom.classList.add('next');
        }
        else {
            SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
            thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
            carouselDom === null || carouselDom === void 0 ? void 0 : carouselDom.classList.add('prev');
        }
        window.clearTimeout(runTimeOut);
        runTimeOut = window.setTimeout(function () {
            carouselDom === null || carouselDom === void 0 ? void 0 : carouselDom.classList.remove('next');
            carouselDom === null || carouselDom === void 0 ? void 0 : carouselDom.classList.remove('prev');
        }, timeRunning);
    }
}
