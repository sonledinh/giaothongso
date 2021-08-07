
$('.slide-hot-big').slick({
    autoplay: false,
    arrow: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1, 
    prevArrow: '',
    nextArrow: '', 
    speed: 500,
}); 

$('.slide-bar').slick({
    autoplay: false,
    arrow: false,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1, 
    prevArrow: '',
    nextArrow: '', 
    speed: 500,
}); 

$('.slide-numb').slick({
    autoplay: false,
    arrow: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1, 
    prevArrow: '',
    nextArrow: '', 
    speed: 500,
}); 

$('.slide-ads-story').slick({
    autoplay: false,
    arrow: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1, 
    prevArrow: '<a href="javascript:void(0)" class="prev"><i class="fa fa-angle-left"></i></a>',
    nextArrow: '<a href="javascript:void(0)" class="next"><i class="fa fa-angle-right"></i></a>',
    speed: 500,
}); 

$('.search-mobile a').click(function(event) {
    $(this).toggleClass('active');
    $('.form-search-mb').slideToggle(400);
});

jQuery(document).ready(function( $ ) {
  $("#menu").mmenu({
     "extensions": [
        "fx-menu-zoom"
     ],
     "counters": true
  });
}); 