// 當頁面載入完成後執行以下程式碼
$(function() {

    // 設置click事件
    $('.accordion-header').click(function() {
  
      // 移除所有標題div的 active class，並將所有內容div slideUp
      $('.accordion-header').removeClass('active');
      $('.accordion-content').slideUp();
      
      // 若內容div沒有顯示；則標題div加active class，並內容div slideDown
      if (!$(this).next().is(':visible')) {
        $(this).addClass('active');
        $(this).next().slideDown();
      }
    });
    
    // 預設第一個折疊面板內容顯示
    $('.accordion-header').first().click();
});