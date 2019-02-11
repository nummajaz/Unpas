// navbar
$('.page-scroll').on('click', function(){
    $('.navbar-collapse').collapse('hide');
}); 

// event pada saat link di klik
$('.page-scroll').on('click', function(e){
    // ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap elemen yang bersangkutan
    var elemenTujuan = $(tujuan);

    // pindahkan scroll
    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1050, 'easeInOutExpo');
    e.preventDefault();
});

// parallax
// about
$(window).on('load',function(){
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});

$(window).scroll(function(){
    var scrul = $(this).scrollTop();

    // jumbotron
    $('.jumbotron img').css({
        'transform':'translate(0px,'+ scrul/4+'%)'
    });

    $('.jumbotron h1').css({
        'transform':'translate(0px,'+ scrul/2+'%)'
    });

    $('.jumbotron p').css({
        'transform':'translate(0px,'+ scrul/1.2+'%)'
    });

    // portfolio
    if(scrul > $('.portfolio').offset().top-250){
        $('.portfolio .thumbnail').each(function(i){
            setTimeout(function(){                
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            }, 300 * (i+1));
        });
    }


});