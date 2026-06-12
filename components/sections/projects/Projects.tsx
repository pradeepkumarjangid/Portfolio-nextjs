"use client";


import {
 ExternalLink
} from "lucide-react";

import { motion } from "framer-motion";



const projects=[


{
title:"Unikari",
desc:"Jewelry e-commerce platform with admin panel and product management.",
stack:[
"React",
"Node.js",
"MongoDB",
"Tailwind"
],
image:"/projects/unikari.png"
},



{
title:"E-Commerce Website",
desc:"Full stack ecommerce application with authentication and APIs.",
stack:[
"Next.js",
"Express",
"MongoDB"
],
image:"/projects/ecommerce.png"
},



{
title:"Product CRUD",
desc:"Product management dashboard using Redux Toolkit.",
stack:[
"React",
"Redux",
"MUI"
],
image:"/projects/crud.png"
}

];





export default function Projects(){


return (

<section
id="projects"
className="py-28 px-6"
>


<div className="max-w-6xl mx-auto">



<p className="text-[var(--primary)]">
My Work
</p>


<h2
className="
text-5xl
font-bold
mt-2
"
>
Projects
</h2>




<div
className="
mt-14

grid

md:grid-cols-3

gap-7
"
>


{
projects.map((project,index)=>(


<motion.div

key={project.title}

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:index*0.15
}}



className="
group

overflow-hidden

rounded-3xl

border
border-[var(--border)]

bg-[var(--card)]

hover:-translate-y-3

transition

shadow-[var(--shadow)]
"

>




{/* Image */}

<div
className="
h-48

bg-gradient-to-br

from-blue-500

to-purple-500

flex
items-center
justify-center

text-white

text-3xl

font-bold
"
>

Preview

</div>




<div
className="
p-6
"
>


<h3
className="
text-2xl
font-bold
"
>

{project.title}

</h3>


<p
className="
mt-3

text-[var(--text-secondary)]
"
>

{project.desc}

</p>




<div
className="
mt-5

flex
flex-wrap
gap-2
"
>

{
project.stack.map(item=>(

<span

key={item}

className="
text-xs

rounded-full

bg-[var(--surface)]

px-3
py-1

"

>

{item}

</span>

))
}


</div>



<div
className="
mt-6

flex
gap-3
"
>


<button
className="
flex
items-center
gap-2

text-sm

text-[var(--primary)]
"
>

{/* <Github size={16}/> */}

Code

</button>



<button
className="
flex
items-center
gap-2

text-sm

text-[var(--primary)]
"
>

<ExternalLink size={16}/>

Live

</button>



</div>



</div>




</motion.div>



))
}


</div>




</div>


</section>

)

}