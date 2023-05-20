// script.js

function switchTab(tab) {
    const tabs = document.getElementsByClassName('tab');
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('show');
    }
  
    const container = document.getElementById(tab + 'Container');
    container.classList.add('show');
  }
  