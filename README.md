# PixelDrain Direct Video Streamer

![Version](https://img.shields.io/badge/version-1.0-blue)
![Manager](https://img.shields.io/badge/manager-Tampermonkey-green)

A lightweight Userscript that automatically detects PixelDrain video pages and replaces the default interface with a direct, autoplaying HTML5 video player.

## 🚀 Features

* **Auto-Embed:** Automatically matches `pixeldrain.com/u/*` URLs and activates only on valid file pages.
* **Direct API Streaming:** Extracts the file ID to construct a direct stream link (`/api/file/`), bypassing the standard viewer interface.
* **Clean UI:** Injects a clean, responsive video player (max-width 720px) centered on the screen.
* **Autoplay Enabled:** The video player is configured to `autoplay` immediately upon loading.

## 📥 Installation

You can install this script directly from this repository. You will need a userscript manager installed first.

### Step 1: Install a Userscript Manager
* [Tampermonkey](https://www.tampermonkey.net/) (Recommended for Chrome/Edge/Safari)
* [Violentmonkey](https://violentmonkey.github.io/) (Open Source, good for Firefox)

### Step 2: Install the Script
Click the button below to install the script automatically:

[![Install Script](https://img.shields.io/badge/Install-Click_Here-success?style=for-the-badge&logo=tampermonkey)](https://github.com/cthboss001/PixelDrain-Direct-Video-Streamer/raw/main/script.user.js)

*(If the button doesn't work, [click here](https://github.com/cthboss001/PixelDrain-Direct-Video-Streamer/raw/main/script.user.js) to view the raw code, and your extension should prompt you to install it.)*

## 🛠️ Manual Installation

If the direct link does not work:
1.  Click the **Userscript Manager** extension icon in your browser.
2.  Select **"Create a new script"**.
3.  Delete any default code in the editor.
4.  Copy the full content of `script.user.js` from this repository.
5.  Paste it into the editor and hit **Save** (Ctrl+S).

## 📖 How it Works

1.  The script runs exclusively on `https://pixeldrain.com/u/*`.
2.  It captures the alphanumeric **File ID** from the URL.
3.  It constructs a direct source link: `https://pixeldrain.com/api/file/{id}`.
4.  The script replaces the entire `document.documentElement.innerHTML` with a custom HTML structure containing a simple `<video>` tag.

## ⚠️ Disclaimer

This script is for educational purposes only. Please respect the terms of service of any website you visit.
