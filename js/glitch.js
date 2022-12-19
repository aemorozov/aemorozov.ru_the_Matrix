startScreen()

function startScreen() {

    const letters = document.querySelectorAll('.starts-letters')
    const symbolIDsForAnimation = [];
    const rowForAnimation = 'row-0';
    const prefixForRow = 'row-'
    const prefixForID = 'id-'
    const colors = ['#FF00FF', '#00BFFF', '#DAA520', '#FFFF00', '#00FFFF']
    const margins = ['-20px', '-43px', '50px', '-30px', '-10px']
    const timeoutForStartGlitch = 1000
    const timeoutForGlitch = 150
    const timeoutRevertGlitch = timeoutForGlitch - 1
    const timeoutForStopGlitch = 600
    const timeoutForClearInterval = 2000
    const howMuchSymbolsForOneGlitch = 5
    const isLink = 'a'

    let symbolID = 0;

    innerNewHTMLAndTags()

    const allSymbols = document.querySelectorAll('span')

    takeOnlyFirstLineForAnimation()

    let IDsForGlitch = []

    const glitchEffect = setInterval(glitch, timeoutForStartGlitch)

    setTimeout(() => clearInterval(glitchEffect), timeoutForClearInterval)



    // Functions

    function innerNewHTMLAndTags() {

        for (let rowNumber = 0; rowNumber < letters.length; rowNumber++) {

            const textContent = letters[rowNumber].textContent;
            if (textContent === null) return console.log('not text for glitch')
            const textContentAfterSplit = textContent.split("");
            const textContentLength = textContent.length;

            letters[rowNumber].innerHTML = "";

            for (let i = 0; i < textContentLength; i++) {
                if (letters[rowNumber].localName === isLink) {
                    letters[
                        rowNumber
                    ].innerHTML += `<a href="#" class="start-a" data-row='${prefixForRow}${rowNumber}' id="${prefixForID}${symbolID}">${textContentAfterSplit[i]}</a>`;
                    symbolID++
                } else {
                    letters[
                        rowNumber
                    ].innerHTML += `<span data-row='${prefixForRow}${rowNumber}' id="${prefixForID}${symbolID}">${textContentAfterSplit[i]}</span>`;
                    symbolID++;
                }
            }
        }
    }

    function takeOnlyFirstLineForAnimation() {
        for (let i = 0; i < allSymbols.length; i++) {
            if (allSymbols[i].dataset.row === rowForAnimation) {
                symbolIDsForAnimation.push(allSymbols[i].id)
            }
        }
        return symbolIDsForAnimation
    }

    function getRandomNumber() {
        IDsForGlitch = []
        for (let i = 0; i < howMuchSymbolsForOneGlitch; i++) {
            IDsForGlitch.push(`${prefixForID}` + Math.round(Math.random() * symbolIDsForAnimation.length))
        } return IDsForGlitch
    }

    function findElementsAndAddStyles() {
        for (let i = 0; i < IDsForGlitch.length; i++) {
            const IDForGlitch = `${IDsForGlitch[i]}`

            if (symbolIDsForAnimation.indexOf(IDForGlitch) != -1) {
                const element = document.getElementById(IDForGlitch)
                if (element === null) return
                element.style.top = margins[Math.round(Math.random() * margins.length)]
                element.style.left = margins[Math.round(Math.random() * margins.length)]
                element.style.background = colors[Math.round(Math.random() * colors.length)]

                setTimeout(() => {
                    element.style.top = '0'
                    element.style.left = '0'
                    element.style.background = ''
                }, timeoutRevertGlitch)
            }
        }
    }

    function glitch() {

        const glitch = setInterval(() => {
            getRandomNumber()
            findElementsAndAddStyles()

        }, timeoutForGlitch)

        setTimeout(() => clearInterval(glitch), timeoutForStopGlitch)
    }
}