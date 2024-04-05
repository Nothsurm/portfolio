import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 max-w-6xl mx-auto">
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
                    <p>Hi there, I'm</p>
                    <p>MICHAEL RUSHTON</p>
                    <Highlight className="text-black">
                    a FULL-STACK SOFTWARE ENGINEER
                    </Highlight>
                    <p>I have a passion for creating beautiful response websites and functional applications focused on good user experience</p>
                </motion.h1>
                </HeroHighlight>
        </div>
    </div>
  )
}
