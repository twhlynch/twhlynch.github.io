$( document ).ready(function() {
    /* pointer */
    $("a").hover(function(){
        document.getElementsByClassName('cursor-outer')[0].classList.add('cursor-outer-hover');
        document.getElementsByClassName('cursor-inner')[0].classList.add('cursor-inner-hover');
    },function(){
        document.getElementsByClassName('cursor-outer')[0].classList.remove('cursor-outer-hover');
        document.getElementsByClassName('cursor-inner')[0].classList.remove('cursor-inner-hover');
    });
    $(".mousehover").hover(function(){
        document.getElementsByClassName('cursor-outer')[0].classList.add('cursor-outer-hover');
        document.getElementsByClassName('cursor-inner')[0].classList.add('cursor-inner-hover');
    },function(){
        document.getElementsByClassName('cursor-outer')[0].classList.remove('cursor-outer-hover');
        document.getElementsByClassName('cursor-inner')[0].classList.remove('cursor-inner-hover');
    });
    const inner = $('.cursor-inner')
        , outer = $('.cursor-outer');
    $('*').mousemove( function(s) {
        outer.css("transform", "translate(" + s.clientX + "px, " + s.clientY + "px)"),
        inner.css("transform", "translate(" + s.clientX + "px, " + s.clientY + "px)")
    });

    /* socials */
    $("#github").css("transform", "translate(0)");
    $("#discord").css("transform", "translate(0)");
    $("#linkedin").css("transform", "translate(0)");
    $("#github").css("transform", "rotate(360deg)");
    $("#discord").css("transform", "rotate(360deg)");
    $("#linkedin").css("transform", "rotate(360deg)");


});