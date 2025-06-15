// src/pages/birds.js
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function BirdsPage() {
  const [hoveredBranch, setHoveredBranch] = useState(null);
  const [clickedBranches, setClickedBranches] = useState({});
  const [temporaryBackground, setTemporaryBackground] = useState(null);
  const [infoVisible, setInfoVisible] = useState(null);

  useEffect(() => {
    const bgMusic = new Audio('/voice/bgmusic.mp3');
    bgMusic.loop = true;
    bgMusic.volume = 0.5;
    bgMusic.play().catch(() => {});
    return () => {
      bgMusic.pause();
    };
  }, []);

  const backgroundMap = {
    branch1: '/images/bg%201.png',
    branch2: '/images/bg%202.png',
    branch3: '/images/bg%203.png',
  };

  const videoMap = {
    branch1: '/images/綠繡眼.webm',
    branch2: '/images/台灣藍鵲.webm',
    branch3: '/images/栗背林鴝.webm',
  };

  const audioMap = {
    branch1: '/voice/綠繡眼.mp3',
    branch2: '/voice/台灣藍鵲.mp3',
    branch3: '/voice/栗背林鴝.mp3',
  };

  const birdInfo = {
    branch1: {
      name: '綠繡眼',
      habits: '體型小巧、慣於群居，叫聲清脆嘹亮。',
      size: '約11公分，眼圈有白色羽毛。',
      distribution: '廣泛分布於台灣低海拔林地、郊區。'
    },
    branch2: {
      name: '台灣藍鵲',
      habits: '性情活潑，好奇心強，常成群出沒。',
      size: '體長約65公分，尾羽特長。',
      distribution: '台灣特有種，棲息於中低海拔山區。'
    },
    branch3: {
      name: '栗背林鴝',
      habits: '鳴聲清脆，喜歡棲息於林蔭。',
      size: '體長約15公分，背部栗色明顯。',
      distribution: '見於台灣中高海拔山區，是候鳥。'
    }
  };

  const timeoutDurations = {
    branch1: 5000,
    branch2: 6000,
    branch3: 7000,
  };

  const backgroundImage = temporaryBackground
    ? temporaryBackground
    : hoveredBranch && backgroundMap[hoveredBranch]
    ? backgroundMap[hoveredBranch]
    : '/images/bg.png';

  const handleBranchClick = (branchKey) => {
    setClickedBranches((prev) => ({ ...prev, [branchKey]: true }));
    setTemporaryBackground(backgroundMap[branchKey]);
    setInfoVisible(branchKey);

    const audio = new Audio(audioMap[branchKey]);
    audio.play();

    setTimeout(() => {
      setClickedBranches((prev) => ({ ...prev, [branchKey]: false }));
      setTemporaryBackground(null);
      setInfoVisible(null);
    }, timeoutDurations[branchKey]);
  };

  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat transition-all duration-700"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="relative w-full min-h-screen z-10">
        {/* branch1 */}
        <div
          className="absolute top-0 left-0 flex flex-col items-center"
          onMouseEnter={() => setHoveredBranch('branch1')}
          onMouseLeave={() => setHoveredBranch(null)}
          onClick={() => handleBranchClick('branch1')}
        >
          <div className={`transition-opacity duration-700 ${clickedBranches['branch1'] ? 'opacity-0' : 'opacity-100'}`}>
            <Image
              src="/images/branch1.png"
              alt="branch1"
              width={300}
              height={180}
              className="transition-transform duration-300 hover:scale-110 cursor-pointer"
            />
          </div>
          <div className={`transition-opacity duration-700 ${clickedBranches['branch1'] ? 'opacity-100' : 'opacity-0'} absolute top-0 left-0`}>
            {clickedBranches['branch1'] && (
              <video
                src={videoMap['branch1']}
                autoPlay
                muted
                className="w-40 rounded-lg shadow-lg"
              />
            )}
          </div>
        </div>

        {/* branch2 */}
        <div
          className="absolute top-0 right-0 flex flex-col items-center"
          onMouseEnter={() => setHoveredBranch('branch2')}
          onMouseLeave={() => setHoveredBranch(null)}
          onClick={() => handleBranchClick('branch2')}
        >
          <div className={`transition-opacity duration-700 ${clickedBranches['branch2'] ? 'opacity-0' : 'opacity-100'}`}>
            <Image
              src="/images/branch2.png"
              alt="branch2"
              width={500}
              height={240}
              className="transition-transform duration-300 hover:scale-110 cursor-pointer"
            />
          </div>
          <div className={`transition-opacity duration-700 ${clickedBranches['branch2'] ? 'opacity-100' : 'opacity-0'} absolute top-0 right-0`}>
            {clickedBranches['branch2'] && (
              <video
                src={videoMap['branch2']}
                autoPlay
                muted
                className="w-60 rounded-lg shadow-lg" // 放大這裡
              />
            )}
          </div>
        </div>

        {/* branch3 */}
        <div
          className="absolute top-[55%] left-[61.5%] flex flex-col items-center z-20"
          onMouseEnter={() => setHoveredBranch('branch3')}
          onMouseLeave={() => setHoveredBranch(null)}
          onClick={() => handleBranchClick('branch3')}
        >
          <div className={`transition-opacity duration-700 ${clickedBranches['branch3'] ? 'opacity-0' : 'opacity-100'}`}>
            <Image
              src="/images/branch3.png"
              alt="branch3"
              width={285}
              height={300}
              className="transition-transform duration-300 hover:scale-110 cursor-pointer"
            />
          </div>
          <div className={`transition-opacity duration-700 ${clickedBranches['branch3'] ? 'opacity-100' : 'opacity-0'} absolute top-0 left-0`}>
            {clickedBranches['branch3'] && (
              <video
                src={videoMap['branch3']}
                autoPlay
                muted
                className="w-40 rounded-lg shadow-lg"
              />
            )}
          </div>
        </div>
      </div>

      {/* 鳥類資訊浮窗 */}
      {infoVisible && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl p-6 text-white shadow-2xl w-[90%] max-w-xl animate-fade-in text-center">
          <h2 className="text-2xl font-bold mb-4 drop-shadow-lg">{birdInfo[infoVisible].name}</h2>
          <ul className="text-lg leading-relaxed space-y-2 list-disc list-inside drop-shadow-md">
            <li><strong>習性：</strong>{birdInfo[infoVisible].habits}</li>
            <li><strong>體型：</strong>{birdInfo[infoVisible].size}</li>
            <li><strong>分布：</strong>{birdInfo[infoVisible].distribution}</li>
          </ul>
        </div>
      )}
    </div>
  );
}
