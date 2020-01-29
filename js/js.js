new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    gap: 100,
    breakpoints: {
        750: {
            perView: 1
        },
    }
}).mount()

new Glide('.glide', {
    750: {
        perView: 1
    }
})

$(function() {
    $.scrollIt({
        easing: 'ease', // the easing function for animation
        scrollTime: 1000, // how long (in ms) the animation takes
        topOffset: 0 // offste (in px) for fixed top navigation
    });
});

var rellax = new Rellax('.rellax', {
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
});