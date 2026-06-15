"use client";

import { motion } from "framer-motion";

const experiences=[
{
company:"Pine Succeed",
role:"Full Stack Developer",
duration:"Mar 2025 - Present",
points:[
"Building scalable web applications",
"React.js, Next.js, Node.js development",
"Reusable components and APIs",
"Frontend & backend integration"
]
},
{
company:"Cupid Compusoft",
role:"Software Developer",
duration:"Mar 2023 - Mar 2025",
points:[
"Developed responsive applications",
"React.js and UI libraries",
"REST API integration",
"Improved performance and UX"
]
}
];


export default function Experience(){

return <section id="experience" className="px-6 py-28">

<div className="mx-auto max-w-5xl">

<p className="text-[var(--primary)]">Career</p>
<h2 className="mt-2 text-5xl font-bold">Experience</h2>


<div className="relative mt-12 space-y-8">

<div className="absolute left-4 h-full w-px bg-[var(--border)]"/>


{experiences.map((e,i)=>(

<motion.div
key={e.company}
initial={{opacity:0,x:-30}}
whileInView={{opacity:1,x:0}}
transition={{delay:i*.1}}
className="relative pl-12"
>

<div className="absolute left-0 top-1 h-8 w-8 rounded-full bg-[var(--primary)] border-4 border-[var(--background)]"/>


<div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">

<div className="flex justify-between gap-3 flex-wrap">

<h3 className="text-xl font-bold">{e.role}</h3>
<span className="text-sm text-[var(--primary)]">{e.duration}</span>

</div>

<p className="mt-2 text-[var(--text-secondary)]">{e.company}</p>


<ul className="mt-4 list-disc space-y-1 ml-5 text-[var(--text-secondary)]">

{e.points.map(p=><li key={p}>{p}</li>)}

</ul>

</div>

</motion.div>

))}

</div>

</div>

</section>

}