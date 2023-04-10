// ============ header slider ============
// Step1: 取得所有 img 和 slider-dot
const slidesArr = document.querySelectorAll('.slider img');
const dotsArr = document.querySelectorAll('.slider-dot');

// Step2: 切換圖片
// Step2-1: 設定自動輪播的時間間隔為 5秒
const slideInterval = setInterval(nextSlide, 5000);

// Step2-2: 設定切換到下一張圖片的函式
let currentSlideIndex = 0;

function nextSlide() {
    // 隱藏當前顯示的圖片和dot
    slidesArr[currentSlideIndex].classList.remove('active');
    dotsArr[currentSlideIndex].classList.remove('active');
    
    // 調整Index(用餘數概念，讓最後一張圖片的index回歸0)
    currentSlideIndex = (currentSlideIndex + 1) % slidesArr.length;
    
    // 顯示下一張圖片和dot
    slidesArr[currentSlideIndex].classList.add('active');
    dotsArr[currentSlideIndex].classList.add('active');
}

// Step3: 為每個dot元素設置點擊事件監聽器
dotsArr.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        // 隱藏當前顯示的圖片和dot
        slidesArr[currentSlideIndex].classList.remove('active');
        dotsArr[currentSlideIndex].classList.remove('active');
        
        // 調整Index
        currentSlideIndex = index;
        
        // 顯示所選圖片和dot
        slidesArr[currentSlideIndex].classList.add('active');
        dotsArr[currentSlideIndex].classList.add('active');
        
        // 重置自動輪播的時間間隔
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    });
});



// ============ section ============
// Step1: 取得 sectionSmallWrap
const container = document.querySelector('.sectionSmallWrap');
let isDown = false;
let startX;
let scrollLeft;

// Step2: 
container.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
});

container.addEventListener('mouseleave', () => {
    isDown = false;
});
container.addEventListener('mouseup', () => {
    isDown = false;
});
