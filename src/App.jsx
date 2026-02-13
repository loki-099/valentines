import reactLogo from './assets/react.svg'
import envelope from './assets/envelope.png'
import viteLogo from '/vite.svg'

import p1 from '/p1.jpg'
import p2 from '/p2.jpg'
import p3 from '/p3.jpg'
import p4 from '/p4.jpg'
import p5 from '/p5.jpg'
import p6 from '/p6.jpg'
import p7 from '/p7.jpg'
import p8 from '/p8.jpg'

import { useState, useRef } from 'react'
import popSound from './sfx/pop.mp3'
import Popup from './components/Popup'

function App() {
  const valentineDate = new Date(2026, 1, 14) // February 14, 2026
  const letters = [
    {
      id: 1,
      date: new Date(2026, 1, 9),
      openMessage: 'Read it, lovelove!',
      message:
        "My dear lovelove,\n\nHi lovelove! This is my surprise for you. Well hindi na siya na-present sayo in a surprising way. Let's just say na lang na ito yung gift ko sayo po! This website is a countdown for your most favorite holiday in a year, Valentine's Day! Because you are a lovely girlie! I will put my messages here para sayo po since you love words of affirmation kaya naman there are a total of 6 letters for you! I just want you to know po na mahal na mahal kita. Despite of my busy days, I still yearn for your presence. Lalo na ngayon, isisingit ko pa rin ito because I love you that much! Para din naman po ito sa atin. I hope din po na I am giving you love that you want and need. Don't worry if you find this letter bitin, there are still more coming!\n\nAt dahil diyan po, will you be my valentine, my pretty baby?\n\nYour love,\nLuis💌",
    },
    {
      id: 2,
      date: new Date(2026, 1, 10),
      openMessage: 'Another one babyyy!',
      message:
        "My dear baby,\n\nHi baby! This is the 2nd letter na! So far sana nagustuhan mo po itong handog ko para sayo! Now, let's talk why I love you. This is one of the many reasons. Well, as I have said, you always made me do better things. You accepted me for who I am. Hindi mo 'ko hinusgahan, kundi inintindi mo pa ako. You helped me along the way. Doon pa lang sobrang swerte ko na sayo. I always wish a relationship na makikita kong mag-grow ako and ang partner ko. And so far, we are growing together in this relationship lovelove. Wala na akong ibang hihilingin na makakasama kundi ikaw lang lovelove. We're still immature sa ngayon, and I can't wait na mag-mature tayo together in our relationship lovelove. Imagine, it's so messy kapag nag-aaway tayo ngayon, pero I know na malalagpasan rin natin ito. We'll handle our arguments maturely and mararamdaman pa rin natin na mahal nating ang isa't-isa.\n\nI love you because you made me a better person everyday, for myself, for you, for us, and for our future family! I loveeee youuuu sooo muchieeee!\n\nYour baby,\nLuis",
    },
    {
      id: 3,
      date: new Date(2026, 1, 11),
      openMessage: 'Keep going, love!',
      message:
        'Dear love,\n\nNasabi ko na bang ang swerte ko sayo? Kasi kung hindi pa, sasabihin ko ulit. Sobrang swerte ko sa pagmamahal na binibigay mo po sa akin. Pagmamahal na walang sukatan, pagmamahal na walang binabasehan. Pagmamahal na may pagtitiwala. Siguro kung ordinaryong tao ka lang, matagal mo na akong iniwan. I mean, may mga times man pero buti na lang at hindi mo po tinuloy HAHAHAHA. Kasi grabe yung tiwala na binibigay mo sa akin. Alam kong hindi mo pa ako pinagkakatiwalaan nang lubusan. Hindi naman yan ang tinutukoy ko. Yung tiwala na magbabago ako at naniniwala na I can be the best of me. Na sasamahan mo ako sa kahit ano kasi nga naniniwala ka sa akin hanggang sa magtagumpay ako sa buhay. At wag kang mag-alala, ang tagumpay ko ay tagumpay rin naman natin. Kumbaga, you are the woman behind every successful man. Pero hindi ka lang nasa likod ko na nagpupush sa akin, nasa harapan at unahan ka din para hilahin ako mula sa kalugmukan ko. Kaya naman sobrang swerte ko sayo lovelove.\n\nMaraming salamat sa pagmamahal mo po. I loveeeee youuuuuu sooo muchiieeeee!!\n\nYour love,\nLuis',
    },
    {
      id: 4,
      date: new Date(2026, 1, 12),
      openMessage: 'Almost there, my love!',
      message:
        "Pimmy my love,\n\nYou are now reading the 4th letter and you are almost there po for the valentine's day na letter! Hindi ko alam kung pansin mo pero wala pa ata akong nakitang couple na kasing-sweet natin HAHAHAHA. Yung mga moment na holding hands tayo habang naglalakad, kung hindi naman eh hawak kita sa bewang o di kaya naka-akbay ako sayo. It's just that our relationship is so sweet and kahit na may sabihin yung ibang tao ay dedma at wala tayong pakialam. And I love the relationship we have right now po. The bond that we have, we're so comfortable with each other. Nailalabas natin yung silly sides natin sa isa't-isa and it's so much fun po. Kung tutuusin sayo ko lang po naipapakita yun. But I know po na may mga moments din tayo na we are not that good handling. Lalo na kung magkaaway tayo. Kaya nga po hindi ko malilimutan yung sinabi mo na hindi pwedeng maayos lang tayo kapag hindi magkaaway. I really want to work that out po na itrato ka pa rin nang tama kahit hindi tayo okay.\n\nI love being with you and I loveeee youuuuu sooo muchieee!\n\nYour love,\nLuis",
    },
    {
      id: 5,
      date: new Date(2026, 1, 13),
      openMessage: 'One more day, baby!',
      message:
        "My dear baby,\n\nHi babyyy! 5th letter na po ito! Sana ay kinikilig ka po sa mga sinusulat ko here AHAHAHAHA. Kasi kung hindi, pakikiligin kita sa letter na ito! Simulan natin sa iyong pisikal na anyo. Btw, I am currently listening to Nilalang by Dilaw kaya inspired akong pag-usapan ang kagandahan mong taglay baby ko. Ang masasabi ko sa beauty mo love ay para siyang pinaghalong pretty and cutesy vibes. Softgirl na may pagka-maangas yung dating. Yung mga mata mo, yan talaga asset mo. Napaka-expressive and very cute. Sabi ko nga, parang may universe sa loob dahil sa kinang niya tuwing may ilaw. Ang ganda lang titigan. Lalo na kapag ngumingiti ka po. Talagang nakikita ko na mahal na mahal mo ako. Kapag tinititigan kita tapos tumititig ka pabalik with tilting head pa and sandal sa kamay ko tuwing hahawakan ko pisngi mo. Ay talaga namang! SOBRANG CUTE MO PO BABY! Ansarap ding halik-halikan ng masasarap mong mga labi. Kaya ipangako mong ako lang ang kakagat diyan ha! Sobrang sexy mo pa! Kaya di kita gets kapag sinasabi mong mataba ka na when you literally have the body of a goddess. Yung sa mga painting gud ng mga Greek, ganun po kaganda ang katawan mo! Pagdating naman po sa personality mo, I really love your humor baby. Lagi mo akong pinapatawa and pinapasaya. I am so lucky talaga na natagpuan ko yung kagaya mo at napasakin pa! I can unleash my funny and silly side man! Ang ganda rin ng mindset mo lovelove. Lagi akong may natutunan sayo. You're so hot kapag nilalamangan mo ako or nilelecture-an mo ako. Lalo na kapag may mga debate sessions tayo HAHAHAHAHA. Halikan kita bigla diyan eh! Sobrang swerte ko rin dahil matalino ka at competitive tayo pareho!\n\nAt yan ang mga ilang dahilan kung bakit napakaganda mo pong nilalang baby ko. At kahit magbago ka man or mawala pa yan, mamahalin pa rin po kita. I loveeee youuuu sooo muchieeeee!\n\nYour lovelove,\nLuis ",
    },
    {
      id: 6,
      date: new Date(2026, 1, 14),
      openMessage: "HAPPY VALENTINE'S DAY, MY PRETTY BABY!",
      message:
        "HAPPY VALENTINE'S DAY MY PRETTY AND SEXY BABY!\n\nHello my pretty baby! Alam kong hinihintay mo itong letter ko and excited ka! Ako rin naman! Sana nagustuhan mo itong last pasabog ko for this website po na para sayo! Once again, Happy Valentine's Day po my babyyy! It's your favorite event man! I hope po na napasaya kita and napakilig sa ginawa kong ito. Alam kong alam mo na busy ako but that's not an excuse para gawan ka ng bagay na magpaparamdam sayong mahal na mahal kita lovelove ko. Alam mo bang sinusulat ko yung past letters tuwing 11pm. Kahit may ginagawa pa ako nun, titigil at titigil ako para lang sulatan ka. Hindi ko kasi trip yung prepared na letter. Gusto ko on the spot and damang-dama ko yung moment. Para na rin reminder sayo na ito yung nararamdaman ko habang sinusulat yung mga letter. To be honest love. I am so grateful na nakilala kita. Hindi ko akalain na mayroon palang tao na katulad mo. Na andyan ka lang pala. Handa akong mahalin nang tapat at buo. I know we didn't started that good. May pangamba ka about sa atin at ako rin. Na baka hindi maging maayos. Hindi naman talaga naging maayos. May mga away na nangyari. May mga oras na kinukwestyon ang desisyon. Mga oras na muntik nang matapos ang kwento natin. Mabuti na lang at naging matibay tayong dalawa. Pinili nating harapin ang pagsubok para sa atin nang magkasama. At masaya ako na nakaabot tayo hanggang dito. Isang taon mahigit na rin at patuloy pa nating bibilangin. Marami pang magbabago at alam kong may oras na mahihirapan pa tayo. Pero huwag ka mag-alala love. Dito lang ako at lagi kitang pipiliin. Mapagod man ako, mamamahinga lang ako at mamahalin ulit kita. Hindi kita susukuan hanggang hindi natin naaabot ang pangarap natin sa isa't-isa. Tatanda tayo nang sabay, magmamahalan habang-buhay.\n\nHindi ko na mahintay ang panahon na ikaw at ikaw pa rin ang uuwian ko magkaayos man o magkaaway tayo. Mahal na mahal kita lovelove. I loveee youuuu sooo muchieeee my baby, my love, my loveloveeeee!\n\nYour Valentine,\nLuis",
    },
  ]

  const [currentDate, setCurrentDate] = useState(new Date())
  const [soundEnabled, setSoundEnabled] = useState(false) // user must enable to satisfy browser policies
  const audioCtxRef = useRef(null)
  const audioBufferRef = useRef(null)
  const audioRef = useRef(null)

  const [message, setMessage] = useState('This is the message!')

  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = (letter_message) => {
    if (isOpen == false) {
      setMessage(letter_message)
    }
    setIsOpen((isOpen) => !isOpen)
  }

  const addDays = (date, days) => {
    const result = new Date(date) // Create a copy to avoid mutation
    result.setDate(result.getDate() + days)
    return result
  }

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
    })
  }

  // Enable audio (required by browser autoplay policies) and preload into AudioBuffer for low-latency playback
  const enableSound = async () => {
    try {
      const ctx =
        audioCtxRef.current ||
        (audioCtxRef.current = new (
          window.AudioContext || window.webkitAudioContext
        )())
      // fetch and decode the file into an AudioBuffer
      const resp = await fetch(popSound)
      const arr = await resp.arrayBuffer()
      audioBufferRef.current = await ctx.decodeAudioData(arr.slice(0))
      // resume AudioContext if suspended
      if (ctx.state === 'suspended') await ctx.resume()
      setSoundEnabled(true)
    } catch (e) {
      // fallback to using HTMLAudio element if decoding failed
      setSoundEnabled(true)
    }
  }

  // Play using decoded AudioBuffer when available for lowest latency, otherwise fallback to HTMLAudio
  const playPop = () => {
    try {
      const ctx = audioCtxRef.current
      if (ctx && audioBufferRef.current) {
        const src = ctx.createBufferSource()
        src.buffer = audioBufferRef.current
        const gain = ctx.createGain()
        gain.gain.value = 0.85 // adjust volume if needed
        src.connect(gain).connect(ctx.destination)
        src.start(0)
        return
      }
    } catch (e) {
      // continue to fallback
    }

    try {
      if (!audioRef.current) audioRef.current = new Audio(popSound)
      const a = audioRef.current
      a.currentTime = 0
      a.play().catch(() => {})
    } catch (e) {
      // ignore
    }
  }

  const carouselImages = [p1, p2, p3, p4, p5, p6, p7, p8]
  const [startCarousel, setStartCarousel] = useState(false)

  const [view, setView] = useState('block')
  const musicRef = useRef(null)

  const handlePlay = () => {
    musicRef.current.play()
    setView('hidden')
    setStartCarousel(true)
  }

  const isValentinesUnlocked = currentDate.getTime() >= valentineDate.getTime()

  return (
    <>
      <div
        className={`w-full h-screen z-50 bg-black/80 backdrop-blur-sm absolute top-0 left-0 flex items-center justify-center ${view}`}
      >
        <button
          disabled={!isValentinesUnlocked}
          className={`bg-rose-400 rounded-xl p-5 sm:p-8 w-[70%] sm:w-[20%] border-2 max-h-[80%] border-white font-bold text-2xl text-white animate-float 
  ${!isValentinesUnlocked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:scale-105 transition-all'}`}
          onClick={handlePlay}
        >
          {isValentinesUnlocked ? "Enable Music" : "Available on Feb 14 💌"}
        </button>
      </div>
      <Popup isOpen={isOpen} onClose={handleOpen} message={message} />
      <div className='w-full h-screen bg-radial-[at_50%_1%] from-[#ffffff] to-[#fdacc3] to-75% py-10 sm:p-11 overflow-y-hidden'>
        <audio ref={musicRef} src='/music.mp3' loop />
        {startCarousel && (
          <div className='w-full h-screen absolute top-0 bottom-0 opacity-80'>
            {/* RIGHT SIDE - Moving Down */}
            <div className='fixed right-5 top-0 h-screen w-40 overflow-hidden pointer-events-none'>
              <div className='animate-vertical-scroll-down'>
                {[...carouselImages, ...carouselImages].map((img, index) => (
                  <img
                    key={`right-${index}`}
                    src={img}
                    className='w-full h-60 object-cover rounded-xl mb-4 shadow-xl'
                    alt='memory'
                  />
                ))}
              </div>
            </div>

            {/* LEFT SIDE - Moving Up */}
            <div className='fixed left-5 top-0 h-screen w-40 overflow-hidden pointer-events-none'>
              <div className='animate-vertical-scroll-up'>
                {[...carouselImages, ...carouselImages].map((img, index) => (
                  <img
                    key={`left-${index}`}
                    src={img}
                    className='w-full h-60 object-cover rounded-xl mb-4 shadow-xl'
                    alt='memory'
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        <h1 className='font-valentine text-7xl text-center leading-14 text-[#651515] drop-shadow-2xl sm:mt-10'>
          Countdown to Valentine's Day!
        </h1>
        <p className='font-valentine text-center text-4xl text-[#651515] drop-shadow-2xl -mt-2'>
          for my baby pimmy!
        </p>
        {/* Sound unlock control (required once by browsers) */}
        {/* {!soundEnabled && (
          <button
            onClick={enableSound}
            className='fixed bottom-6 right-6 z-50 bg-white/90 text-sm text-[#651515] px-4 py-2 rounded-lg shadow-lg hover:bg-white'
            aria-label='Enable sound'
          >
            Enable sound 🔊
          </button>
        )} */}
        {/* <img src={envelope} alt="envelope" className='drop-shadow-2xl'/> */}
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-10 sm:gap-x-32 sm:gap-y-20 mt-10 sm:mt-20 justify-items-center w-[75%] mx-auto'>
          {letters.map((letter) => {
            if (
              letter.date.getTime() === valentineDate.getTime() &&
              currentDate.getTime() >= valentineDate.getTime()
            ) {
              return (
                <div className='flex flex-col items-center'>
                  <img
                    src={envelope}
                    alt='envelope'
                    className='drop-shadow-2xl w-56 animate-float hover:scale-110 transition-all cursor-pointer'
                    onMouseEnter={playPop}
                    onFocus={playPop}
                    onClick={() => handleOpen(letter.message)}
                  />
                  <p className='text-center text-lg text-[#dc0707] mt-2 font-sans font-bold animate-bounce leading-5'>
                    {letter.openMessage}
                  </p>
                </div>
              )
            } else if (currentDate.getTime() >= letter.date.getTime()) {
              return (
                <div className='flex flex-col items-center'>
                  <img
                    src={envelope}
                    alt='envelope'
                    className='drop-shadow-2xl w-56 animate-float hover:scale-110 transition-all cursor-pointer'
                    onMouseEnter={playPop}
                    onFocus={playPop}
                    onClick={() => handleOpen(letter.message)}
                  />
                  <p className='text-center text-lg text-[#651515] mt-2 font-sans font-bold leading-5'>
                    {letter.openMessage}
                  </p>
                </div>
              )
            } else {
              return (
                <div className='flex flex-col items-center'>
                  <img
                    src={envelope}
                    alt='envelope'
                    className='drop-shadow-2xl w-56 animate-float hover:scale-110 transition-all cursor-pointer grayscale'
                    onMouseEnter={playPop}
                    onFocus={playPop}
                  />
                  <p className='text-center text-lg text-[#651515] mt-2 font-sans font-bold leading-5'>
                    {formatDate(letter.date)}
                  </p>
                </div>
              )
            }
          })}
        </div>
      </div>
    </>
  )
}

export default App
