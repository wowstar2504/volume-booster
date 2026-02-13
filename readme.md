# 🔊 Volume Booster

> [!CAUTION]
> This extension is **not** on the Chrome Web Store, so it may give you warnings. Thank you for your understanding.

A powerful Chromium and Firefox extension that boosts audio volume up to 650% on any webpage!

![Volume Booster](https://img.shields.io/badge/version-1.2-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## ⚠️ To-do
- [x] Add Chromium support.
- [x] Add Firefox support.
- [ ] Add Firefox Mobile support.
- [ ] Add Safari macOS/iOS support.


## ✨ Features

|          Feature          |                       Description                       |
| ------------------------- | ------------------------------------------------------- |
| `Boost volume up to 650%` | Perfect for quiet videos and audio.                     |
| `Per-tab settings`        | Each tab remembers its own volume level.                |
| `Dark and Light mode`     | There's both dark and light mode.                       |
| `Works on all sites`      | Works on: YouTube, Netflix, Spotify, and most websites. |
| `Beautiful UI`            | Modern and clean interface.                             |

## 📦 Installation

### Method 1: Install from releases

1. **Download from the releases page**
   
   [Link here](https://github.com/wowstar2504/volume-booster/releases/)

2. **Open your browser and go to Extensons / Addons**

   <details>
      <summary>Click here</summary>

         If you are using; Google Chromium, Google Chrome, Microsoft Edge, Opera/Opera GX, go to "chrome://extensions".
         If you are using Mozilla Firefox, go to "about:addons".

   </details>

3. **Enable Developer Mode**
   - Toggle the "Developer mode" switch in the top right corner

4. **Unzip the extension**
   - Find the file "Chromium_vX.X.zip/Firefox_vX.X.zip, right click, and choose ``Extract All``

5. **Load the extension**
   - Click "Load unpacked"
   - Find the `Chromium/Firefox` folder and click it.

6. **Pin the extension** (optional)
   - Click the puzzle piece icon in Browser toolbar
   - Find "Volume Booster" and click the pin icon

7. **That's it! You're done.**
    - Now you can use the extension!


### Method 2: Install from Source

1. **Download or clone this repository**
   ```bash
   git clone https://github.com/wowstar2504/volume-booster.git
   ```

2. **Open your browser and go to Extensions**
   <details>
      <summary>Click here</summary>

         If you are using; Google Chromium, Google Chrome, Microsoft Edge, Opera/Opera GX, go to "chrome://extensions".
         If you are using Mozilla Firefox, go to "about:addons".

</details>

3. **Enable Developer Mode**
   - Toggle the "Developer mode" switch in the top right corner

4. **Load the extension**
   - Click "Load unpacked"
   - Select the `volume-booster` folder

5. **Pin the extension** (optional)
   - Click the puzzle piece icon in Browser toolbar
   - Find "Volume Booster" and click the pin icon

6. **That's it! You're done.**
    - Now you can try the extension!


## 🚀 How to Use

1. **Click the extension icon** in your browser toolbar
2. **Adjust the slider** to increase volume (100% - 650%)
3. **Click Reset** to return to normal volume
4. **Volume settings** are saved per tab automatically!

### Tips
- Start with small increases (110-150%) to avoid distortion.
- Higher volumes may cause audio distortion on some sites.
- Perfect for quiet videos, podcasts, and music.

## ⚙️ Settings

Access the Settings tab to customize:
- 🌙 **Dark Mode** - Toggle between light and dark themes

## 🛠️ File Structure

```
volume-booster/
├── manifest.json
├── popup.html
├── popup.js
├── content.js
├── icons/
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── README.md
```

## 🔧 Technical Details

- Uses the Web Audio API for audio processing
- Creates a gain node to amplify audio output
- Automatically detects all audio/video elements on pages
- Works with dynamically loaded media

## ⚠️ Limitations

- Cannot boost volume on `chrome://` pages or browser internal pages
- Very likely to cause distortion at very high levels (500%+)
- Requires page refresh if extension is installed while page is already loaded

## 🐛 Troubleshooting

**Extension not working on a page?**
- Refresh the page after installing the extension
- Make sure the page has audio/video elements
- Check that the page isn't a restricted chrome:// page

**No sound boost?**
- Try adjusting the slider again
- Make sure your system volume isn't muted
- Refresh the page and try again

**Audio distortion?**
- Lower the volume boost level
- Some audio sources have limited quality at high volumes

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Suggest new features
- Submit pull requests

## 💖 Support

If you find this extension helpful, consider:
- ⭐ Starring this repository
- 🐛 Reporting bugs

## 📧 Contact

Contact me at [hi@22291111.xyz](mailto:hi@22291111.xyz).
