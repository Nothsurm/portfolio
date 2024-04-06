import RushEatsImage from '../assets/rush-eats-screenshot.png';
import MetropolisImage from '../assets/metropolis-screenshot.png';
import BlogProjectImage from '../assets/blogproject-screenshot.png';
import RushtonPropertiesImage from '../assets/rushtonproperties-screenshot.png';

import RushEats from "./sections/RushEats";
import Metropolis from './sections/Metropolis';
import BlogProject from './sections/BlogProject';
import RushtonProperties from './sections/RushtonProperties';


export default function MyProjects() {
  return (
    <div className="min-h-screen">
      <RushEats RushEatsImage={RushEatsImage}/>
      <Metropolis MetropolisImage={MetropolisImage} />
      <BlogProject BlogProjectImage={BlogProjectImage} />
      <RushtonProperties RushtonPropertiesImage={RushtonPropertiesImage} /> 
    </div>
  )
}
