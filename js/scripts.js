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

    const $french = $('#french');
    const $dutch = $('#dutch');
    const frenchOriginalText = "She can speak French, though honestly it’s much easier to write than to speak";
    const frenchNewText = "Elle parle assez bien le français, mais franchement c'est beaucoup plus facile de l'écrire que de le parler";
    const dutchOriginalText = "her Dutch isn't great, but she does her best.";
    const dutchNewText = "haar Nederlands is slecht, maar ze doet haar best.";
    $french.on('mouseover', function () {
        $french.animate({ opacity: 0 }, 300, function () {
            $french.text(frenchNewText).animate({ opacity: 1 }, 150);
        });
    });
    $french.on('mouseout', function () {
        $french.animate({ opacity: 0 }, 300, function () {
            $french.text(frenchOriginalText).animate({ opacity: 1 }, 150);
        });
    });
    $dutch.on('mouseover', function () {
        $dutch.animate({ opacity: 0 }, 300, function () {
            $dutch.text(dutchNewText).animate({ opacity: 1 }, 150);
        });
    });
    $dutch.on('mouseout', function () {
        $dutch.animate({ opacity: 0 }, 300, function () {
            $dutch.text(dutchOriginalText).animate({ opacity: 1 }, 150);
        });
    });

    function updatePushpinHolderWidth() {
        var projectTitleWidth = $('.project-title').width();
        var newWidth = projectTitleWidth;
        // var buttonWidth = $('.pinback-button-scale').width();
        $('.pushpin-holder').width(newWidth);
        // $('.pinback-button-scale').height(buttonWidth);
    }

    // Initial setup
    updatePushpinHolderWidth();
    // Update on window resize
    $(window).on('resize', function () {
        updatePushpinHolderWidth();
    });


    $('#scroll-list li').on('click', function () {
        const targetId = $(this).data('target');
        const targetOffset = $('#' + targetId).offset().top;

        $('html, body').animate({
            scrollTop: targetOffset
        }, {
            duration: 1000, // You can adjust the duration as needed
            easing: 'easeInOutBack' // Use the easeOutBounce easing function
        });
    });
    $('#back-to-top').on('click', function () {
        console.log("???");
        $('html, body').animate({
            scrollTop: 0
        }, {
            duration: 1000, // You can adjust the duration as needed
        });
    });

    const checkboxes = $('#check-list input[type="checkbox"]');
    console.log(checkboxes);
    const gridItems = $('#project-parent > a');

    function updateVisibility() {
        // Get an array of selected filters using data-filter attribute
        const selectedFilters = checkboxes.filter(':checked');
        console.log('Selected Checkboxes:', selectedFilters);

        const filtersArray = selectedFilters.map(function () {
            return $(this).data('filter');
        }).get();
        console.log('Mapped Filters:', filtersArray);

        gridItems.each(function () {
            // Get all classes of the current grid item
            const itemClasses = $(this).attr('class').split(' ');

            // Check if no filters are selected or if any of the item's classes are in the selected filters
            if (filtersArray.length === 0 || itemClasses.some(c => filtersArray.includes(c))) {
                $(this).removeClass('hidden');
            } else {
                $(this).addClass('hidden');
            }
        });
    }

    updateVisibility();
    $(checkboxes).on('change', function () {
        updateVisibility();
    });
    $('#deselect-all').on('click', function () {
        checkboxes.prop('checked', false);
        updateVisibility(); // Call updateVisibility to apply changes
    });
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


//Code from https://animate.style/
const animateCSS = (element, animation, prefix = 'animate__') =>
    // We create a Promise and return it
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        const node = document.querySelector(element);

        node.classList.add(`${prefix}animated`, animationName);

        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event) {
            event.stopPropagation();
            node.classList.remove(`${prefix}animated`, animationName);
            resolve('Animation ended');
        }

        node.addEventListener('animationend', handleAnimationEnd, { once: true });
    });

function hide() {
    $("#artist-cv").css("visibility", "hidden")
}

function introAnim(placeHold) {
    hide();
    $(placeHold).css("visibility", "visible");
    animateCSS(placeHold, 'backInDown');
}

function outroAnim(placeHold) {
    animateCSS(placeHold, 'backOutDown').then((message) => {
        hide();
    });
}

$("#click-for-cv").on("click", function () {
    introAnim("#artist-cv");
});
$("#exit-cv").on("click", function () {
    outroAnim("#artist-cv");
});
