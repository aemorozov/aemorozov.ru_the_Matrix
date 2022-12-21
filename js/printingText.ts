printingText()

function printingText() {

    const timeForStartAnimation = 3500
    const timeForAddNewText = 80
    const timeForStartShift = 3500
    const newText = ['Welcome to my web-site']
    const colors = ['#4285f4', '#db4437', '#f4b400', '#0f9d58']
    const img: HTMLImageElement | null = document.querySelector('.start-logo')
    const startTitle: HTMLHtmlElement | null = document.querySelector('.start-title')
    const startP: NodeListOf<HTMLHtmlElement> | null = document.querySelectorAll('.start-p')
    const startA: HTMLHtmlElement | null = document.querySelector('.start-a')
    const startPLittle: HTMLHtmlElement | null = document.querySelector('.start-p-little')
    const startButton: HTMLHtmlElement | null = document.querySelector('.start-button')
    
    setTimeout(animation, timeForStartAnimation)


    // Functions

    function animation() {
        const title = document.querySelector('.start-title')
        if (title === null) return
        const spansArray = title.childNodes
        addNewText(spansArray)
        setTimeout(shift, timeForStartShift)
        
    }

    function addNewText(spansArray) {
        let i = 0
        if (img === null) return
        img.src = 'img/starts-logo-with-smile.png'
        const addText = setInterval(() => {
            if (i < spansArray.length) {
                spansArray[i].innerHTML = newText[0][i] || ''
                spansArray[i].style.color = colors[Math.floor(Math.random() * colors.length)]
                i++
            } else {
                clearInterval(addText)
            }
        }, timeForAddNewText)
    }

    function shift() {
        if (startTitle && startP && startA && startPLittle && startButton && img) {
            startTitle.style.marginLeft = '-150vw'
            startA.style.marginLeft = '-150vw'
            startPLittle.style.marginLeft = '-150vw'
            startButton.style.marginLeft = '-150vw'
            img.style.marginLeft = '45%'
            for(let i = 0; i < startP.length; i++) {
                startP[i].style.marginLeft = '-150vw'
            }
        }
    }
}