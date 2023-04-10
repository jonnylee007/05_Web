// 取得所有時序線中的content元素
const contents = document.querySelectorAll('.timelineWrap .content');

// 設定每個content元素的動畫效果
contents.forEach((content, index) => {
  // 檢查content元素中是否有h1和p元素，如果沒有就直接返回
  const hasHeading = content.querySelector('h1') !== null;
  const hasParagraph = content.querySelector('p') !== null;
  
  if (!hasHeading || !hasParagraph) {
    return;
  }
  
  // 設定延遲時間
  const delay = index * 400;
  
  // 設定動畫效果
  content.style.opacity = 0;
  content.style.transform = 'translateX(-50px)';
  content.style.transition = `all 0.5s ease ${delay}ms`;
  
  // 偵聽視窗滾動事件，檢查content元素是否出現在視窗中
  window.addEventListener('scroll', () => {
    const top = content.getBoundingClientRect().top;
    const bottom = content.getBoundingClientRect().bottom;
    const isVisible = (top >= 0 && bottom <= window.innerHeight);
    
    // 如果content元素出現在視窗中，就套用動畫效果
    if (isVisible) {
      content.style.opacity = 1;
      content.style.transform = 'translateX(0)';
    }
  });
});
