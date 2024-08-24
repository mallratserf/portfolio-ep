import Head from "next/head";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillInstagram, AiFillGithub} from 'react-icons/ai';

import Image from "next/image";
import frog from '../public/rfog.png';
import spiral from '../public/spiral.png';
import cherries from '../public/cherries.png';
import books from '../public/education.png';
import {useState} from "react";

export default function Home() {
  const[darkMode, setDarkMode] = useState(false);

  return (  
    <div className = {darkMode ? "dark" : ""}>
      <Head>
        <title>Shalap Pandotra</title>
        <link rel = "icon" href="/favicon.ico"></link>
      </Head>
      <main className = "bg-white px-10 md:px-20 lg:px-40"> 
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-2xl font-mayflower">Shalap's Portfolio</h1>
            <ul className = "flex items-center"> 
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl"/>
              </li>
              <li><a className = "bg-gradient-to-t from-amber-100 to-red-700 bg-red-700 text-white py-3 px-6 rounded-sm ml-8 font-mayflower text-lg" href="#">Resume</a></li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className = "text-4xl p-2 font-mayflower text-red-700 font-semibold md:text-6xl"> Shalap Pandotra </h2>
            <h3 className="text-2xl mx-2 p-2 font-mayflower font-medium md:3xl"> Artist turned developer</h3>
            <p className="text-xl mx-2 leading-8 font-mayflower text-zinc-500 md:text-3xl"> Welcome to my little portfolio, look around, have fun</p>
          </div>
          <div className="text-5xl flex justify-center gap-12 p-2 text-zinc-400">
            <a href="https://www.instagram.com/shalappandotra/" target="_blank" rel="noopener noreferrer"><AiFillInstagram /></a>
            <a href="https://www.linkedin.com/in/shalap?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
            <a href="https://github.com/mallratserf" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-amber-100 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <Image src = {frog} layout="fill" objectFit="cover"/>
          </div>
        </section>
        
        <section>
          <div>
            <h3 className="text-3xl py1 font-times text-center text-red-700 p-12 font-semibold md:px-20 lg:px-40">
              Bit about myself 
            </h3>
            <p className="font-times text-2xl leading-12 md:px-20 lg:px-40 max-w-3xl mx-auto">
              I am a computer science student in my <span className="text-red-700">fourth year</span> of college in <span className="text-red-700">Chandigarh University, Mohali,</span> and although I do mostly work with <span className="text-red-700">web-development projects</span>, I do also dabble in my own personal artistic pursuits such as working on my short stories, literature, and ocassionally, sketching, if I can make the time for it.
            </p>
          </div>

          <div className="lg:flex gap-4">

          <div className="text-center shadow-xl rounded-2xl p-10 my-10 md:max-w-md lg:max-w-l">
              <Image className="mx-auto" src={books} width={148} height={148}/>
              <h4 className="text-red-700 font-times text-3xl font-semibold">Educational Background</h4>
              <p className="text-zinc-500 font-times text-xl py-1">Graduated school from Delhi Public School, Jammu - 2021</p>
              <p className="text-zinc-500 font-times text-xl py-1">Currently Studying Bachelor of Engineering in Computer Science at Chandigarh University, Mohali </p>
              <p className="text-zinc-500 font-times text-xl py-1">Expected year of graduation - 2025</p>
            </div>
            
            <div className="text-center shadow-xl rounded-2xl p-10 my-10">
              <Image className="mx-auto" src={spiral} width={120} height={120}/>
              <h4 className="text-red-700 font-times text-3xl font-semibold">Tools I use/have worked with</h4>
              <p className="text-zinc-500 font-times text-xl py-1">HTML, JavaScript, CSS</p>
              <p className="text-zinc-500 font-times text-xl py-1">Ms Excel</p>
              <p className="text-zinc-500 font-times text-xl py-1">Ms PowerBI</p>
              <p className="text-zinc-500 font-times text-xl py-1">Python</p>
              <p className="text-zinc-500 font-times text-xl py-1">Next.JS</p>
            </div>

            <div className="text-center shadow-xl rounded-2xl p-10 my-10">
              <Image className="mx-auto" src={cherries} width={120} height={120}/>
              <h4 className="text-red-700 font-times text-3xl font-semibold">Non-Technical Skills</h4>
              <p className="text-zinc-500 font-times text-xl py-1">Leadership Skills</p>
              <p className="text-zinc-500 font-times text-xl py-1">Commuinication Skills</p>
              <p className="text-zinc-500 font-times text-xl py-1">Punctuality</p>
              <p className="text-zinc-500 font-times text-xl py-1">Problem Solving</p>
              <p className="text-zinc-500 font-times text-xl py-1">Time Management</p>
            </div>
          </div>
        </section>

        <section>
          <div className="text-center">
            <h3 className="text-red-700 font-times text-3xl font-semibold">Portfolio</h3>
            <p className="mx-auto text-zinc-500 font-times text-lg py-1 md:px-20 lg:px-40 max-w-3xl">
              Arguably I do not have any industry experience, but I do have a passionate drive to learn new skills and implement them into small personal projects, some of which, as you can see, are linked below.
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}
