$(function(){
    $('.toggle').click(function(){
        $('.menu').toggleClass('expanded');
        $('.container').toggleClass('close');
        $('.toggle').toggleClass('close');
        $('li').toggleClass('hidden');
    })
})