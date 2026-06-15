"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";


const stack = [
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Tailwind"
];


export default function Hero() {

  return (

    <section id="home" className="relative flex min-h-[800px] items-center overflow-hidden px-6 pt-32">


      <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-[var(--primary)] opacity-20 blur-[120px]" />


      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">


        {/* Content */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
        >

          <p className="mb-4 text-[var(--primary)] font-medium">
            Hello, I'm
          </p>


          <h1 className="text-5xl font-bold leading-tight text-[var(--text-primary)] md:text-7xl">
            Pradeep Kumar
          </h1>


          <h2 className="mt-4 bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-2xl font-semibold text-transparent md:text-4xl">
            Full Stack Developer
          </h2>


          <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--text-secondary)]">
            I build scalable web applications using React.js, Next.js,
            Node.js and MongoDB with clean UI and smooth experience.
          </p>




          <div className="mt-8 flex flex-wrap gap-4">


            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 font-semibold text-white transition hover:shadow-xl"
            >
              Projects
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </a>


            <a
              href="https://github.com"
              target="_blank"
              className="flex items-center gap-2 rounded-full border border-[var(--border)] px-6 py-3 text-[var(--text-primary)] hover:bg-[var(--surface)]"
            >
              {/* <Github size={18}/> */}
              Github
            </a>


            <a
              href="https://linkedin.com"
              target="_blank"
              className="flex items-center gap-2 rounded-full border border-[var(--border)] px-6 py-3 text-[var(--text-primary)] hover:bg-[var(--surface)]"
            >
              {/* <Linkedin size={18}/> */}
              LinkedIn
            </a>


          </div>




          <div className="mt-10 flex flex-wrap gap-3">

            {
              stack.map(item => (

                <span
                  key={item}
                  className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--text-secondary)]"
                >
                  {item}
                </span>

              ))
            }

          </div>


        </motion.div>





        {/* Card */}

        <motion.div
          initial={{ opacity: 0, scale: .9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .8 }}
          // className="hidden lg:block"
        >

          <div className="relative">

            <div className="flex  items-center justify-center rounded-2xl text-7xl font-bold text-white ">
              <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow)] ">
                <Image src="/images/pk.jpeg" alt="Pradeep Img" height={483} width={350} className="rounded-3xl" />
              </div>
            </div>
            {/* 
            <div className="relative h-80 w-80 overflow-hidden rounded-2xl bg-linear-to-br from-blue-500 to-purple-500">

              <Image
                src="/images/pk.jpeg"
                alt="Pradeep Img"
                fill
                priority
                className="object-cover"
              />

            </div> */}

            {/* <div className="relative h-80 w-80 overflow-hidden rounded-full border border-[var(--border)]">

              <Image
                src="/images/pk.jpeg"
                alt="Pradeep Kumar"
                fill
                priority
                className="object-cover"
              />

            </div> */}

          </div>

        </motion.div>


      </div>

    </section>

  );
}