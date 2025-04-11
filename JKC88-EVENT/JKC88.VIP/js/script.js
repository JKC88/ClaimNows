// var images = [];
var images = ['./image/text1.png'];
var currentIndex = 0;

document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("slider").src = "./image/text1.png";
    $('.main-title img').css('width', '85%');
    $('.main-title').css('top', '9%');
});

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    $('#slider').removeClass('add-animation-zoom'); //Comment if using Slide keyframe
    // $('#slider').removeClass('add-animation'); //Comment if using Zoomout keyframe
    // $('#slider').addClass('exit-animation'); //Comment if using Zoomout keyframe
    setTimeout(function () {
        $('#slider').attr('src', images[currentIndex]);
        if ($('#slider').attr('src') === './image/text1.png') {
            $('.main-title img').css('width', '85%'); // set image size (text 1)
            $('.main-title').css('top', '9%'); //set top position of main-title
        }
        else if ($('#slider').attr('src') === './image/text2.png') {
            $('.main-title img').css('width', '75%'); // set image size (text 2)
            $('.main-title').css('top', '16%'); //set top position of main-title
        }
        else if ($('#slider').attr('src') === './image/text3.png') { // Comment only if have third text slider
            $('.main-title img').css('width', '90%'); // set image size (text 3)
            // $('.main-title').css('top', '17%'); //set top position of main-title
        }
        $('#slider').addClass('add-animation-zoom'); //Comment if using Slide keyframe
        // $('#slider').removeClass('exit-animation'); //Comment it if using Zoomout keyframe
        // $('#slider').addClass('add-animation'); //Comment it if using Zoomout keyframe
    }, 50);
}

setInterval(changeImage, 2500); // set the image rotate time