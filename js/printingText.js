printingText();
function printingText() {
    var timeForStartAnimation = 3500;
    var timeForAddNewText = 80;
    var timeForStartShift = 3500;
    var newText = ['Welcome to my web-site'];
    var colors = ['#4285f4', '#db4437', '#f4b400', '#0f9d58'];
    var img = document.querySelector('.start-logo');
    var startTitle = document.querySelector('.start-title');
    var startP = document.querySelectorAll('.start-p');
    var startA = document.querySelector('.start-a');
    var startPLittle = document.querySelector('.start-p-little');
    var startButton = document.querySelector('.start-button');
    setTimeout(animation, timeForStartAnimation);
    // Functions
    function animation() {
        var title = document.querySelector('.start-title');
        if (title === null)
            return;
        var spansArray = title.childNodes;
        addNewText(spansArray);
        setTimeout(shift, timeForStartShift);
    }
    function addNewText(spansArray) {
        var i = 0;
        if (img === null)
            return;
        img.src = 'img/starts-logo-with-smile.png';
        var addText = setInterval(function () {
            if (i < spansArray.length) {
                spansArray[i].innerHTML = newText[0][i] || '';
                spansArray[i].style.color = colors[Math.floor(Math.random() * colors.length)];
                i++;
            }
            else {
                clearInterval(addText);
            }
        }, timeForAddNewText);
    }
    function shift() {
        if (startTitle && startP && startA && startPLittle && startButton && img) {
            startTitle.style.marginLeft = '-150vw';
            startA.style.marginLeft = '-150vw';
            startPLittle.style.marginLeft = '-150vw';
            startButton.style.marginLeft = '-150vw';
            img.style.marginLeft = '45%';
            for (var i = 0; i < startP.length; i++) {
                startP[i].style.marginLeft = '-150vw';
            }
        }
    }
}
