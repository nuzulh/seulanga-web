import logo from '../img/logo.png';
import himatekkom from '../img/himatekkom.png';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';

const Footer = () => {
    gsap.registerPlugin(ScrollTrigger);
    let copy = useRef(null);
    let contact = useRef(null);
    let hima = useRef(null);
    let footer = useRef(null);

    useEffect(() => {
        gsap.from(copy, {x:-30, duration:.8, opacity:0, ease:'sine', scrollTrigger: {
            trigger: footer,
        }}, .8);
        gsap.from(contact, {y:-30, duration:.8, opacity:0, ease:'sine', scrollTrigger: {
            trigger: footer,
        }}, .8);
        gsap.from(hima, {y:30, duration:.8, opacity:0, ease:'sine', scrollTrigger: {
            trigger: footer,
        }}, .8);
    }, []);

    return (
        <footer ref={el => footer = el} className='flex w-full px-24 py-6 font-[poppins]'>
            <div ref={el => copy = el} className='flex flex-col basis-1/5 gap-2'>
                <div className='flex flex-row items-center gap-2'>
                    <img className='w-8' src={logo} alt='logo' />
                    <h1 className='text-lg font-bold text-[#334C0F]'>Seulanga</h1>
                </div>
                <div className='text-sm pl-10 text-[#959595]'>
                    <p>Copyright &copy; 2022</p>
                    <p>Seulanga Community</p>
                </div>
            </div>
            <div className='flex flex-col basis-4/5 divide-y divide-[#959595]'>
                <div ref={el => contact = el} className='flex items-center justify-between pb-2'>
                    <div className='flex gap-16'>
                        <a rel="noreferrer" href='https://youtube.com' target='_blank' className='flex items-center gap-2 text-[#959595]'><i className='text-2xl text-[#334C0F] fa-brands fa-youtube'></i> Youtube Channel</a>
                        <a rel="noreferrer" href='https://instagram.com/seulangateam' target='_blank' className='flex items-center gap-2 text-[#959595]'><i className='text-2xl text-[#334C0F] fa-brands fa-instagram'></i> @seulangateam</a>
                        <a rel="noreferrer" href='https://www.linkedin.com/in/nuzulh/' target='_blank' className='flex items-center gap-2 text-[#959595]'><i className='text-2xl text-[#334C0F] fa-brands fa-linkedin'></i> Seulanga</a>
                    </div>
                    <div>
                        <button className='rounded-lg py-2 px-4 bg-[#334C0F] text-white text-xs]'>Contact Us</button>
                    </div>
                </div>
                <div ref={el => hima = el} className='flex items-center justify-end w-full gap-3 pt-2'>
                    <p className='text-[#334C0F]'>Part of <a rel="noreferrer" className='hover:opacity-[0.7]' href='http://himatekkom.ft.unsyiah.ac.id' target='_blank'>Himpunan Mahasiswa Teknik Komputer USK</a></p>
                    <img className='w-16' src={himatekkom} alt='himatekkom' />
                </div>
            </div>
        </footer>
    );
};

export default Footer;