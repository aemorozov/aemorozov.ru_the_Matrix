var h1Array = document.querySelectorAll('.tagline-h1');
var prefixForID = "symbol-";
var speed = 60;
var startTextAnimation = 0;
var symbolID = 0;
addSpansWithOpacity0();
setTimeout(addOpacity1, startTextAnimation);
function addSpansWithOpacity0() {
    for (var rowNumber = 0; rowNumber < h1Array.length; rowNumber++) {
        var textContent = h1Array[rowNumber].textContent;
        if (!textContent) {
            return;
        }
        var textContentAfterSplit = textContent.split("");
        var textContentLength = textContent.length;
        h1Array[rowNumber].innerHTML = "";
        for (var i = 0; i < textContentLength; i++) {
            h1Array[rowNumber].innerHTML += "<span class=\"opacity-0-styling\" id=\"".concat(prefixForID).concat(symbolID, "\">").concat(textContentAfterSplit[i], "</span>");
            symbolID++;
        }
    }
    symbolID = 0;
}
function addOpacity1() {
    var forCleanInterval = setInterval(function () {
        var symbol = document.querySelector("#".concat(prefixForID).concat(symbolID));
        if (symbol) {
            symbol.classList.add("opacity-1-styling");
            symbolID++;
        }
        else
            clearInterval(forCleanInterval);
    }, speed);
}
