// ============ mouse trailer ============
// Step1: 取得trailer
const trailer = document.getElementById("trailer");

// Step2: 設置mousemove事件
window.onmousemove = e => {
    // Step2-1: 取得滑鼠當下的x座標和y座標
    const x = e.clientX - trailer.offsetWidth / 2;
    const y = e.clientY - trailer.offsetHeight / 2;

    // Step2-2: 設置trailer動畫
    const keyframes = {
        transform: `translate(${x}px, ${y}px)`
    }
    trailer.animate(keyframes, {
        duration: 800,
        fill: "forwards"
    })
}


// ============ RWD_menu ============
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

const richard = document.querySelectorAll('img.richard');

// Step3: 設置 keyup 事件監聽器
window.addEventListener('keyup', (e)=> {
    input.push(e.keyCode);
    
    if(input.join() === secretCode.join()) {
        // const richard = document.querySelectorAll('img.richard');
        richard[0].classList.remove('hidden');
    }
})

window.onclick = e => {
    richard[0].classList.add('hidden');
}