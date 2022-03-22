import { useRef, useEffect } from 'react';
import apps from '../img/apps.png';
import cyber from '../img/cyber.png';
import iot from '../img/iot.png';
import divIcon from '../img/division.png';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import ScrollTrigger from 'gsap/ScrollTrigger';
import teams from '../data/team';
import Countdown from '../components/Countdown';

const Home = () => {
    gsap.registerPlugin(ScrollTrigger);
    let h3 = useRef(null);
    let h1 = useRef(null);
    let p = useRef(null);
    let btn = useRef(null);
    let imgIcon = useRef(null);

    let appsEl = useRef(null);
    let appsIconEl = useRef(null);
    let appsH2 = useRef(null);
    let appsP = useRef(null);
    let uiEl = useRef(null);
    let frontEl = useRef(null);
    let backEl = useRef(null);

    let cyberEl = useRef(null);
    let cyberIconEl = useRef(null);
    let cyberH2 = useRef(null);
    let cyberP = useRef(null);
    let cyber1 = useRef(null);
    let cyber2 = useRef(null);
    let cyber3 = useRef(null);

    let iotEl = useRef(null);
    let iotIconEl = useRef(null);
    let iotH2 = useRef(null);
    let iotP = useRef(null);
    let iot1 = useRef(null);
    let iot2 = useRef(null);
    let iot3 = useRef(null);

    useEffect(() => {
        gsap.from(h3,{x:-30, duration:.8, ease:'sine', opacity: 0});
        gsap.from(h1, {x:-30, duration:.8, ease:'sine', opacity: 0}, .2);
        gsap.from(p, {x:-30, duration:.8, ease:'sine', opacity: 0}, .4);
        gsap.from(btn, {x:-30, duration:.8, ease:'sine', opacity: 0}, .6);
        gsap.from(imgIcon, {x:60, duration:.8, ease:'sine', opacity: 0});

        gsap.from(appsIconEl, {x:-30, duration:.8, ease:'sine', opacity:0, scrollTrigger: {
            trigger: appsEl,
            start: 'top center'
        }});
        gsap.from(appsH2, {y:-30, duration:.8, ease:'sine', opacity:0, scrollTrigger: {
            trigger: appsEl,
            start: 'top center'
        }});
        gsap.from(appsP, {y:30, duration:.8, ease:'sine', opacity:0, scrollTrigger: {
            trigger: appsEl,
            start: 'top center'
        }});
        gsap.from(uiEl, {x:50, duration:.8, ease:'sine', opacity:0, scrollTrigger: {
            trigger: appsEl,
            start: 'top center'
        }});
        gsap.from(frontEl, {x:50, duration:.8, ease:'sine', opacity:0, delay: .2, scrollTrigger: {
            trigger: appsEl,
            start: 'top center'
        }});
        gsap.from(backEl, {x:50, duration:.8, ease:'sine', opacity:0, delay: .4, scrollTrigger: {
            trigger: appsEl,
            start: 'top center'
        }});

        gsap.from(cyberIconEl, {x:-30, duration:.8, ease:'sine', opacity:0, scrollTrigger: {
            trigger: cyberEl,
            start: 'top center'
        }});
        gsap.from(cyberH2, {y:-30, duration:.8, ease:'sine', opacity:0, scrollTrigger: {
            trigger: cyberEl,
            start: 'top center'
        }});
        gsap.from(cyberP, {y:30, duration:.8, ease:'sine', opacity:0, scrollTrigger: {
            trigger: cyberEl,
            start: 'top center'
        }});
        gsap.from(cyber1, {x:50, duration:.8, ease:'sine', opacity:0, scrollTrigger: {
            trigger: cyberEl,
            start: 'top center'
        }});
        gsap.from(cyber2, {x:50, duration:.8, ease:'sine', opacity:0, delay: .2, scrollTrigger: {
            trigger: cyberEl,
            start: 'top center'
        }});
        gsap.from(cyber3, {x:50, duration:.8, ease:'sine', opacity:0, delay: .4, scrollTrigger: {
            trigger: cyberEl,
            start: 'top center'
        }});

        gsap.from(iotIconEl, {x:-30, duration:.8, ease:'sine', opacity:0, scrollTrigger: {
            trigger: iotEl,
            start: 'top center'
        }});
        gsap.from(iotH2, {y:-30, duration:.8, ease:'sine', opacity:0, scrollTrigger: {
            trigger: iotEl,
            start: 'top center'
        }});
        gsap.from(iotP, {y:30, duration:.8, ease:'sine', opacity:0, scrollTrigger: {
            trigger: iotEl,
            start: 'top center'
        }});
        gsap.from(iot1, {x:50, duration:.8, ease:'sine', opacity:0, scrollTrigger: {
            trigger: iotEl,
            start: 'top center'
        }});
        gsap.from(iot2, {x:50, duration:.8, ease:'sine', opacity:0, delay: .2, scrollTrigger: {
            trigger: iotEl,
            start: 'top center'
        }});
        gsap.from(iot3, {x:50, duration:.8, ease:'sine', opacity:0, delay: .4, scrollTrigger: {
            trigger: iotEl,
            start: 'top center'
        }});
    }, []);

    return (
        <div className='overflow-x-hidden'>
            <div id='home' className='flex h-screen px-2 md:px-24 bg-gradient-to-br from-[white] to-[#7FC41C] font-[poppins]'>
                <div className='flex flex-col gap-6 w-full items-center md:items-start md:basis-1/2 justify-center h-full'>
                    <h3 ref={el => h3 = el} className='rounded-md py-2 px-6 w-fit bg-[rgba(0,0,0,0.1)] text-[#334C0F]'>Seulanga Community</h3>
                    <h1 ref={el => h1 = el}  className='md:text-6xl md:text-left text-center text-2xl font-bold text-[#0A093D] tracking-wider'>Computer Engineering Community</h1>
                    <p ref={el => p = el}  className='text-[#656464] md:text-left text-center text-sm md:text-lg'>Sebuah komunitas mahasiswa yang menerapkan pembelajaran Project Based Learning (PBL) untuk menciptakan individu yang mampu menjawab tantangan publik</p>
                    <div className='flex gap-3'>
                        <a href='#about' ref={el => btn = el} className='hidden md:flex items-center bg-[#334C0F] w-fit py-2 px-8 rounded-xl text-[white] tracking-wider shadow-xl text-md'>Selengkapnya</a>
                        <a className='w-fit py-2 px-8 bg-[#334C0F] text-[white] md:bg-transparent rounded-xl md:text-[#334C0F] md:border-2 border-[#334C0F] tracking-wider shadow-xl text-md hover:bg-[#334C0F] hover:text-[white] duration-300' href='#registration'>Daftar</a>
                    </div>
                </div>
                <div className='hidden md:flex basis-1/2 items-center justify-center h-full'>
                    <div className='w-full flex items-center justify-center h-1/2'>
                        <img ref={el => imgIcon = el} src={divIcon} alt='division' />
                    </div>
                </div>
            </div>
            <div id='about' className='px-2 md:pl-24 w-full font-[poppins]'>
                <div ref={el => appsEl = el} className='w-full flex py-12 md:py-48'>
                    <div className='flex flex-col md:flex-row text-center md:text-left md:basis-2/3 items-center gap-5'>
                        <img ref={el => appsIconEl = el} className='hidden md:block w-50' src={apps} alt='apps' />
                        <img className='block md:hidden w-20' src={apps} alt='apps' />
                        <div className='divide-y divide-[#656464] flex flex-col'>
                            <h1 ref={el => appsH2 = el} className='font-bold pb-4 text-2xl md:text-4xl tracking-wider'>Web & Mobile Development</h1>
                            <p ref={el => appsP = el} className='text-[#656464] pt-4'>Proses pengembangan web dan mobile mencakup UI/UX Design, Frontend, Backend, Content Writing, Client-side/Server-side Script dan Network Security Configuration</p>
                        </div>
                    </div>
                    <div className='hidden md:flex flex-col basis-1/3 items-end justify-center gap-6'>
                        <div ref={el => uiEl = el} className='w-5/6 shadow-lg font-bold text-2xl text-[white] px-8 py-4 rounded-l-full bg-gradient-to-r from-[#D7DB00] to-[white]'>
                            <h2>UI/UX Design</h2>
                        </div>
                        <div ref={el => frontEl = el} className='w-5/6 shadow-lg font-bold text-2xl text-[white] px-8 py-4 rounded-l-full bg-gradient-to-r from-[#D7DB00] to-[white]'>
                            <h2>Frontend Dev</h2>
                        </div>
                        <div ref={el => backEl = el} className='w-5/6 shadow-lg font-bold text-2xl text-[white] px-8 py-4 rounded-l-full bg-gradient-to-r from-[#D7DB00] to-[white]'>
                            <h2>Backend Dev</h2>
                        </div>
                    </div>
                </div>
                <div ref={el => cyberEl = el} className='w-full flex py-12 md:py-48'>
                    <div className='flex flex-col md:flex-row text-center md:text-left md:basis-2/3 items-center gap-5'>
                        <img ref={el => cyberIconEl = el} className='hidden md:block w-50' src={cyber} alt='apps' />
                        <img className='block md:hidden w-20' src={cyber} alt='cyber' />
                        <div className='divide-y divide-[#656464] flex flex-col'>
                            <h1 ref={el => cyberH2 = el} className='font-bold pb-4 text-2xl md:text-4xl tracking-wider'>Cyber Security</h1>
                            <p ref={el => cyberP = el} className='text-[#656464] pt-4'>Cyber Security adalah teknologi, proses, dan praktik yang dirancang untuk melindungi jaringan, komputer, program dan data dari serangan, kerusakan, atau akses yang tidak sah.</p>
                        </div>
                    </div>
                    <div className='hidden md:flex flex-col basis-1/3 items-end justify-center gap-6'>
                        <div ref={el => cyber1 = el} className='w-5/6 shadow-lg font-bold text-2xl text-[white] px-8 py-4 rounded-l-full bg-gradient-to-r from-[#A80000] to-[white]'>
                            <h2>Cryptography</h2>
                        </div>
                        <div ref={el => cyber2 = el} className='w-5/6 shadow-lg font-bold text-2xl text-[white] px-8 py-4 rounded-l-full bg-gradient-to-r from-[#A80000] to-[white]'>
                            <h2>Web Exploitation</h2>
                        </div>
                        <div ref={el => cyber3 = el} className='w-5/6 shadow-lg font-bold text-2xl text-[white] px-8 py-4 rounded-l-full bg-gradient-to-r from-[#A80000] to-[white]'>
                            <h2>Others.</h2>
                        </div>
                    </div>
                </div>
                <div ref={el => iotEl = el} className='w-full flex py-12 md:py-48'>
                    <div className='flex flex-col md:flex-row text-center md:text-left md:basis-2/3 items-center gap-5'>
                        <img ref={el => iotIconEl = el} className='hidden md:block w-50' src={iot} alt='apps' />
                        <img className='block md:hidden w-20' src={iot} alt='iot' />
                        <div className='divide-y divide-[#656464] flex flex-col'>
                            <h1 ref={el => iotH2 = el} className='font-bold pb-4 text-2xl md:text-4xl tracking-wider'>Embedded System & IoT</h1>
                            <p ref={el => iotP = el} className='text-[#656464] pt-4'>Kombinasi perangkat keras dan perangkat lunak komputer, baik dengan kemampuan tetap atau dapat diprogram, yang dirancang untuk fungsi tertentu atau fungsi dalam sistem yang lebih besar.</p>
                        </div>
                    </div>
                    <div className='hidden md:flex flex-col basis-1/3 items-end justify-center gap-6'>
                        <div ref={el => iot1 = el} className='w-5/6 shadow-lg font-bold text-2xl text-[white] px-8 py-4 rounded-l-full bg-gradient-to-r from-[#00519C] to-[white]'>
                            <h2>Hardware & Software</h2>
                        </div>
                        <div ref={el => iot2 = el} className='w-5/6 shadow-lg font-bold text-2xl text-[white] px-8 py-4 rounded-l-full bg-gradient-to-r from-[#00519C] to-[white]'>
                            <h2>Sensors & Actuator</h2>
                        </div>
                        <div ref={el => iot3 = el} className='w-5/6 shadow-lg font-bold text-2xl text-[white] px-8 py-4 rounded-l-full bg-gradient-to-r from-[#00519C] to-[white]'>
                            <h2>Connectivity</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div id='team' className='hidden px-2 md:px-24 md:flex flex-col items-center justify-center w-full h-screen bg-gradient-to-b from-[white] to-[#7FC41C] font-[poppins]'>
                <h1 className='font-bold text-2xl md:text-4xl text-[#0A093D] tracking-wider'>Our Team</h1>
                <div className='flex w-full basis-3/4 items-center justify-around'>
                    {teams.map((team, index) => {
                        return (
                            <div key={index} className='flex flex-col items-center'>
                                <img className='rounded-xl shadow-xl ring-4 ring-[#334C0F] mb-4 hover:scale-[1.05] duration-300' src={team.imgUrl} alt='team' />
                                <h3 className='font-bold tracking-wide text-[#334C0F] text-lg'>{team.name}</h3>
                                <p className='text-[rgba(0,0,0,0.5)]'>{team.division}</p>
                            </div>
                        );
                    })}
                </div>
                <Link to='/team' title='Teams more'><i className='hidden md:block fa-solid fa-ellipsis text-8xl text-[#334C0F] hover:opacity-[0.7] duration-300'></i></Link>
            </div>
            <div id='registration' className='px-2 md:px-24 w-full flex flex-col justify-center gap-5 md:gap-10 h-screen bg-gradient-to-b from-[#7FC41C] to-[white] font-[poppins]'>
                <h1 className='font-bold text-2xl text-center md:text-left md:text-5xl text-[#0A093D] tracking-wider'>Open Recruitment</h1>
                <p className='text-[rgba(0,0,0,0.7)] text-md text-center md:text-lg md:text-left'>Ayo daftarkan diri kamu dalam keanggotaan seulanga dan dapatkan manfaatnya!</p>
                <Countdown />
                <div className="flex flex-row gap-4 justify-center md:justify-start">
          <a
            href="https://forms.gle/v4mwe7gXXo8Ro2hM7"
            rel="noreferrer"
            target='_blank'
            className="w-fit py-2 px-8 bg-[#334C0F] text-[#334C0F] bg-transparent rounded-xl md:text-[#334C0F] border-2 border-[#334C0F] tracking-wider shadow-xl text-md hover:bg-[#334C0F] hover:text-[white] duration-300"
          >
            <i className="fa-solid fa-file-lines"></i> Daftar
          </a>{" "}
          <a
            href="https://drive.google.com/drive/folders/1mIXJCJqggpl-IxMhrGRUFwAEcDse0-Ku"
            rel="noreferrer"
            target='_blank'
            className="w-fit py-2 px-8 bg-[#334C0F] text-[#334C0F] bg-transparent rounded-xl md:text-[#334C0F] border-2 border-[#334C0F] tracking-wider shadow-xl text-md hover:bg-[#334C0F] hover:text-[white] duration-300"
          >
            <i className="fa-solid fa-file-arrow-down"></i> Form
          </a>
        </div>
            </div>
        </div>
    );
};

export default Home;