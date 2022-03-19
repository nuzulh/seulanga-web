import logo from '../img/logo.png';

const Header = () => {
    return (
        <header className='fixed w-full bg-[darkgreen] flex items-center justify-between px-24 py-2'>
            <div className='flex items-center space-x-3'>
                <img src={logo} className='w-12' alt='' />
                <h1 className='text-xl'>Seulanga</h1>
            </div>
            <div className='space-x-12'>
                <a href='#home' className='hover:text-[white]'>Home</a>
                <a href='#about' className='hover:text-[white]'>About</a>
                <a href='#team' className='hover:text-[white]'>Team</a>
                <a href='#events' className='hover:text-[white]'>Events</a>
            </div>
        </header>
    );
};

export default Header;