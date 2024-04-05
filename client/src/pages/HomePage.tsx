import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react"
import { Link } from 'react-router-dom'
import { Mail } from "lucide-react"
import { Menu } from "lucide-react"

import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger  } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import AboutMe from "@/components/AboutMe";
import MyProjects from "@/components/MyProjects";
import ContactMe from "@/components/ContactMe";


export default function HomePage() {
  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
      if (window.scrollY > 90) {
        setNavbar(true)
      } else {
        setNavbar(false)
      }
    }
  
    window.addEventListener('scroll', changeBackground)

    const home = useRef<null | HTMLDivElement>(null)
    const aboutMe = useRef<null | HTMLDivElement>(null)
    const myProjects = useRef<null | HTMLDivElement>(null)
    const contactMe = useRef<null | HTMLDivElement>(null)

  return (
    <>
      <main>

        {/* NAVBAR */}
        <div className={ navbar ? "flex justify-around fixed z-20 text-stone-300 items-center shadow-xl bg-zinc-700 h-28 transition-all duration-200 w-full" : "flex justify-around fixed z-20 text-stone-300 items-center shadow-xl bg-zinc-700 h-40 transition-all duration-200 w-full"}>
          <div className="flex gap-20 sm:gap-44 md:gap-96 mr-2 ml-2">
              <Link to='/' className="flex text-4xl font-bold">
                  <span className="text-blue-500">M</span><p>R.DEV</p>
              </Link>
              <div className="hidden lg:flex gap-20">
                  <button 
                    onClick={() => {
                      home?.current?.scrollIntoView({behavior: 'smooth'})
                    }}
                    className="hover:opacity-50">
                      <span>Home</span>
                  </button>
                  <button 
                    onClick={() => {
                      aboutMe?.current?.scrollIntoView({behavior: 'smooth'})
                    }}
                    className="hover:opacity-50">
                      <span>About Me</span>
                  </button>
                  <button 
                    onClick={() => {
                      myProjects?.current?.scrollIntoView({behavior: 'smooth'})
                    }}
                    className="hover:opacity-50">
                      <span>My Projects</span>
                  </button>
                  <Button 
                    onClick={() => {
                      contactMe?.current?.scrollIntoView({behavior: 'smooth'})
                    }}
                    className="bg-blue-500 hover:bg-blue-600 flex gap-2">
                      <Mail size={16} />
                      Contact Me
                  </Button>
              </div>

              {/* NAVBAR MOBILE */}
              <div className="flex lg:hidden">
                <Sheet>
                  <SheetTrigger>
                      <Menu className="text-blue-500"/>
                  </SheetTrigger>
                  <SheetContent>
                      <SheetTitle>
                          <Link to='/' className="flex text-4xl font-bold">
                              <span className="text-blue-500">M</span><p>R.DEV</p>
                          </Link>
                      </SheetTitle>
                      <Separator />
                    <SheetDescription className="flex flex-col gap-8 mt-4">
                      <button 
                        onClick={() => {
                          home?.current?.scrollIntoView({behavior: 'smooth'})
                        }}
                        className="hover:opacity-50">
                          <span>Home</span>
                      </button>
                      <button 
                        onClick={() => {
                          aboutMe?.current?.scrollIntoView({behavior: 'smooth'})
                        }}
                        className="hover:opacity-50">
                          <span>About Me</span>
                      </button>
                      <button 
                        onClick={() => {
                          myProjects?.current?.scrollIntoView({behavior: 'smooth'})
                        }}
                        className="hover:opacity-50">
                          <span>My Projects</span>
                      </button>
                      <Button 
                        onClick={() => {
                          contactMe?.current?.scrollIntoView({behavior: 'smooth'})
                        }}
                        className="bg-blue-500 hover:bg-blue-600 flex gap-2">
                          <Mail size={16} />
                          Contact Me
                      </Button>
                    </SheetDescription>
                  </SheetContent>
                </Sheet>
              </div>
          </div>
        </div>

        {/* SECTIONS */}
        <div ref={home}>
          <Hero />
        </div>
        <div ref={aboutMe}>
          <AboutMe />
        </div>
        <div ref={myProjects}>
          <MyProjects />
        </div>
        <div ref={contactMe}>
          <ContactMe />
        </div>
        <Footer />
      </main>
    </>
  )
}
