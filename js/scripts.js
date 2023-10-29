$(document).ready(function () {
    // Select all .project elements
    let isHidden = false;
    const $allProjects = $('.projects');

    // Add a mouseover event listener to trigger the jostle effect on the hovered project
    $allProjects.on('mouseover', function () {
        // Remove the "jostle" class from all .project elements
        $allProjects.removeClass(' jostle ');

        // Add the "jostle" class to the hovered .project element
        $(this).addClass(' jostle ');
    });

    // Add a mouseout event listener to reset the elements to their original state
    $allProjects.on('mouseout', function () {
        // Remove the "jostle" class from all .project elements
        $allProjects.removeClass(' jostle ');
    });


    const $tabName = $(".tabs li a");
    $tabName.on('mouseover', function () {
        $(this).addClass(' active-bounce-down');
    });
    $tabName.on('mouseout', function () {
        $tabName.removeClass(' active-bounce-down');
    });


    $('#name').on('mouseover', function () {
        $('#bee').addClass(' active-bounce');
    });
    $('#name').on('mouseout', function () {
        $('#bee').removeClass(' active-bounce');
    });


    $('#french').on('mouseover', function () {
        $('#french').text("Elle parle assez bien le français, mais franchement c'est beaucoup plus facile de l'écrire que de le parler")
    });
    $('#french').on('mouseout', function () {
        $('#french').text("She can speak French, though honestly it’s much easier t write than to speak")
    });
    $('#dutch').on('mouseover', function () {
        $('#dutch').text("haar Nederlands is slecht, maar ze doet haar best")
    });
    $('#dutch').on('mouseout', function () {
        $('#dutch').text("her Dutch is bad, but she does her best")
    });





});







$('#logo').on('click', function () {
    console.log("check");
    if (isHidden) {
        // If elements are hidden, show them
        console.log("isHidden");
        $('.web-design, .digital-art, .pub-design').show();
        isHidden = false;
    } else {
        // If elements are visible, hide them
        console.log("isVisible");
        $('.web-design, .digital-art, .pub-design').hide();
        isHidden = true;
    }
});




//https://www.w3schools.com/howto/howto_js_slideshow.asp
let slideIndex = 1;
showSlides();

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dot-active", "");
        dots[i].className = dots[i].className.replace(" active-bounce", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " dot-active";
    dots[slideIndex - 1].className += " active-bounce";
}