// 导航栏滚动效果
document.addEventListener('DOMContentLoaded', function() {
  let lastScroll = 0;
  const masthead = document.querySelector('.masthead');
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
      masthead.classList.remove('is-hidden');
      return;
    }
    
    if (currentScroll > lastScroll && !masthead.classList.contains('is-hidden')) {
      // 向下滚动
      masthead.classList.add('is-hidden');
    } else if (currentScroll < lastScroll && masthead.classList.contains('is-hidden')) {
      // 向上滚动
      masthead.classList.remove('is-hidden');
    }
    
    lastScroll = currentScroll;
  });
}); 