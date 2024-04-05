import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";


export default function HomePage() {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <div className="min-h-screen"><Button>Hello</Button></div>
        <Footer />
      </main>
    </>
  )
}
