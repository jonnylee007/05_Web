$(function(){
    $('.toggle').click(function(){
        $('li').toggleClass('hidden');
        $('.toggle').toggleClass('close');
        
        // $('.menu').toggleClass('expanded');
        // $('.container').toggleClass('close');
    })
})


// ============ 彩蛋 ============
// Step1: 設定想要的keycode指令串(richard)
let secretCode = [82,73,67,72,65,82,68]
// Step2: 設置陣列，紀錄按下的按鍵
let input = []

// Step3: 設置 keyup 事件監聽器
window.addEventListener('keyup', (e)=> {
    input.push(e.keyCode);
    
    if(input.join() === secretCode.join()) {
        const richard = document.querySelectorAll('img.richard');
        richard[0].classList.remove('hidden');
    }
})