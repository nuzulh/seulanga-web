import { useEffect, useState } from "react";

const Top = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 100) {
            setVisible(true);
        } else if (scrolled <= 100) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);

        return () => window.removeEventListener('scroll', toggleVisible);
    }, [visible]);

    return (
        <div onClick={scrollToTop} className={visible ? 'fixed z-20 cursor-pointer bottom-5 duration-300 right-5 w-12 h-12 flex items-center justify-center bg-[rgba(0,0,0,0.2)] rounded-full hover:opacity-[0.6]' : 'fixed opacity-0'}>
            <i className='fa-solid fa-angle-up text-2xl text-[black]]'></i>
        </div>
    );
};

export default Top;