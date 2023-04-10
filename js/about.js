// ============ Timeline ============
// Step1: 取得所有時序線中的content元素
const contents = document.querySelectorAll('.content');

// Step2: 設定 content 的動畫效果
contents.forEach((content, index) => {
  
  // Step2-1: 檢查content，如果沒有 h1 則直接返回，不加動畫
  if (content.querySelector('h1') == null) {
    return;
  }

  // Step2-2: 設定動畫效果
  content.style.opacity = 0;
  content.style.transform = 'translateX(-50px)';
  const delay = index * 200;
  content.style.transition = `all 0.5s ease ${delay}ms`;
  
  // Step3: 設置scroll事件監聽器
  window.addEventListener('scroll', () => {
    const top = content.getBoundingClientRect().top;
    const bottom = content.getBoundingClientRect().bottom;
    // console.log("top: " + top + "bottom: " + bottom + "window.innerHeight: " + window.innerHeight);

    // 當content元素出現在視窗，則套用動畫效果
    if (top >= 0 && bottom <= window.innerHeight) {
      content.style.opacity = 1;
      content.style.transform = 'translateX(0)';
    }
  });
});
