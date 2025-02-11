function openTab(tabName) {
    // 隐藏所有标签页内容
    const contents = document.getElementsByClassName('tab-content');
    for (let content of contents) {
        content.classList.remove('active');
    }
    
    // 移除所有按钮的激活状态
    const buttons = document.getElementsByClassName('tab-button');
    for (let button of buttons) {
        button.classList.remove('active');
    }
    
    // 显示选中的标签页内容
    document.getElementById(tabName).classList.add('active');
    
    // 激活对应的按钮
    event.target.classList.add('active');
} 