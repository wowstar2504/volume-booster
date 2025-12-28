# 🔊 Volume Booster

A powerful Chrome extension that boosts audio volume up to 650% on any webpage!

![Volume Booster](https://img.shields.io/badge/version-1.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## ✨ Features

- 🎚️ **Boost volume up to 650%** - Perfect for quiet videos and audio
- 🎯 **10% increments** - Precise control over volume levels
- 💾 **Per-tab settings** - Each tab remembers its own volume level
- 🌙 **Dark mode** - Easy on the eyes
- ⚡ **Works on all sites** - YouTube, Netflix, Spotify, and more
- 🎨 **Beautiful UI** - Modern, clean interface

## 📦 Installation

### Method 1: Install from Source

1. **Download or clone this repository**
   ```bash
   git clone https://github.com/wowstar2504/volume-booster.git
   ```

2. **Open Chrome and go to Extensions**
   - Navigate to `chrome://extensions/`
   - Or click the three dots menu → More tools → Extensions

3. **Enable Developer Mode**
   - Toggle the "Developer mode" switch in the top right corner

4. **Load the extension**
   - Click "Load unpacked"
   - Select the `volume-booster` folder

5. **Pin the extension** (optional)
   - Click the puzzle piece icon in Chrome toolbar
   - Find "Volume Booster" and click the pin icon

## 🚀 How to Use

1. **Click the extension icon** in your browser toolbar
2. **Adjust the slider** to increase volume (100% - 650%)
3. **Click Reset** to return to normal volume
4. Volume settings are saved per tab automatically!

### Tips
- Start with small increases (110-150%) to avoid distortion
- Higher volumes may cause audio distortion on some sites
- Perfect for quiet videos, podcasts, and music

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
- May cause distortion at very high levels (500%+)
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
- Report bugs
- Suggest new features
- Submit pull requests

## 📝 License

MIT License - feel free to use and modify!

## 💖 Support

If you find this extension helpful, consider:
- ⭐ Starring this repository
- 🐛 Reporting bugs
- 💡 Suggesting features
- ☕ [Buying me a coffee](https://github.com/sponsors/wowstar2504)

## 📧 Contact

Have questions or suggestions? Open an issue on GitHub!

---

Made with ❤️ for people who need louder audio