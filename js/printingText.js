printingText();
function printingText() {
    var timeForStartAnimation = 3500;
    var timeForAddNewText = 100;
    var timeForStartScale = 4000;
    var newText = ['Welcome to my web-site'];
    var colors = ['#4285f4', '#db4437', '#f4b400', '#0f9d58'];
    var img = document.querySelector('.start-logo');
    var divStart = document.querySelector('.start');
    setTimeout(animation, timeForStartAnimation);
    // Functions
    function animation() {
        var title = document.querySelector('.start-title');
        if (title === null)
            return;
        var spansArray = title.childNodes;
        addNewText(spansArray);
        setTimeout(scale, timeForStartScale);
    }
    function addNewText(spansArray) {
        var i = 0;
        if (img === null)
            return;
        img.src = 'img/starts-logo-with-smile.png';
        var addText = setInterval(function () {
            if (i < spansArray.length) {
                spansArray[i].innerHTML = newText[0][i] || ' .';
                spansArray[i].style.color = colors[Math.floor(Math.random() * colors.length)];
                i++;
            }
            else {
                clearInterval(addText);
            }
        }, timeForAddNewText);
    }
    function scale() {
        if (divStart === null)
            return;
        divStart.style.transform = ('translateX(-60%) scale(1000)');
        setTimeout(function () { divStart.style.display = 'none'; }, 2000);
    }
}
