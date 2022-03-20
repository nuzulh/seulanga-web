import logo from '../img/logo.png';

const Header = () => {
    return (
        <header className='fixed w-full flex items-center justify-between px-24 py-2 font-[poppins]'>
            <div className='flex items-center space-x-3'>
                <img src={logo} className='w-10' alt='' />
                <h1 className='text-xl font-bold tracking-wide text-[#334C0F]'>Seulanga</h1>
            </div>
            <div className='space-x-12'>
                <a href='#home' className='duration-300 hover:opacity-[0.65]'>Home</a>
                <a href='#about' className='duration-300 hover:opacity-[0.65]'>About</a>
                <a href='#team' className='duration-300 hover:opacity-[0.65]'>Team</a>
                <a href='#events' className='duration-300 hover:opacity-[0.65]'>Events</a>
            </div>
        </header>
    );
};

export default Header;