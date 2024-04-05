import { useState } from "react"
import { Link } from 'react-router-dom'
import { Button } from "./ui/button"
import { Mail } from "lucide-react"

export default function Navbar() {
    const [navbar, setNavbar] = useState(false)

    const changeBackground = () => {
        if (window.scrollY > 90) {
          setNavbar(true)
        } else {
          setNavbar(false)
        }
      }
    
      window.addEventListener('scroll', changeBackground)
  return (
    <div className={ navbar ? "flex justify-around fixed z-20 text-stone-300 items-center shadow-xl bg-zinc-700 h-28 transition-all duration-200 w-full" : "flex justify-around fixed z-20 text-stone-300 items-center shadow-xl bg-zinc-700 h-40 transition-all duration-200 w-full"}>
        <div className="flex gap-96 mr-2 ml-2">
            <Link to='/' className="flex text-2xl font-bold">
                <span className="text-blue-500">M</span><p>R.DEV</p>
            </Link>
            <div className="flex gap-20">
                <button className="hover:opacity-50">
                    <span>Home</span>
                </button>
                <button className="hover:opacity-50">
                    <span>About Me</span>
                </button>
                <button className="hover:opacity-50">
                    <span>My Projects</span>
                </button>
                <Button className="bg-blue-500 hover:bg-blue-600 flex gap-2">
                    <Mail size={16} />
                    Contact Me
                </Button>
            </div>

        </div>
    </div>
  )
}

