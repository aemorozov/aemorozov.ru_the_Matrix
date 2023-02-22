var items = document.querySelectorAll('.item');
var textInItem = document.querySelectorAll('.text-in-open-item');
var backLayout = document.querySelector('.back-layout');
var isAnimation = false;
var _loop_1 = function (i) {
    items[i].addEventListener('click', function () {
        if (!isAnimation) {
            isAnimation = true;
            items[i].classList.toggle('active');
            if (items[i].style.zIndex === '0' || items[i].style.zIndex === '') {
                items[i].style.zIndex = '1';
                setTimeout(function () {
                    textInItem[i].style.top = '20%';
                    isAnimation = false;
                }, 300);
            }
            else {
                setTimeout(function () {
                    items[i].style.zIndex = '0';
                    isAnimation = false;
                }, 300);
                textInItem[i].style.top = '-200%';
            }
        }
    });
};
for (var i = 0; i < items.length; i++) {
    _loop_1(i);
}
backLayout === null || backLayout === void 0 ? void 0 : backLayout.addEventListener('click', function () {
    var _loop_2 = function (i) {
        items[i].classList.remove('active');
        textInItem[i].style.top = '-200%';
        setTimeout(function () {
            items[i].style.zIndex = '0';
        }, 300);
    };
    for (var i = 0; i < items.length; i++) {
        _loop_2(i);
    }
});
