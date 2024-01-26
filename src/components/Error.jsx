import React from "react";
import anime from "./assert/anime.gif"

const Error = () => {
    return (
        <div className='prose prose-stone mx-5 my-12 flex max-w-7xl flex-col items-center md:flex-row lg:mx-auto'>

            <div className='mx-auto max-w-[70%] bg-transparent md:max-w-[50%]'>
                <img
                    loading='lazy'
                    className='w-full rounded-lg bg-black '
                    src={anime}
                    alt=''
                />
            </div>
            <div className='mx-auto w-full max-w-[90%] md:mr-3 md:max-w-[46%]'>
                <h1 className=' bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text py-3 text-3xl font-extrabold text-transparent lg:text-5xl'>
                    Error <span
                        style={{
                            fontSize: "200%"
                        }}
                    >404</span> Your page Not &lt;FOUND /&gt;
                </h1>
                <p className='text-gray-400 md:pt-4 lg:text-lg'>
                    This is platform where you can write your throughts -&gt; Article's / Blogs /
                    Post's just like another social media app
                </p>
                <div className='mx-auto my-8 w-full max-w-[50%] lg:max-w-[40%] '>
                    <button

                        className='w-full cursor-pointer rounded-md bg-gradient-to-r from-violet-600 to-indigo-600 py-3 font-semibold text-white transition duration-200 ease-in-out active:scale-90'
                    >
                        <a href="/"
                        style={{
                            textDecoration: "none"
                        }}
                        className="text-white"
                        >Back To Home </a>
                    </button>
                </div>
                <h1 className=" text-white">
                    <marquee behavior="alternate" >
                        पेज नहीं मिला
                    </marquee>
                </h1>
                <a href="https://amsrportfolio.netlify.app"   style={{
                            textDecoration: "none"
                        }}>
                <p className='rounded-md bg-gradient-to-r from-violet-600 to-indigo-600 py-30  text-white'>
                  all copyright's &copy; reserved by amsr 
                </p>
                </a>
                </div>

        </div>
    );
};

export default Error;