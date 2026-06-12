"use client";

import {
  Code2,
  Database,
  Server,
  Palette,
  GitBranch,
} from "lucide-react";
import { motion } from "framer-motion";


const skillGroups = [
  {
    title:"Frontend",
    icon:<Code2 size={25}/>,
    skills:[
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Ant Design"
    ]
  },

  {
    title:"Backend",
    icon:<Server size={25}/>,
    skills:[
      "Node.js",
      "Express.js",
      "REST API",
      "Authentication"
    ]
  },


  {
    title:"Database",
    icon:<Database size={25}/>,
    skills:[
      "MongoDB",
      "MySQL",
      "Sequelize"
    ]
  },


  {
    title:"Tools",
    icon:<GitBranch size={25}/>,
    skills:[
      "Git",
      "GitHub",
      "Postman",
      "VS Code"
    ]
  }
];



export default function Skills(){


return (

<section
id="skills"
className="py-28 px-6"
>


<div className="max-w-6xl mx-auto">


<div className="mb-14">

<p className="text-[var(--primary)]">
My Expertise
</p>

<h2 className="
text-5xl
font-bold
mt-2
">
Skills
</h2>

</div>




<div
className="
grid
md:grid-cols-2

gap-6
"
>


{
skillGroups.map((group,index)=>(


<motion.div

key={group.title}

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:index*0.1
}}

className="
group

rounded-3xl

border
border-[var(--border)]

bg-[var(--card)]

p-7

hover:-translate-y-2

transition

shadow-[var(--shadow)]
"

>



<div
className="
flex
items-center
gap-4
"
>


<div
className="
h-12
w-12

rounded-xl

flex
items-center
justify-center

bg-[var(--primary)]

text-white
"
>

{group.icon}

</div>


<h3
className="
text-xl
font-semibold
"
>
{group.title}
</h3>


</div>




<div
className="
mt-6
flex
flex-wrap
gap-3
"
>

{
group.skills.map(skill=>(

<span

key={skill}

className="
px-4
py-2

rounded-full

bg-[var(--surface)]

border
border-[var(--border)]

text-sm

text-[var(--text-secondary)]

group-hover:border-[var(--primary)]

transition
"

>

{skill}

</span>

))
}


</div>


</motion.div>


))
}



</div>


</div>


</section>

)

}