window.onload = function(e) {
    var sliderLeft = document.getElementById('slider-left');
    var sliderRight = document.getElementById('slider-right');
    var sliser = document.getElementById('slider');
    var pager = document.getElementById('pager');
    var imageNumber = 1;
    var imageCount = 5;

    document.getElementById('close').onclick = function(e){
        document.getElementById('feedback').style.display = 'none';
    }

    document.getElementById('feedback-btn').onclick = function(e){
        document.getElementById('feedback').style.display = 'flex';
    }

    document.getElementById('pager-item-1').onclick = function(e) {
        replaceBackgroundImage(1);
    }

    document.getElementById('pager-item-2').onclick = function(e) {
        replaceBackgroundImage(2);
    }

    document.getElementById('pager-item-3').onclick = function(e) {
        replaceBackgroundImage(3);
    }

    document.getElementById('pager-item-4').onclick = function(e) {
        replaceBackgroundImage(4);
    }

    document.getElementById('pager-item-5').onclick = function(e) {
        replaceBackgroundImage(5);
    }

    sliderLeft.onclick = function(e) {
        if (imageNumber <= 1) {
            imageNuber = 1;
            return;
        } else {
            imageNumber--;
        }
        replaceBackgroundImage(imageNumber);
    }

    sliderRight.onclick = function(e) {
        if (imageNumber >= imageCount) {
            imageNumber = imageCount;
            return;
        } else {
            imageNumber++;
        }
        replaceBackgroundImage(imageNumber);
    }

    function replaceBackgroundImage(number) {
        for (var i = 0; i < pager.childNodes.length; i++) {
            if (pager.childNodes[i].className == 'pager-item') {
                pager.childNodes[i].style.background = 'transparent';
            }
        }

        var identifier = "pager-item-" + number;
        var numberPagerItem = document.getElementById(identifier);
        numberPagerItem.style.background = 'white';
        imageNumber = number;
        effectReplaceBackgroundImage(number);
    }

    function effectReplaceBackgroundImage(number) {
        var zIndex_9 = undefined;
        for (var i = 0; i < slider.childNodes.length; i++) {
            try {
                if (slider.childNodes[i].style.zIndex == 10) {
                    zIndex_9 = slider.childNodes[i];
                }
                if (slider.childNodes[i].classList.contains('slider-item')) {
                    slider.childNodes[i].style.zIndex = 1;
                }
                if (slider.childNodes[i].classList.contains('slider-item-' + number)) {
                    slider.childNodes[i].style.zIndex = 10;
                    animateFadeEffect(slider.childNodes[i]);
                }
            } catch (er) {}
        }
        if (zIndex_9 !== null && zIndex_9 !== undefined) {
            zIndex_9.style.zIndex = 9;
        }
    }

    function animate(draw, duration) {
        var start = performance.now();

        requestAnimationFrame(function animate(time) {
            var timePassed = time - start;
            if (timePassed > duration) timePassed = duration;
            draw(timePassed);
            if (timePassed < duration) {
                requestAnimationFrame(animate);
            }
        });
    }

    function animateFadeEffect(element) {
        var animationDuration = 500;
        var start = 0;
        var finish = 1;
        var delta = finish - start;
        element.style.opacity = 0;

        animate(function(timePassed) {
            element.style.opacity = start + (timePassed * delta) / animationDuration;
        }, animationDuration);
    }

    replaceBackgroundImage(1);
}