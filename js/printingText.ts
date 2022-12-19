printingText()

function printingText() {

    const timeForStartAnimation = 3500
    const timeForAddNewText = 100
    const timeForStartScale = 4000
    const newText = ['Welcome to my web-site']
    const colors = ['#4285f4', '#db4437', '#f4b400', '#0f9d58']
    const img: HTMLImageElement | null = document.querySelector('.start-logo')
    const divStart: HTMLDivElement | null = document.querySelector('.start')

    setTimeout(animation, timeForStartAnimation)


    // Functions

    function animation() {
        const title = document.querySelector('.start-title')
        if (title === null) return
        const spansArray = title.childNodes
        addNewText(spansArray)
        setTimeout(scale, timeForStartScale)
        
    }

    function addNewText(spansArray) {
        let i = 0
        if (img === null) return
        img.src = 'img/starts-logo-with-smile.png'
        const addText = setInterval(() => {
            if (i < spansArray.length) {
                spansArray[i].innerHTML = newText[0][i] || ' .'
                spansArray[i].style.color = colors[Math.floor(Math.random() * colors.length)]
                i++
            } else {
                clearInterval(addText)
            }
        }, timeForAddNewText)
    }

    function scale() {
        if (divStart === null) return
        divStart.style.transform = ('translateX(-60%) scale(1000)')
        setTimeout(() => {divStart.style.display = 'none'}, 2000)
    }
}