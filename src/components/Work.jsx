import React from "react";
import WorkItem from "./WorkItem";

const data = [
    {
        year: 2020,
        title: 'Content Creator',
        duration: '3 Years',
        details : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus auctor tellus in fermentum. Aenean eget ex pretium, mollis purus id, scelerisque metus. Nullam bibendum commodo diam non dapibus. Suspendisse eleifend lacinia enim, ut fermentum odio bibendum ut. Nulla facilisi. Donec porta maximus aliquet. Cras interdum, metus vel pharetra fermentum, ipsum augue venenatis elit, in vulputate ligula odio eu mi.'
    },{
        year: 2027,
        title: 'Google',
        duration: '3 Years',
        details : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus auctor tellus in fermentum. Aenean eget ex pretium, mollis purus id, scelerisque metus. Nullam bibendum commodo diam non dapibus. Suspendisse eleifend lacinia enim, ut fermentum odio bibendum ut. Nulla facilisi. Donec porta maximus aliquet. Cras interdum, metus vel pharetra fermentum, ipsum augue venenatis elit, in vulputate ligula odio eu mi.'
    },{
        year: 2015,
        title: 'Amazon',
        duration: '2 Years',
        details : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus auctor tellus in fermentum. Aenean eget ex pretium, mollis purus id, scelerisque metus. Nullam bibendum commodo diam non dapibus. Suspendisse eleifend lacinia enim, ut fermentum odio bibendum ut. Nulla facilisi. Donec porta maximus aliquet. Cras interdum, metus vel pharetra fermentum, ipsum augue venenatis elit, in vulputate ligula odio eu mi.'
    },{
        year: 2012,
        title: 'Facebook',
        duration: '3 Years',
        details : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus auctor tellus in fermentum. Aenean eget ex pretium, mollis purus id, scelerisque metus. Nullam bibendum commodo diam non dapibus. Suspendisse eleifend lacinia enim, ut fermentum odio bibendum ut. Nulla facilisi. Donec porta maximus aliquet. Cras interdum, metus vel pharetra fermentum, ipsum augue venenatis elit, in vulputate ligula odio eu mi.'
    },
    
]

const Work = () => {
    return (
        <div id='work' className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
            {data.map((item,idx)=>(
                <WorkItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details}/>
            ))}
        </div>
    )
}

export default Work