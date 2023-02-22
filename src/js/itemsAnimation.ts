const items: NodeListOf<HTMLElement> = document.querySelectorAll('.item')
const textInItem: NodeListOf<HTMLElement> = document.querySelectorAll('.text-in-open-item')
const backLayout = document.querySelector('.back-layout')
let isAnimation = false

for(let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', () => {
        if(!isAnimation) {
            isAnimation = true
            items[i].classList.toggle('active')
            if (items[i].style.zIndex === '0' || items[i].style.zIndex === '') {
                items[i].style.zIndex = '1'
                setTimeout(() => {
                    textInItem[i].style.top = '20%'
                    isAnimation = false
                }, 300)
            } else {
                setTimeout(() => {
                    items[i].style.zIndex = '0'
                    isAnimation = false
                }, 300)
                textInItem[i].style.top = '-200%'
            }
        }
    })
}

backLayout?.addEventListener('click', () => {
    for(let i = 0; i < items.length; i++) {
        items[i].classList.remove('active')
        textInItem[i].style.top = '-200%'
        setTimeout(() => {
            items[i].style.zIndex = '0'
        }, 300)
    }
})