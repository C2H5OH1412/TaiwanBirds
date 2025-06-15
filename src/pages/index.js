// src/pages/StartPage.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function StartPage() {
  const router = useRouter();

  useEffect(() => {
    const bgMusic = new Audio('/voice/startbg.mp3');
    bgMusic.loop = true;
    bgMusic.volume = 0.3;
    bgMusic.play().catch(() => {});
    return () => {
      bgMusic.pause();
    };
  }, []);

  const handleStart = () => {
    router.push('/birds');
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative text-white"
      style={{ backgroundImage: "url('/images/bg-start.png')" }}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

      <div className="z-10 text-center p-8 bg-white/20 backdrop-blur-md rounded-2xl shadow-xl max-w-2xl animate-fade-in-soft flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4 drop-shadow">探索台灣野鳥的奇幻旅程</h1>
        <p className="text-lg mb-6 leading-relaxed">
          感受樹叢間的呼吸，聆聽牠們的歌聲，一起出發吧！
        </p>

        {/* 新增互動說明 */}
        <div className="text-base bg-white/30 rounded-lg p-4 mb-6 shadow backdrop-blur-sm w-full max-w-md text-center">
          <p className="font-semibold mb-1">探險指南：</p>
          <ul className="list-disc list-inside text-center text-sm leading-relaxed">
            <li>移動滑鼠，找找看有什麼特別的</li>
            <li>發現特別樹叢並點擊，看看裡面藏了什麼</li>
            <li>可以把聲音打開，聽聽聽自然的歌聲！</li>
          </ul>
        </div>

        <button
          onClick={handleStart}
          className="bg-[#afc890] text-white px-6 py-3 text-lg rounded-full shadow-md hover:shadow-xl transition-transform duration-500 focus:outline-none focus:ring-2 focus:ring-[#879b6f] animate-glow-pulse"
        >
          開始探索
        </button>
      </div>

      <style jsx>{`
        @keyframes glowPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 8px #afc890;
          }
          50% {
            transform: scale(1.1);
            box-shadow: 0 0 20px #879b6f;
          }
        }
        .animate-glow-pulse {
          animation: glowPulse 1.6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
