const images = document.querySelectorAll('img')
const dots = document.querySelectorAll('div.dot')
const left_arrow = document.getElementById('left')
const right_arrow = document.getElementById('right')
let active_img = 0


const img_opacity = (img) => {
    img.style.opacity = 0
}

const dot_active = (dot) => {
    dot.classList.remove('active')
}

const element_active = (img, dot, int) => {
    images.forEach(img_opacity)
    img.style.opacity = 1
    active_img = int

    dots.forEach(dot_active)
    dot.classList.add('active')
}

dots[0].addEventListener('click', () => {
    element_active(images[0], dots[0], 0)
})

dots[1].addEventListener('click', () => {
    element_active(images[1], dots[1], 1)
})

dots[2].addEventListener('click', () => {
    element_active(images[2], dots[2], 2)
})

dots[3].addEventListener('click', () => {
    element_active(images[3], dots[3], 3)
})

left_arrow.addEventListener('click', () => {
    switch(active_img) {
        case 0:
            element_active(images[3], dots[3], 3)
            break;
        case 1:
            element_active(images[0], dots[0], 0)
            break;
        case 2:
            element_active(images[1], dots[1], 1)
            break;
        case 3:
            element_active(images[2], dots[2], 2)
            break;
    }
})

right_arrow.addEventListener('click', () => {
    switch(active_img) {
        case 0:
            element_active(images[1], dots[1], 1)
            break;
        case 1:
            element_active(images[2], dots[2], 2)
            break;
        case 2:
            element_active(images[3], dots[3], 3)
            break;
        case 3:
            element_active(images[0], dots[0], 0)
            break;
    }
})