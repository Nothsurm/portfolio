import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import ImageOfMyself from '../assets/image-of-myself.png';

// Icons
import { Download } from 'lucide-react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { Button } from "./ui/button";


export default function Hero() {
  return (
    <div className="min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 max-w-6xl mx-auto">
          <div className="flex text-center md:text-left order-last md:order-first">
              <HeroHighlight>
                <motion.h1
                    initial={{
                    opacity: 0,
                    y: 20,
                    }}
                    animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                    }}
                    transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                    }}
                >
                  <div className="title-1 -mt-32 md:-mt-0">
                    <p className="text-xl lg:text-2xl">Hi there, I'm</p>
                    <p className="text-2xl lg:text-4xl uppercase font-semibold mt-2">Michael Rushton</p>
                    <div className="mt-4">
                    <Highlight className="text-black text-2xl lg:text-3xl">
                    a FULL-STACK SOFTWARE ENGINEER
                    </Highlight>
                    </div>
                    <p className="mt-4">I have a passion for creating beautiful response websites and functional applications focused on good user experience.</p>
                    </div>
                </motion.h1>
                <div className="title-2 flex justify-center md:justify-start flex-row gap-4 mt-8">
                  <button>
                    <a href="https://github.com/Nothsurm" target="_blank">
                      <FaGithub className="mt-4 hover:scale-110" size={40}/>
                    </a>
                  </button>
                  <button>
                    <a href="https://www.linkedin.com/in/michael-rushton-65316b280/" target="_blank">
                      <FaLinkedin className="mt-4 hover:scale-110" size={40}/>
                    </a>
                  </button>
                  <button>
                    <a href="https://www.upwork.com/freelancers/~0187be7100cd5c9eef" target="_blank">
                      <SiUpwork className="mt-4 hover:scale-110" size={40}/>
                    </a>
                  </button>
                </div>
                <Button className="title-3 bg-blue-500 hover:bg-blue-600 mt-8 flex mx-auto md:ml-0 md:mr-0 gap-2">
                  <Download size={16} />
                  Download CV
                </Button>
              </HeroHighlight>
          </div>
          <div className="title-1 mx-auto self-center order-first md:order-last mt-56 md:mt-0">
            <img src={ImageOfMyself} alt="" className="rounded-full shadow-sm"/>
          </div>
        </div>
    </div>
  )
}
