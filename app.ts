// Step 1: Get DOM
const nextDom = document.getElementById('next') as HTMLButtonElement | null;
const prevDom = document.getElementById('prev') as HTMLButtonElement | null;
let next = document.getElementById('next') as HTMLButtonElement;
const carouselDom = document.querySelector('.carousel') as HTMLElement | null;
const SliderDom = carouselDom?.querySelector('.carousel .list') as HTMLElement | null;
const thumbnailBorderDom = document.querySelector('.carousel .thumbnail') as HTMLElement | null;
const thumbnailItemsDom = thumbnailBorderDom?.querySelectorAll('.item') as NodeListOf<HTMLElement> | null;
const timeDom = document.querySelector('.carousel .time') as HTMLElement | null;

if (thumbnailBorderDom && thumbnailItemsDom) {
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
}

const timeRunning = 3000;

if (nextDom) {
    nextDom.onclick = function() {
        showSlider('next');
    };
}

if (prevDom) {
    prevDom.onclick = function() {
        showSlider('prev');
    };
}

let runTimeOut: number;

function showSlider(type: string): void {
    const SliderItemsDom = SliderDom?.querySelectorAll('.carousel .list .item') as NodeListOf<HTMLElement> | null;
    const thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item') as NodeListOf<HTMLElement>;

    if (SliderDom && thumbnailBorderDom && SliderItemsDom && thumbnailItemsDom) {
        if (type === 'next') {
            SliderDom.appendChild(SliderItemsDom[0]);
            thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
            carouselDom?.classList.add('next');
        } else {
            SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
            thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
            carouselDom?.classList.add('prev');
        }
        window.clearTimeout(runTimeOut);
        runTimeOut = window.setTimeout(() => {
            carouselDom?.classList.remove('next');
            carouselDom?.classList.remove('prev');
        }, timeRunning);
    }
}