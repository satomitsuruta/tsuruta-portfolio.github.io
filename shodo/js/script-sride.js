'use strict';

const images = ['img/photo/wasitsu.jpg', 'img/photo/top2.jpg', 'img/photo/course.jpg'];
let num = -1;

function changeImage() {
    if(num +1 <= 2) {
        num += 1;
    document.getElementById('bigimg').src = images[num];
    }else {
        num = -1;
    }
}
setInterval(changeImage, 2500);
