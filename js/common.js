$( document ).ready(function() {
    $('.sdUl').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    $('.common_slide').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
});

function display_1(){
    // var dis = document.getElementsByClassName("menubarDiv");
    $("#menubarDiv").slideToggle(500)
    // if(dis.style.display  =='none'){
    //     dis.style.display  ='block';
    // } else {
    //     dis.style.display  ='none';
    // }
}
