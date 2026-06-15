"use client";

import { motion } from "framer-motion";
import { Code2, Briefcase, Rocket, UserRound } from "lucide-react";


const highlights = [
  {
    icon:<Briefcase size={22}/>,
    title:"Experience",
    value:"2+ Years"
  },
  {
    icon:<Code2 size={22}/>,
    title:"Projects",
    value:"10+ Built"
  },
  {
    icon:<Rocket size={22}/>,
    title:"Focus",
    value:"Full Stack"
  },
];


export default function About() {

  return (
    <section id="about" className="py-28 px-6">

      <div className="max-w-6xl mx-auto">


        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:0.6}}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >


          {/* Left */}

          <div>

            <p className="text-[var(--primary)] font-medium">
              About Me
            </p>


            <h2 className="mt-3 text-5xl font-bold text-[var(--text-primary)]">
              Building modern web experiences
            </h2>


            <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">

              I'm Pradeep Kumar, a Full Stack Developer passionate about
              creating scalable and high-performance web applications.

              I specialize in React.js, Next.js, Node.js, Express.js and
              MongoDB with a strong focus on clean UI, reusable components
              and smooth user experience.

            </p>



            <div className="mt-8 flex flex-wrap gap-3">

              {
                [
                  "React.js",
                  "Next.js",
                  "Node.js",
                  "MongoDB",
                  "TypeScript"
                ].map(item=>(

                  <span
                    key={item}
                    className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--text-secondary)]"
                  >
                    {item}
                  </span>

                ))
              }

            </div>


          </div>





          {/* Right */}

          <div className="grid gap-5">


            <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8">

              <UserRound className="text-[var(--primary)]"/>

              <h3 className="mt-4 text-xl font-semibold">
                Developer Mindset
              </h3>

              <p className="mt-3 text-[var(--text-secondary)]">
                Writing clean, maintainable and scalable code with modern
                development practices.
              </p>

            </div>




            <div className="grid sm:grid-cols-3 gap-4">

              {
                highlights.map(item=>(

                  <div
                    key={item.title}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5"
                  >

                    <div className="text-[var(--primary)]">
                      {item.icon}
                    </div>

                    <h4 className="mt-3 text-2xl font-bold">
                      {item.value}
                    </h4>

                    <p className="text-sm text-[var(--text-secondary)]">
                      {item.title}
                    </p>

                  </div>

                ))
              }

            </div>


          </div>


        </motion.div>


      </div>

    </section>
  );
}