
// ==UserScript==
// @name         PixelDrain Inline Video Player
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Auto-embed and play PixelDrain videos directly from their page
// @match        https://pixeldrain.com/u/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const match = window.location.href.match(/pixeldrain\.com\/u\/([a-zA-Z0-9]+)/);
    if (!match) return;

    const fileId = match[1];
    const directLink = `https://pixeldrain.com/api/file/${fileId}`;

    document.documentElement.innerHTML = `
        <html>
        <head>
            <title>PixelDrain Video Player</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background: #f0f2f5;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 20px;
                }
                h1 {
                    color: #333;
                }
                video {
                    margin-top: 30px;
                    width: 90%;
                    max-width: 720px;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
                }
            </style>
        </head>
        <body>
            <h1>PixelDrain Video Streamer</h1>
            <video controls autoplay>
                <source src="${directLink}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </body>
        </html>
    `;
})();
