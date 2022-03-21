import logo from '../img/logo.png';
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    let header = useRef(null);
    let nav = useRef(null);
    const [scroll, setScroll] = useState(0);
    const [active, setActive] = useState(false);

    useEffect(() => {
        gsap.from(header, {y:-20, duration:.8, ease:'sine', opacity:0});
    }, []);

    useEffect(() => {
        const onScroll = () => {
            setScroll(window.scrollY);
            if (scroll > 100) {
                document.querySelector('header').classList.add('bg-[white]', 'shadow-lg', 'duration-300');
            } else {
                document.querySelector('header').classList.remove('bg-[white]', 'shadow-lg');
            }
        };
        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, [scroll]);

    const activeToggler = () => {
        const navClass = nav.classList;
        if (nav.className.includes('-left-full')) {
            setActive(true);
            navClass.remove('-left-full');
            navClass.add('left-0');
        } else if (nav.className.includes('left-0')) {
            setActive(false);
            navClass.remove('left-0');
            navClass.add('-left-full');
        }
    };

    return (
        <header ref={el => header = el} className='fixed z-50 w-full flex items-center justify-between px-2 xl:px-24 py-2 font-[poppins]'>
            <div className='flex items-center gap-2'>
                <img src={logo} className='w-8 sm:w-10' alt='' />
                <h1 className='text-xl font-bold tracking-wide text-[#334C0F]'>Seulanga</h1>
            </div>
            <div className='hidden md:flex space-x-12'>
                <NavLink to='/' className={({isActive}) => isActive ? 'border-b border-[black]' : 'hover:opacity-[0.7]'}>Home</NavLink>
                <NavLink to='/about' className={({isActive}) => isActive ? 'border-b border-[black]' : 'hover:opacity-[0.7]'}>About</NavLink>
                <NavLink to='/team' className={({isActive}) => isActive ? 'border-b border-[black]' : 'hover:opacity-[0.7]'}>Team</NavLink>
                <NavLink to='/events' className={({isActive}) => isActive ? 'border-b border-[black]' : 'hover:opacity-[0.7]'}>Events</NavLink>
            </div>
            <i className={active ? 'fa-solid fa-xmark p-3 text-xl md:hidden' : 'fa-solid fa-bars p-3 text-xl md:hidden'} onClick={activeToggler}></i>
            <div ref={el => nav = el} className='md:hidden flex flex-col items-center justify-center ease-out duration-500 absolute -left-full top-0 bg-[#334C0F] text-[white] h-screen w-2/3'>
                <NavLink className='w-full flex items-center py-4 border-b-[1px] border-[rgba(255,255,255,.5)] justify-center' to='/'>Home</NavLink>
                <NavLink className='w-full flex items-center py-4 border-b-[1px] border-[rgba(255,255,255,.5)] justify-center' to='/about'>About</NavLink>
                <NavLink className='w-full flex items-center py-4 border-b-[1px] border-[rgba(255,255,255,.5)] justify-center' to='/team'>Team</NavLink>
                <NavLink className='w-full flex items-center py-4 border-b-[1px] border-[rgba(255,255,255,.5)] justify-center' to='/events'>Events</NavLink>
            </div>
        </header>
    );
};

export default Header;