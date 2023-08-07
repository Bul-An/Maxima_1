const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.news-item')
const mainSlide = document.querySelector('.pictures')
const container =document.querySelector('.news-container')

const slideCount = mainSlide.querySelectorAll('div').length

let activeSlideIndex = 0;


sidebar.style.top = `-${(slideCount - 1) * 95}vh`
mainSlide.style.top = `0vh`

upBtn.addEventListener('click', ()=> {
    changeSlide ('up')
})

downBtn.addEventListener('click', ()=> {
    changeSlide ('down')
})

function changeSlide(direction){
    if (direction === 'up'){
        activeSlideIndex++
        if (activeSlideIndex === slideCount){
            activeSlideIndex = 0
        }
    } else if (direction === 'down'){
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slideCount - 1
        }
    }
    const heightC = container.clientHeight
    const heightM = mainSlide.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideIndex*heightM}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex*heightC}px)`
}