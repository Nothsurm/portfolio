import { Separator } from "./ui/separator"
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { motion } from "framer-motion";

import ImageOfComputer from '../assets/image-of-computer.png';

import { MovingCards } from './sections/MovingCards'

const words = `As a passionate software engineer, I thrive on solving complex problems and creating elegant solutions. My journey in the tech world began when I underwent a full-stack engineering course at IT Career Switch. Upon completion, I created multiple real-world full-stack applications as highlighted in my Projects. To gain more experience, I have worked with clients on Upwork fixing their software related problems. 

I believe that software engineering is not just about writing code; it's about creating solutions that impact people's lives. Whether it's optimizing an algorithm or designing an intuitive user interface, I'm committed to making a positive difference.

Prior to entering the tech world, I worked 5 years in hospitality and 2 years in construction, both jobs require good communication skills and being a team player, these are traits I can bring to the work place.`;

export default function AboutMe() {
  return (
    <div className="min-h-screen bg-zinc-800 text-neutral-200">
      <div className="flex flex-col animate">
        <h1 className="self-center text-4xl mt-20 font-bold uppercase">About Me</h1>
        <Separator className="w-[110px] mx-auto mt-4 bg-blue-500"/>
      </div>
      <div className="grid md:grid-cols-2 max-w-6xl mx-auto animate">
        <div className="mt-32 mx-auto">
          <img src={ImageOfComputer} className="rounded-full shadow-sm"/>
        </div>
        <div className="flex flex-col gap-10 text-center mt-0 md:mt-10">
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
              <div>
                <Highlight className="text-black text-2xl lg:text-3xl">
                  "A passionate and enthusiastic developer"
                </Highlight>
                <TextGenerateEffect words={words} className="mt-10"/>
              </div>
              <Separator className="w-[100px] mx-auto mt-10 bg-blue-500"/>
            </motion.h1>
          </HeroHighlight>
        </div>
      </div>
      <div className="">
        <MovingCards />
      </div>
    </div>
  )
}
