import $ from 'jquery';

$(document).ready(function() {
    $(document).click(function(e) {
        // Agar click dropdown yoki uning bolalariga bo'lmasa
        if (!$(e.target).closest('.dropdown, .dropdown_child').length) {
            $('.dropdown_child').slideUp(); // Barcha dropdownlarni yopish
            $('.dropdown img').removeClass('rotate'); // Barcha rasmlarni default holatga keltirish
        }
    });
$('.dropdown').click(function(){
    // $('.dropdown_child').slideUp()
    $(this).next('.dropdown_child').slideToggle()
    
    $(this).children('img').toggleClass('rotate')
})

$('.menu-item').on('click', function() {
    var slideIndex = $(this).data('slide'); // Qaysi menyu elementi tanlanganligini olamiz

    // Chap tarafdagi menyu item'ni aktiv qilish
    $('.menu-item').removeClass('active'); // Hamma elementlardan 'active' klassini olib tashlaymiz
    $(this).addClass('active'); // Tanlangan elementga 'active' klassini qo‘shamiz

    // O'ng tarafdagi slaydlarni almashtirish
    $('.slide').removeClass('active'); // Barcha slaydlardan 'active' klassini olib tashlaymiz
    $('#slide-' + slideIndex).addClass('active'); // Tanlangan slaydga 'active' klassini qo‘shamiz
  });
});
