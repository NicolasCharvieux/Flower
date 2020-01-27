new Glide('.glide').mount()

$(function() {
    $.scrollIt({
        easing: 'ease', // the easing function for animation
        scrollTime: 1000, // how long (in ms) the animation takes
        topOffset: 0 // offste (in px) for fixed top navigation
    });
});