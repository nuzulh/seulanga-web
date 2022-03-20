import logo from '../img/logo.png';
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    let header = useRef(null);
    const [scroll, setScroll] = useState(0);

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

    return (
        <header ref={el => header = el} className='fixed z-50 w-full flex items-center justify-between px-24 py-2 font-[poppins]'>
            <div className='flex items-center space-x-3'>
                <img src={logo} className='w-10' alt='' />
                <h1 className='text-xl font-bold tracking-wide text-[#334C0F]'>Seulanga</h1>
            </div>
            <div className='space-x-12'>
                <NavLink to='/' className={({isActive}) => isActive ? 'border-b border-[black]' : 'hover:opacity-[0.7]'}>Home</NavLink>
                <NavLink to='/about' className={({isActive}) => isActive ? 'border-b border-[black]' : 'hover:opacity-[0.7]'}>About</NavLink>
                <NavLink to='/team' className={({isActive}) => isActive ? 'border-b border-[black]' : 'hover:opacity-[0.7]'}>Team</NavLink>
                <NavLink to='/events' className={({isActive}) => isActive ? 'border-b border-[black]' : 'hover:opacity-[0.7]'}>Events</NavLink>
            </div>
        </header>
    );
};

export default Header;