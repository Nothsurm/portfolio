import { Link } from "react-router-dom";

import CV from '../assets/files/CV.pdf'

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { PiReadCvLogo } from "react-icons/pi";
import { Separator } from "./ui/separator";
import { Copyright } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-zinc-700 text-stone-300 h-fit">
      <div className="flex flex-row justify-between max-w-5xl mx-auto">
        <div className="flex flex-row items-center gap-10 mt-6 mb-6">
          <button>
            <a href="https://github.com/Nothsurm" target="_blank">
              <FaGithub className="hover:scale-110" size={40}/>
            </a>
          </button>
          <button>
            <a href="https://www.linkedin.com/in/michael-rushton-65316b280/" target="_blank">
              <FaLinkedin className="hover:scale-110" size={40}/>
            </a>
          </button>
          <button>
            <a href="https://www.upwork.com/freelancers/~0187be7100cd5c9eef" target="_blank">
              <SiUpwork className="hover:scale-110" size={40}/>
            </a>
          </button>
          <button>
          <a href={CV} download>
            <PiReadCvLogo className="hover:scale-110" size={40}/>
          </a>
          </button>
        </div>
        <Link to='/' className="flex text-4xl items-center font-bold">
          <span className="text-blue-500">M</span><p>R.DEV</p>
        </Link>
      </div>
      <Separator className="w-full mx-auto bg-stone-300"/>
      <p className="flex justify-center mt-2 gap-1 items-center"><Copyright size={10}/> Michael Pontes Rushton™</p>
    </div>
  )
}
