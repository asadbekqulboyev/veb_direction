
import $ from 'jquery';

$(document).ready(function() {
    // Agar biror joyga click bo'lsa, dropdown yoki uning bolalari tashqarisida bo'lsa, dropdown yopiladi
    $(document).click(function(e) {
        if (!$(e.target).closest('.dropdown, .dropdown_child').length) {
            $('.dropdown_child').slideUp(); // Barcha dropdownlarni yopish
            $('.dropdown img').removeClass('rotate'); // Barcha rasmlarni default holatga keltirish
        }
    });

    // Dropdownni ochish va yopish
    $('.dropdown').click(function(){
        $(this).next('.dropdown_child').slideToggle(); // Dropdown bolalarini ochish/yopish
        $(this).children('img').toggleClass('rotate'); // Rasmlarni aylantirish
    });

    // Menyu elementlarini almashtirish
    $('.menu-item').on('click', function() {
        var slideIndex = $(this).data('slide'); // Tanlangan menyu elementi

        // Chap tarafdagi menyu item'ni aktiv qilish
        $('.menu-item').removeClass('active'); // Hamma elementlardan 'active' klassini olib tashlaymiz
        $(this).addClass('active'); // Tanlangan elementga 'active' klassini qo‘shamiz

        // O'ng tarafdagi slaydlarni almashtirish
        $('.slide').removeClass('active'); // Barcha slaydlardan 'active' klassini olib tashlaymiz
        $('#slide-' + slideIndex).addClass('active'); // Tanlangan slaydga 'active' klassini qo‘shamiz
    });

        // Menyu elementlarini almashtirish
        $('.slide_image_content img').fadeOut(0);
        $('.slide_image_content img:first').fadeIn(0);
        $('.button_item').on('click', function() {
            var slideIndex = $(this).data('target'); // Tanlangan menyu elementi
    
            // Chap tarafdagi menyu item'ni aktiv qilish
            $('.button_item').removeClass('active'); // Hamma elementlardan 'active' klassini olib tashlaymiz
            $(this).addClass('active'); // Tanlangan elementga 'active' klassini qo‘shamiz
    
            // O'ng tarafdagi slaydlarni almashtirish
            $('.slide_image_content img').fadeOut(0); // Barcha slaydlardan 'active' klassini olib tashlaymiz
            $('.slide_image_content img#slide-idx-'+slideIndex).fadeIn(200); // Tanlangan slaydga 'active' klassini qo‘shamiz
        });
    
        var swiper = new Swiper(".mySwiper", {});
});
