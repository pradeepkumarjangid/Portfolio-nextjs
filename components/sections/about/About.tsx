 "use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">

      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.6}}
        >

          <h2 className="text-4xl font-bold text-[var(--text-primary)]">
            About Me
          </h2>

          <p className="
          mt-6
          max-w-3xl
          text-lg
          leading-8
          text-[var(--text-secondary)]
          ">

          I'm a Full Stack Developer passionate about building
          modern web applications. I work with React.js, Next.js,
          Node.js, Express and MongoDB to create scalable and
          user-friendly digital experiences.

          </p>


        </motion.div>

      </div>

    </section>
  )
}