import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

import HTML from '../../assets/HTML5.png'
import CSS from '../../assets/CSS3.png'
import JavaScript from '../../assets/Javascript.png'
import React from '../../assets/React.png'
import Nodejs from '../../assets/Node.js.png'
import Expressjs from '../../assets/Express.png'
import MongoDB from '../../assets/MongoDB.png'
import MySQL from '../../assets/MySQL.png'
import Git from '../../assets/Git.png'
 
export function MovingCards() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
 
const testimonials = [
  {
    img: <img src={HTML} alt="" className="w-[100px]"/>,
  },
  {
    img: <img src={CSS} alt="" className="w-[50px] mt-2"/>,
  },
  {
    img: <img src={JavaScript} alt="" className="w-[50px] mt-6"/>,
  },
  {
    img: <img src={React} alt="" className="mt-2"/>,
  },
  {
    img: <img src={Nodejs} alt="" className=" mt-8"/>,
  },
  {
    img: <img src={Expressjs} alt="" className="mt-8"/>,
  },
  {
    img: <img src={MongoDB} alt="" className="mt-2"/>,
  },
  {
    img: <img src={Git} alt="" className="mt-2"/>,
  },
  {
    img: <img src={MySQL} alt="" className="mt-2"/>,
  },
];