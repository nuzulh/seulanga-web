const Home = () => {
    return (
        <div id='home' className='flex h-screen px-24 bg-gradient-to-br from-[white] to-[#7FC41C]'>
            <div className='flex flex-col gap-4 basis-1/2 justify-center h-full'>
                <h3 className='rounded-md py-2 px-6 w-fit bg-[rgba(0,0,0,0.1)] text-[#334C0F]'>Seulanga Community</h3>
                <h1 className='text-6xl font-bold text-[#0A093D]'>Computer Engineering Community</h1>
                <p className='text-[#656464] text-lg'>Sebuah komunitas mahasiswa yang menerapkan pembelajaran Project Based Learning (PBL) untuk menciptakan individu yang mampu menjawab tantangan publik</p>
                <button className='bg-[#334C0F] w-fit py-3 px-8 rounded-2xl text-[white] tracking-wider shadow-lg text-lg hover:opacity-[0.8] duration-300'>Registrasi</button>
            </div>
            <div className='flex basis-1/2 items-center justify-center h-full'>
                
            </div>
        </div>
    );
};

export default Home;