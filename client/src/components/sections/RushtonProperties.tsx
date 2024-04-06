import { Search } from "lucide-react";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card"
import { AspectRatio } from "../ui/aspect-ratio"
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator"

import { FaGithub } from "react-icons/fa";

type Props = {
    RushtonPropertiesImage: string;
}

export default function RushtonProperties({ RushtonPropertiesImage }: Props) {
  return (
    <div className="flex flex-col">
        <div className="flex flex-row flex-wrap justify-center md:flex-nowrap gap-10 max-w-5xl mx-auto animate">
        <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl mx-auto font-bold text-neutral-600 dark:text-white"
              >
                Rushton-Properties
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-2">
                <AspectRatio ratio={16 / 9}>
                  <img src={RushtonPropertiesImage} alt="" className="h-[250px] rounded-lg object-contain"/>
                </AspectRatio>
              </CardItem>
              <div className="flex justify-between items-center mt-4">
                <CardItem
                  translateZ={20}
                  className="flex justify-center gap-2 mt-10 sm:mt-0 flex-wrap"
                >
                  <Badge>HTML</Badge>
                  <Badge>Tailwind CSS</Badge>
                  <Badge>React</Badge>
                  <Badge>Firebase</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>Express.js</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>Redux</Badge>
                </CardItem>
              </div>
              <CardItem
                  translateZ={20}
                  className="mt-4 text-center text-sm text-neutral-500"
                >
                  * This website uses a free domain, therefore initial load time may take 30-60 seconds
              </CardItem>
            </CardBody>
          </CardContainer>
          <div className="flex flex-col mt-0 md:mt-32 text-center">
            <h1 className="text-xl font-semibold">A full-stack Real-Estate website built with <span className="underline">React</span> in the front-end, and <span className="underline">Node.js</span> and <span className="underline">Express.js</span> in the back-end.</h1>
            <p className="text-zinc-600 leading-relaxed mt-8">User authentication is secure and additional sign in options such as Google sign in is done using Firebase Console. Utilises Redux for global state management. Data is stored in MongoDB. CRUD operations are available to the User.</p>
            <Separator className="w-[100px] mx-auto mt-6 bg-blue-500"/>
            <div className="mt-10 flex justify-center gap-2 mb-10 md:mb-0">
              <a href="https://rushton-properties.onrender.com/" target="_blank" className="flex items-center">
                <Button>
                <Search size={16} className="mr-2"/>
                    View Site
                </Button>
              </a>
              <a href="https://github.com/Nothsurm/rushton_properties" target="_blank" className="flex items-center">
                <Button className="bg-blue-500 hover:bg-blue-600">
                  <FaGithub size={16} className="mr-2"/>
                  Source Code
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
  )
}
