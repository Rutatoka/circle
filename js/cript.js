"use strict"
document.querySelectorAll('ul .btn')
    .forEach(function(el) {
        el.onclick = function() {
            let cnt = this.closest('li').querySelector('.cnt');
            cnt.innerText = parseInt(cnt.innerText, 10) + 1 + " clicks";
            cnt.style.right = '62%'
            if (window.innerWidth < 500) {
                cnt.style.right = '45%'
            }
        };
    });