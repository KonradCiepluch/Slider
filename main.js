class Slider {
    iteration = 0;
    slideNumber = 1;
    slides = ['https://placeimg.com/640/480/nature/1', 'https://placeimg.com/640/480/nature/2', 'https://placeimg.com/640/480/nature/3', 'https://placeimg.com/640/480/nature/4', 'https://placeimg.com/640/480/nature/5'];

    constructor(section, img, btnLeft, btnRight, description) {
        this.section = section;
        this.img = img;
        this.btnLeft = btnLeft;
        this.btnRight = btnRight;
        this.description = description;
    }
    changeSlideLeft() {
        if(this.iteration === 0) {
            this.btnLeft.style.opacity = 0.4;
        } else {
            this.iteration--;
            this.description.textContent = `${--this.slideNumber}/5`;
            this.btnLeft.style.opacity = this.iteration === 0 ? 0.4 : 0.8;
            this.btnRight.style.opacity = 0.8;
            this.img.setAttribute('src', this.slides[this.iteration]);
        }
    }
    changeSlideRight() {
        if(this.iteration === 4) {
            this.btnRight.style.opacity = 0.4;
        } else {
            this.iteration++;
            this.description.textContent = `${++this.slideNumber}/5`;
            this.btnRight.style.opacity = this.iteration === 4 ? 0.4 : 0.8;
            this.btnLeft.style.opacity = 0.8;
            this.img.setAttribute('src', this.slides[this.iteration]);
        }
    }
    keyChangeSlide(event){
        if(event.keyCode === 37 || event.keyCode === 39) {
            if(event.keyCode === 37) {
                this.changeSlideLeft();
            } else {
                this.changeSlideRight();
            }
        }
    }

    start() {
        this.img.setAttribute('src', this.slides[this.iteration]);
        this.btnLeft.style.opacity = 0.4;
        this.btnLeft.addEventListener('click', () => this.changeSlideLeft());
        this.btnRight.addEventListener('click', () => this.changeSlideRight());
        window.addEventListener('keydown', (event) => this.keyChangeSlide(event))
        this.description.textContent = `${this.slideNumber}/5`;
        
    }
}

const slider = new Slider(section = document.querySelector('.slider'), img=document.querySelector('.slider__image'), btnLeft = document.querySelector('.slider__btn1'), btnRight=document.querySelector('.slider__btn2'), description = document.querySelector('.description'));

slider.start();