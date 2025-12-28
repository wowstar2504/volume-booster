const slider = document.getElementById('volumeSlider');
const volumeValue = document.getElementById('volumeValue');
const resetBtn = document.getElementById('resetBtn');
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');
const darkModeToggle = document.getElementById('darkModeToggle');


chrome.storage.local.get(['darkMode'], (result) => {
  if (result.darkMode) {
    document.body.classList.add('dark-mode');
    darkModeToggle.classList.add('active');
  }
});


darkModeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-mode');
  darkModeToggle.classList.toggle('active');
  chrome.storage.local.set({ darkMode: isDark });
});


tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const targetTab = tab.getAttribute('data-tab');
    

    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    
    tabContents.forEach(content => {
      content.classList.remove('active');
      if (content.id === `${targetTab}-tab`) {
        content.classList.add('active');
      }
    });
  });
});


chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
  const tabId = tabs[0].id;
  chrome.storage.local.get([`volume_${tabId}`], (result) => {
    const savedVolume = result[`volume_${tabId}`] || 100;
    slider.value = savedVolume;
    volumeValue.textContent = savedVolume + '%';
  });
});

function sendMessageToTab(tabId, message) {
  chrome.tabs.get(tabId, (tab) => {
    if (chrome.runtime.lastError) {
      console.log('Cannot access tab');
      return;
    }
    
    if (tab.url.startsWith('chrome://') || 
        tab.url.startsWith('chrome-extension://') ||
        tab.url.startsWith('edge://') ||
        tab.url.startsWith('about:')) {
      return;
    }

    chrome.tabs.sendMessage(tabId, message, (response) => {
      if (chrome.runtime.lastError) {
        chrome.scripting.executeScript({
          target: { tabId: tabId },
          files: ['content.js']
        }, () => {
          if (!chrome.runtime.lastError) {
            setTimeout(() => {
              chrome.tabs.sendMessage(tabId, message, () => {
                if (chrome.runtime.lastError) {
                  console.log('Could not send message after injection');
                }
              });
            }, 100);
          }
        });
      }
    });
  });
}


slider.addEventListener('input', () => {
  const volume = parseInt(slider.value);
  volumeValue.textContent = volume + '%';
  
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    const tabId = tabs[0].id;
    
    chrome.storage.local.set({[`volume_${tabId}`]: volume});
    
    sendMessageToTab(tabId, {
      action: 'setVolume',
      volume: volume
    });
  });
});


resetBtn.addEventListener('click', () => {
  slider.value = 100;
  volumeValue.textContent = '100%';
  
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    const tabId = tabs[0].id;
    chrome.storage.local.set({[`volume_${tabId}`]: 100});
    sendMessageToTab(tabId, {
      action: 'setVolume',
      volume: 100
    });
  });
});


document.getElementById('supportLink').addEventListener('click', (e) => {
  e.preventDefault();
  chrome.tabs.create({ url: 'https://github.com/wowstar2504/volume-booster/issues' });
});

document.getElementById('donateLink').addEventListener('click', (e) => {
  e.preventDefault();
  chrome.tabs.create({ url: 'https://www.hostler.lol/donate.html?ref=volume-booster' });
});