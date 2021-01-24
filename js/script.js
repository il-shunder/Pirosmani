$(document).ready(function () {
    $('.categories__slider').slick({
        arrows: true,
        dots: false,
        autoplay: false,
        draggable: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: null,
        nextArrow: $('.categories__arrow-next'),
        responsive: [
            {
              breakpoint: 950,
              settings: {
                slidesToShow: 4
              }
            },
            {
                breakpoint: 700,
                settings: {
                  slidesToShow: 3
                }
            },
            // {
            //     breakpoint: 550,
            //     settings: {
            //       slidesToShow: 2
            //     }
            // }
        ]
    });

    $("body").on('click', '[href*="#"]', function (e) {
    let fixed_offset = 100;//padding-top
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
});
    let hb = document.querySelector(".header__burger");

$('.header__burger').on("click", function () { 
    $("body").toggleClass("body__des");
    $('.shadow').toggleClass('shadow-active');
    $(this).toggleClass("header__burger-back");
    if(hb.classList.contains("header__burger-back")){
        $('.menu__icon').hide();
    }
    else{
        $('.menu__icon').show();
    }
});

$(document).on('click', function (e) {
    if(hb.closest(".header__burger-back")){
        if(!e.target.closest(".shadow__header") && !e.target.closest(".shadow__main") && !e.target.closest(".header__burger")){
            $("body").removeClass("body__des");
            $('.shadow').removeClass('shadow-active');
            $(".header__burger").removeClass("header__burger-back");
            $('.menu__icon').show();
        }
    };
});

// $('.header__link').click(function (event) {
//     $('.header__list').toggleClass(' list-active');
//     $('.menu__icon').toggleClass(' icon-active');
//     $('.header__nav').toggleClass(' nav-active');
//     $('body').removeClass(' body-activeee');
// });;

    let elem = document.querySelector(".shadow__btn0");

    $('.shadow__text-menu').on('click', function () {
        $(this).next().toggleClass("shadow__btn-rotate");
        if(elem.classList.contains("shadow__btn-rotate")){
            $(".shadow__block").show(100);
        }
        else{
            $(".shadow__block").hide(100);
        }
    });
    $(".shadow__btn0").on('click', function () {
        $(this).toggleClass("shadow__btn-rotate");
        if(elem.classList.contains("shadow__btn-rotate")){
            $(".shadow__block").show(100);
        }
        else{
            $(".shadow__block").hide(100);
        }
    });

    $('.nav__menu').on('click', function () {
        $(".nav__menu-active").toggleClass("active1820");
    });
    
    $('.header__prof').on('click', function () {
        $(".cabinet").toggleClass("active1820");
        $(".popup").toggleClass("popup-active");
        $("body").toggleClass("body__des");
    }); 
    
    $('.cabinet__close').on('click', function () {
        $(".cabinet").removeClass("active1820");
        $(".pasrec").removeClass("active1820");
        $(".regist").removeClass("active1820");
        $(".popup").removeClass("popup-active");
        $("body").removeClass("body__des");
        $(".otsuv").removeClass("active1820");
        $(".subscribe").removeClass("active1820");
    });


    let cabinet = document.querySelector(".cabinet");
    let actMenu = document.querySelector(".nav__menu-active");
    let pasrec = document.querySelector(".pasrec");
    let regist = document.querySelector(".regist");
    let otsuv = document.querySelector(".otsuv");
    let subscribe = document.querySelector(".subscribe");
    let bron = document.querySelector(".bron");

    $('.cabinet__ask').on('click', function () {
        $(".cabinet").removeClass("active1820");
        $(".pasrec").addClass("active1820");
    }); 
    $('.pasrec__subtext').on('click', function () {
        $(".pasrec").removeClass("active1820");
        $(".popup").removeClass("popup-active");
        $("body").removeClass("body__des");
    });
    $('.cabinet__subtext span').on('click', function () {
        $(".cabinet").removeClass("active1820");
        $(".regist").addClass("active1820");
    }); 
    $('.tovar-main3__btn').on('click', function () {
        $(".otsuv").addClass("active1820");
        $(".popup").toggleClass("popup-active");
        $("body").toggleClass("body__des");
    }); 
    $('.sub__btn').on('click', function () {
        $(".subscribe").toggleClass("active1820");
        $(".popup").toggleClass("popup-active");
        $("body").toggleClass("body__des");
    }); 
    
    $('.nav__item-bron').on('click', function () {
        $(".bron").toggleClass("active1820");
    });
    $('.bron__close').on('click', function () {
        $(".bron").removeClass("active1820");
    });

    $(document).on('click', function (e) {
        if(cabinet.closest(".active1820")){
            if(!e.target.closest(".active1820") && !e.target.closest(".header__prof")){
                $(".cabinet").removeClass("active1820");
                $(".popup").removeClass("popup-active");
                $("body").removeClass("body__des");
            }
        };
        if(actMenu.closest(".active1820")){
            if(!e.target.closest(".active1820") && !e.target.closest(".nav__menu")){
                $(".nav__menu-active").removeClass("active1820");
            }
        };
        if(pasrec.closest(".active1820")){
            if(!e.target.closest(".active1820") && !e.target.closest(".cabinet__ask")){
                $(".pasrec").removeClass("active1820");
                $(".popup").removeClass("popup-active");
                $("body").removeClass("body__des");
            }
        };
        if(regist.closest(".active1820")){
            if(!e.target.closest(".active1820") && !e.target.closest(".cabinet__subtext span")){
                $(".regist").removeClass("active1820");
                $(".popup").removeClass("popup-active");
                $("body").removeClass("body__des");
            }
        };
        if(subscribe.closest(".active1820")){
            if(!e.target.closest(".active1820") && !e.target.closest(".sub__btn")){
                $(".subscribe").removeClass("active1820");
                $(".popup").removeClass("popup-active");
                $("body").removeClass("body__des");
            }
        };
        if(bron.closest(".active1820")){
            if(!e.target.closest(".active1820") && !e.target.closest(".nav__item-bron")){
                $(".bron").removeClass("active1820");
            }
        };
        if(otsuv.closest(".active1820")){
            if(!e.target.closest(".active1820") && !e.target.closest(".tovar-main3__btn")){
                $(".otsuv").removeClass("active1820");
                $(".popup").removeClass("popup-active");
                $("body").removeClass("body__des");
            }
        };
        
    });

    
    
    $('.tovar-block2__title1').on('click', function () {
        $('.tovar-block2__title').removeClass("tovar-block2__title-active");
        $(this).addClass("tovar-block2__title-active");  
        $(".tovar-main2").hide();  
        $(".tovar-main3").hide();
        $(".tovar-main1").show();      
        $(".tovar-main1").addClass("active1820");
        $(".tovar-block2").removeClass("tovar-block2__bot60");
    });
    $('.tovar-block2__title2').on('click', function () {
        $('.tovar-block2__title').removeClass("tovar-block2__title-active");
        $(this).addClass("tovar-block2__title-active");  
        $(".tovar-main1").hide();  
        $(".tovar-main3").hide();
        $(".tovar-main2").show();         
        $(".tovar-main2").addClass("active1820");
        $(".tovar-block2").removeClass("tovar-block2__bot60");
    });
    $('.tovar-block2__title3').on('click', function () {
        $('.tovar-block2__title').removeClass("tovar-block2__title-active");
        $(this).addClass("tovar-block2__title-active");  
        $(".tovar-main2").hide();  
        $(".tovar-main1").hide();
        $(".tovar-main3").show();      
        $(".tovar-main3").addClass("active1820");
        $(".tovar-block2").addClass("tovar-block2__bot60");
    });

    $('.tovar-main3__slider').slick({
        arrows: true,
        dots: false,
        autoplay: false,
        draggable: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: null,
        nextArrow: $('.tovar-main3__next'),
        responsive: [
            {
              breakpoint: 655,
              settings: {
                slidesToShow: 1
              }
            }
        ]
    });
    
    $('.zakaz-block1__btn').on('click', function () {
        $('.zakaz-block1__btn').removeClass("zakaz-block1__btn-active");
        $(this).addClass("zakaz-block1__btn-active"); 
    });

    $('.zakaz-block1__btn2').on('click', function () {
        $(".zakaz-block2__body-rayon").hide(100);
        $(".zakaz-block2__body-adres").hide(100);
        $(".zakaz-block2__body-oplata").hide(100);
        $('.zakaz-block2__com').hide(100);
        $('.zakaz-block2__body-com').hide(100);
        $('.zakaz-block2__body-kogda').show(100);
    });
    $('.zakaz-block1__btn1').on('click', function () {
        $('.zakaz-block2__body-kogda').hide(100);
        $(".zakaz-block2__body-rayon").show(100);
        $(".zakaz-block2__body-adres").show(100);
        $(".zakaz-block2__body-oplata").show(100);
        $('.zakaz-block2__com').show(100);
    });

    $('.zakaz-block2__com').on('click', function () {
        $(this).hide(100);
        $(".zakaz-block2__body-com").show(100).addClass("active1820");
    });

    $('.categories__item').on('click', function () {
        $('.categories__item').removeClass("categories__item-active");
        $(this).addClass("categories__item-active");
    });

    $('.shop__pagination-item').on('click', function () {
        $('.shop__pagination-item').removeClass("shop__pagination-item-active");
        $(this).addClass("shop__pagination-item-active");
    }); 

    
}); 