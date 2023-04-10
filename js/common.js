$(function(){
    $('.toggle').click(function(){
        $('li').toggleClass('hidden');
        $('.toggle').toggleClass('close');
        
        // $('.menu').toggleClass('expanded');
        // $('.container').toggleClass('close');
    })
})