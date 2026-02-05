import reactLogo from './assets/react.svg'
import envelope from './assets/envelope.png'
import viteLogo from '/vite.svg'

import { useState, useRef } from 'react'
import popSound from './sfx/pop.mp3'

function App() {

  const valentineDate = new Date(2026, 1, 14); // February 14, 2026
  const letters = [
    { id: 1, date: new Date(2026, 1, 6), openMessage: "Read it, lovelove!"},
    { id: 2, date: new Date(2026, 1, 10), openMessage: "Another one babyyy!"},
    { id: 3, date: new Date(2026, 1, 11), openMessage: "Keep going, love!"},
    { id: 4, date: new Date(2026, 1, 12), openMessage: "Almost there, my love!"},
    { id: 5, date: new Date(2026, 1, 13), openMessage: "One more day, baby!"},
    { id: 6, date: new Date(2026, 1, 14), openMessage:  "HAPPY VALENTINE'S DAY, MY PRETTY BABY!"}, 
  ]

  const [currentDate, setCurrentDate] = useState(new Date());
  const [soundEnabled, setSoundEnabled] = useState(false); // user must enable to satisfy browser policies
  const audioCtxRef = useRef(null);
  const audioBufferRef = useRef(null);
  const audioRef = useRef(null);

  const addDays = (date, days) => {
    const result = new Date(date); // Create a copy to avoid mutation
    result.setDate(result.getDate() + days);
    return result;
  };


  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", { 
      month: 'long', 
      day: 'numeric' 
    });
  }

  // Enable audio (required by browser autoplay policies) and preload into AudioBuffer for low-latency playback
  const enableSound = async () => {
    try {
      const ctx = audioCtxRef.current || (audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)());
      // fetch and decode the file into an AudioBuffer
      const resp = await fetch(popSound);
      const arr = await resp.arrayBuffer();
      audioBufferRef.current = await ctx.decodeAudioData(arr.slice(0));
      // resume AudioContext if suspended
      if (ctx.state === 'suspended') await ctx.resume();
      setSoundEnabled(true);
    } catch (e) {
      // fallback to using HTMLAudio element if decoding failed
      setSoundEnabled(true);
    }
  };

  // Play using decoded AudioBuffer when available for lowest latency, otherwise fallback to HTMLAudio
  const playPop = () => {
    try {
      const ctx = audioCtxRef.current;
      if (ctx && audioBufferRef.current) {
        const src = ctx.createBufferSource();
        src.buffer = audioBufferRef.current;
        const gain = ctx.createGain();
        gain.gain.value = 0.85; // adjust volume if needed
        src.connect(gain).connect(ctx.destination);
        src.start(0);
        return;
      }
    } catch (e) {
      // continue to fallback
    }

    try {
      if (!audioRef.current) audioRef.current = new Audio(popSound);
      const a = audioRef.current;
      a.currentTime = 0;
      a.play().catch(() => {});
    } catch (e) {
      // ignore
    }
  };

  return (
    <>
      <div className='w-full h-screen bg-radial-[at_50%_1%] from-[#ffffff] to-[#fdacc3] to-75% p-11'>
        <h1 className='font-valentine text-7xl text-center text-[#651515] drop-shadow-2xl'>Countdown to Valentine's Day!</h1>
        {/* Sound unlock control (required once by browsers) */}
        {!soundEnabled && (
          <button
            onClick={enableSound}
            className='fixed bottom-6 right-6 z-50 bg-white/90 text-sm text-[#651515] px-4 py-2 rounded-lg shadow-lg hover:bg-white'
            aria-label='Enable sound'
          >
            Enable sound 🔊
          </button>
        )}
        {/* <img src={envelope} alt="envelope" className='drop-shadow-2xl'/> */}
        <div className='grid grid-cols-3 gap-x-32 gap-y-16 mt-12 justify-items-center w-[75%] mx-auto'>
          {letters.map((letter) => {
            if (letter.date.getTime() === valentineDate.getTime() && currentDate.getTime() >= valentineDate.getTime()) {
              return (
                <div>
                  <img src={envelope} alt="envelope" className='drop-shadow-2xl w-56 animate-float hover:scale-110 transition-all cursor-pointer' onMouseEnter={playPop} onFocus={playPop} />
                  <p className='text-center text-lg text-[#dc0707] mt-2 font-sans font-bold animate-bounce leading-5'>{letter.openMessage}</p>
                </div>
              )
            }

            else if (currentDate.getTime() >= letter.date.getTime()) {
              return <div>
                <img src={envelope} alt="envelope" className='drop-shadow-2xl w-56 animate-float hover:scale-110 transition-all cursor-pointer' onMouseEnter={playPop} onFocus={playPop} />
                <p className='text-center text-lg text-[#651515] mt-1 font-sans font-bold'>{letter.openMessage}</p>
              </div>
            }

            else {
              return <div>
                <img src={envelope} alt="envelope" className='drop-shadow-2xl w-56 animate-float hover:scale-110 transition-all cursor-pointer grayscale' onMouseEnter={playPop} onFocus={playPop} />
                <p className='text-center text-lg text-[#651515] mt-1 font-sans font-bold'>{formatDate(letter.date)}</p>
              </div>
            }
          })}


        </div>
      </div>

    </>
  ) 
}

export default App
