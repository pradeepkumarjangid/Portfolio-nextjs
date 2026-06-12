const experiences = [
  {
    company: "Cupid Compusoft",
    role: "Software Developer",
    duration: "Mar 2023 - Mar 2025",
    points: [
      "Developed responsive web applications",
      "Worked with React.js, JavaScript and modern UI libraries",
      "Integrated REST APIs and backend services",
      "Improved application performance and user experience"
    ],
  },
  {
    company: "Pine Succeed",
    role: "Full Stack Developer",
    duration: "Mar 2025 - Present",
    points: [
      "Building scalable web applications",
      "Working with React.js, Next.js, Node.js",
      "Developing reusable components and APIs",
      "Managing frontend and backend integration"
    ],
  },
];


export default function Experience() {

return (

<section
id="experience"
className="py-24 px-6"
>

<div className="max-w-5xl mx-auto">


<h2
className="
text-4xl
font-bold
text-[var(--text-primary)]
"
>
Experience
</h2>



<div className="mt-12 relative">


{/* line */}

<div
className="
absolute
left-4
top-0
h-full
w-px
bg-[var(--border)]
"
/>



<div className="space-y-10">


{
experiences.map((exp,index)=>(

<div
key={exp.company}

className="
relative
pl-12
"
>


{/* dot */}

<div
className="
absolute
left-0
top-2

h-8
w-8

rounded-full

bg-[var(--primary)]

border-4
border-[var(--background)]
"
/>



<div
className="
rounded-2xl
border
border-[var(--border)]

bg-[var(--card)]

p-6
"
>


<div
className="
flex
justify-between
gap-4
flex-wrap
"
>

<h3
className="
text-xl
font-bold
"
>
{exp.role}
</h3>


<span
className="
text-sm
text-[var(--primary)]
"
>
{exp.duration}
</span>


</div>



<p
className="
mt-2
font-medium
text-[var(--text-secondary)]
"
>
{exp.company}
</p>



<ul
className="
mt-4
space-y-2
text-[var(--text-secondary)]
list-disc
ml-5
"
>

{
exp.points.map(point=>(

<li key={point}>
{point}
</li>

))
}

</ul>



</div>


</div>

))
}


</div>


</div>


</div>


</section>

)

}