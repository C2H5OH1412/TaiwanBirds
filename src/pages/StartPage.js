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
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/bg-start.png')" }}
    >
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
      
      <div className="z-10 text-center text-white p-8 bg-white/20 backdrop-blur-md rounded-2xl shadow-xl max-w-xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow">探索台灣野鳥的奇幻旅程</h1>
        <p className="text-lg mb-6">感受樹叢間的呼吸，聆聽牠們的歌聲，準備好了嗎？</p>
        <button
          onClick={handleStart}
          className="bg-green-600 hover:bg-green-500 transition px-6 py-3 text-lg rounded-full text-white shadow-md hover:shadow-xl animate-bounce"
        >
          開始探索
        </button>
      </div>
    </div>
  );
}
