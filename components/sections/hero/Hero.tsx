 "use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";


const Hero = () => {

  return (
    <section
      id="home"
      className="
      min-h-[800px]
      flex
      items-center

      pt-32

      relative
      overflow-hidden
      "
    >


      {/* Background Glow */}

      <div
        className="
        absolute
        top-20
        left-1/2
        -translate-x-1/2

        h-96
        w-96

        rounded-full

        bg-[var(--primary)]
        opacity-20

        blur-[120px]
        "
      />



      <div
        className="
        mx-auto
        max-w-6xl

        px-6

        grid
        lg:grid-cols-2

        gap-12

        items-center
        "
      >




        {/* Left Content */}


        <motion.div

          initial={{
            opacity:0,
            y:40
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.8
          }}

        >


          <p
          className="
          mb-4

          text-[var(--primary)]

          font-medium
          "
          >
            Hello, I'm
          </p>



          <h1
            className="
            text-5xl
            md:text-7xl

            font-bold

            leading-tight

            text-[var(--text-primary)]
            "
          >

            Pradeep Kumar


          </h1>




          <h2
          className="
          mt-4

          text-2xl
          md:text-4xl

          font-semibold

          bg-linear-to-r
          from-blue-500
          to-purple-500

          bg-clip-text
          text-transparent
          "
          >

            Full Stack Developer


          </h2>



          <p
          className="
          mt-6

          max-w-xl

          text-lg

          leading-8

          text-[var(--text-secondary)]
          "
          >

            I build modern, scalable web applications
            using React.js, Next.js, Node.js and
            MongoDB with clean UI and smooth user experience.


          </p>




          {/* Buttons */}


          <div
          className="
          mt-8

          flex
          flex-wrap

          gap-4
          "
          >


            <a
            href="#projects"

            className="
            group

            flex
            items-center
            gap-2

            rounded-full

            bg-[var(--primary)]

            px-6
            py-3

            text-white

            font-semibold

            transition

            hover:shadow-xl
            hover:shadow-blue-500/30
            "
            >

              View Projects


              <ArrowRight
              size={18}

              className="
              group-hover:translate-x-1
              transition
              "
              />


            </a>




            <a
            href="https://github.com"

            target="_blank"

            className="
            flex
            items-center
            gap-2

            rounded-full

            border

            border-[var(--border)]

            px-6
            py-3

            text-[var(--text-primary)]

            hover:bg-[var(--surface)]

            transition
            "
            >

              {/* <Github size={18}/> */}

              Github

            </a>



            <a
            href="https://linkedin.com"

            target="_blank"

            className="
            flex
            items-center
            gap-2

            rounded-full

            border

            border-[var(--border)]

            px-6
            py-3

            text-[var(--text-primary)]

            hover:bg-[var(--surface)]

            transition
            "
            >

              {/* <Linkedin size={18}/> */}

              LinkedIn

            </a>


          </div>





          {/* Stack */}

          <div
          className="
          mt-10

          flex
          flex-wrap
          gap-3
          "
          >

          {
            [
              "React",
              "Next.js",
              "Node.js",
              "MongoDB",
              "Tailwind"
            ].map(skill=>(
              
              <span
              key={skill}

              className="
              rounded-full

              border

              border-[var(--border)]

              bg-[var(--surface)]

              px-4
              py-2

              text-sm

              text-[var(--text-secondary)]
              "
              >
                {skill}
              </span>

            ))
          }

          </div>


        </motion.div>







        {/* Right Card */}



        <motion.div

        initial={{
          opacity:0,
          scale:0.9
        }}

        animate={{
          opacity:1,
          scale:1
        }}

        transition={{
          duration:0.8
        }}


        className="
        hidden
        lg:block
        "

        >


          <div
          className="
          relative

          rounded-3xl

          border

          border-[var(--border)]

          bg-[var(--card)]

          p-8

          shadow-[var(--shadow)]

          "
          >


            <div
            className="
            h-80

            rounded-2xl

            bg-linear-to-br
            from-blue-500
            to-purple-500

            flex
            items-center
            justify-center

            text-white

            text-7xl

            font-bold
            "
            >

              PK

            </div>


          </div>


        </motion.div>
      </div>
    </section>
  );
};


export default Hero;