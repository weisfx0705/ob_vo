document.addEventListener('DOMContentLoaded', () => {
    // DOM 元素
    const goToIndexBtn = document.getElementById('go-to-index');
    
    // 返回主頁
    goToIndexBtn.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
}); 