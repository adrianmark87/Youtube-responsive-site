import React from "react";
import ProjectItem from "./ProjectItem";
import propertyImg from '../assets/property.jpeg'
import crytoImg from '../assets/crypto.jpeg'
import netflixImg from '../assets/netflix.jpeg'
import mapsImg from '../assets/maps.jpeg'


const Projects = () => {
    return (
        <div id='projects' className="max-width-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
        <p className="text-center py-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. A quod laboriosam, ut modi ipsam assumenda inventore necessitatibus ipsum dicta distinctio, dolore nam magni veritatis cum mollitia et nemo aspernatur provident.</p>
       <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={crytoImg} title='Crypto App'/>
        <ProjectItem img={propertyImg} title='Property App'/>
        <ProjectItem img={netflixImg} title='Netflix App'/>
        <ProjectItem img={mapsImg} title='Maps App'/>
       </div>
        </div>
    )
}

export default Projects