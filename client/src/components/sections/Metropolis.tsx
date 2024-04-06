import { Search } from "lucide-react";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card"
import { AspectRatio } from "../ui/aspect-ratio"
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator"

import { FaGithub } from "react-icons/fa";

type Props = {
    MetropolisImage: string;
}

export default function Metropolis({ MetropolisImage }: Props) {
  return (
    <div className="flex flex-col bg-zinc-800 text-neutral-200">
        <div className="flex flex-row gap-10 max-w-5xl mx-auto animate">
          <div className="flex flex-col mt-32 text-center">
            <h1 className="text-xl font-semibold">A full-stack E-commerce application built with <span className="underline">React</span> in the front-end, and <span className="underline">Node.js</span> and <span className="underline">Express.js</span> in the back-end.</h1>
            <p className="text-neutral-300 leading-relaxed mt-8">User authentication is secure and includes Admin routes and priveleges. Utilises Redux to manage application state. Data is stored in MongoDB, and frontend UI is supported using react depedencies such as react-slick. Payment is achieved through PayPal Developer. CRUD operations are available to the user.</p>
            <Separator className="w-[100px] mx-auto mt-6 bg-blue-500"/>
            <div className="mt-10 flex justify-center gap-2">
              <a href="https://metropolis-k549.onrender.com/" target="_blank" className="flex items-center">
                <Button>
                <Search size={16} className="mr-2"/>
                    View Site
                </Button>
              </a>
              <a href="https://github.com/Nothsurm/Metropolis" target="_blank" className="flex items-center">
                <Button className="bg-blue-500 hover:bg-blue-600">
                  <FaGithub size={16} className="mr-2"/>
                  Source Code
                </Button>
              </a>
            </div>
          </div>
          <CardContainer className="inter-var">
            <CardBody className="bg-zinc-500 relative group/card border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl mx-auto font-bold text-neutral-100 dark:text-white"
              >
                Metropolis
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-2">
                <AspectRatio ratio={16 / 9}>
                  <img src={MetropolisImage} alt="" className="h-[250px] rounded-lg"/>
                </AspectRatio>
              </CardItem>
              <div className="flex justify-between items-center mt-4">
                <CardItem
                  translateZ={20}
                  className="flex justify-center gap-2 flex-wrap"
                >
                  <Badge>HTML</Badge>
                  <Badge>Tailwind CSS</Badge>
                  <Badge>Javascript</Badge>
                  <Badge>React</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>Express.js</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>Redux</Badge>
                </CardItem>
              </div>
              <CardItem
                  translateZ={20}
                  className="mt-4 text-center text-sm text-neutral-100"
                >
                  * This website uses a free domain, therefore initial load time may take 30-60 seconds
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </div>
  )
}
