(function() {
  'use strict';
  
  if (window.volumeBoosterInitialized) {
    return;
  }
  window.volumeBoosterInitialized = true;

  let audioContext = null;
  let gainNode = null;
  let mediaElements = new Map();

  function initAudioContext() {
    if (!audioContext) {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
      gainNode = audioContext.createGain();
      gainNode.connect(audioContext.destination);
    }
  }

  function applyVolumeBoost(element, volumePercent) {
    if (!mediaElements.has(element)) {
      initAudioContext();
      
      try {
        const source = audioContext.createMediaElementSource(element);
        source.connect(gainNode);
        mediaElements.set(element, source);
      } catch (e) {

      }
    }
    
    if (gainNode) {
      const gainValue = volumePercent / 100;
      gainNode.gain.setValueAtTime(gainValue, audioContext.currentTime);
    }
  }

  function boostAllMedia(volumePercent) {

    const mediaElems = document.querySelectorAll('audio, video');
    
    mediaElems.forEach(element => {
      applyVolumeBoost(element, volumePercent);
    });
  }


  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'setVolume') {
      boostAllMedia(request.volume);
    }
  });


  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1) { 
          if (node.tagName === 'AUDIO' || node.tagName === 'VIDEO') {

            chrome.storage.local.get(null, (result) => {
              const volumeKeys = Object.keys(result).filter(key => key.startsWith('volume_'));
              if (volumeKeys.length > 0) {
                const volume = result[volumeKeys[0]] || 100;
                if (volume > 100) {
                  applyVolumeBoost(node, volume);
                }
              }
            });
          }
          

          const mediaChildren = node.querySelectorAll('audio, video');
          mediaChildren.forEach((media) => {
            chrome.storage.local.get(null, (result) => {
              const volumeKeys = Object.keys(result).filter(key => key.startsWith('volume_'));
              if (volumeKeys.length > 0) {
                const volume = result[volumeKeys[0]] || 100;
                if (volume > 100) {
                  applyVolumeBoost(media, volume);
                }
              }
            });
          });
        }
      });
    });
  });


  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });


  window.addEventListener('load', () => {
    chrome.storage.local.get(null, (result) => {
      const volumeKeys = Object.keys(result).filter(key => key.startsWith('volume_'));
      if (volumeKeys.length > 0) {
        const volume = result[volumeKeys[0]] || 100;
        if (volume > 100) {
          boostAllMedia(volume);
        }
      }
    });
  });


  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkForExistingMedia);
  } else {
    checkForExistingMedia();
  }

  function checkForExistingMedia() {
    chrome.storage.local.get(null, (result) => {
      const volumeKeys = Object.keys(result).filter(key => key.startsWith('volume_'));
      if (volumeKeys.length > 0) {
        const volume = result[volumeKeys[0]] || 100;
        if (volume > 100) {
          boostAllMedia(volume);
        }
      }
    });
  }
})();