import './globals.css';

// src/app/layout.js
export const metadata = {
    title: '台灣鳥類互動網站',
    description: '由 tailwindcss 製作的水彩鳥類展示頁',
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="zh-Hant">
        <body>{children}</body>
      </html>
    );
  }
  