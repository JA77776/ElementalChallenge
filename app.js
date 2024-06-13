// $(document).ready(function(){
//     $('.next').on('click', function(){
//         let currentImg = $('.active');
//         let nextImg = currentImg.next();

//         if(!nextImg.length) {
//             nextImg = $('currentImg ').first();
//         }

//         currentImg.removeClass('active').css('z-index', -10);
//         nextImg.addClass('active').css('z-index', 10);
//     });

//     $('.prev').on('click', function(){
//         let currentImg = $('.active');
//         let prevImg = currentImg.prev();
        
//         if(prevImg.length) {
//             currentImg.removeClass('active').css('z-index', -10);
//             prevImg.addClass('active').css('z-index', 10);
//         }
//     });
// });

$(document).ready(function(){
    $('.next').on('click', function(){
        let currentImg = $('.slider-inner .active');
        let nextImg = currentImg.next();

        if(!nextImg.length) {
            nextImg = $('.slider-inner img').first();
        }

        currentImg.removeClass('active').css('z-index', -10);
        nextImg.addClass('active').css('z-index', 10);
    });

    // $('.prev').on('click', function(){
    //     let currentImg = $('.active');
    //     let prevImg = currentImg.prev();

    //     if(!prevImg.length) {
    //         prevImg = $('.carousel img').last();
    //     }

    //     currentImg.removeClass('active').css('z-index', -10);
    //     prevImg.addClass('active').css('z-index', 10);
    // });
}); 