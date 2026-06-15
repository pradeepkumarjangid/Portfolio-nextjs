"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";


const projects = [
    {
        title: "Unikari",
        desc: "Jewelry e-commerce platform with admin panel.",
        stack: ["React", "Node", "MongoDB", "Tailwind", "MUI"],
        image: "/images/projects/unikari.png",
        url:"https://unikari.com/"
    },
    {
        title: "E-Commerce",
        desc: "Full stack ecommerce application.",
        stack: ["Next.js", "Express", "MongoDB"],
         image: "/images/projects/stokwiz.png",
        url:"https://stokwiz.com/"
    },
    {
        title: "MM Brothers",
        desc: "Product management dashboard.",
        stack: ["React", "Redux", "MUI"],
        image: "/images/projects/mmBrother.png",
        url: "http://mmbrothers.in/"
    },
      {
        title: "Unikari",
        desc: "Jewelry e-commerce platform with admin panel.",
        stack: ["React", "Node", "MongoDB", "Tailwind", "MUI"],
        image: "/images/projects/unikari.png",
        url:"https://unikari.com/"
    },
    {
        title: "E-Commerce",
        desc: "Full stack ecommerce application.",
        stack: ["Next.js", "Express", "MongoDB"],
         image: "/images/projects/stokwiz.png",
        url:"https://stokwiz.com/"
    },
    {
        title: "MM Brothers",
        desc: "Product management dashboard.",
        stack: ["React", "Redux", "MUI"],
        image: "/images/projects/mmBrother.png",
        url: "http://mmbrothers.in/"
    },
];



export default function Projects() {

    return (
        <section id="projects" className="px-6 py-28">

            <div className="mx-auto max-w-6xl">

                <p className="text-[var(--primary)]">My Work</p>
                <h2 className="mt-2 text-5xl font-bold">Projects</h2>


                <div className="mt-14 grid gap-7 md:grid-cols-3">

                    {
                        projects.map((p, i) => (

                            <motion.div
                                key={p.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * .1 }}
                                className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)] transition hover:-translate-y-2"
                            >


                                <div className="relative h-52">
                                    <Image src={p.image} alt={p.title} fill className="object-cover" />
                                </div>


                                <div className="p-6">

                                    <h3 className="text-xl font-bold">{p.title}</h3>

                                    <p className="mt-3 text-[var(--text-secondary)]">
                                        {p.desc}
                                    </p>


                                    <div className="mt-4 flex flex-wrap gap-2">

                                        {
                                            p.stack.map(s =>
                                                <span key={s} className="rounded-full bg-[var(--surface)] px-3 py-1 text-xs">
                                                    {s}
                                                </span>
                                            )
                                        }

                                    </div>


                                    <div className="mt-5 flex gap-3 ">

                                        <button className="flex gap-2 rounded-full bg-[var(--primary)] px-4 py-2 text-sm text-white">
                                            <ExternalLink size={15} />Live
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