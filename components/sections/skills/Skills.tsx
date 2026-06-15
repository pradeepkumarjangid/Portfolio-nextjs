"use client";

import { skillGroups } from "@/data/skills";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="mb-14">
          <p className="text-[var(--primary)]">My Expertise</p>
          <h2 className="mt-2 text-5xl font-bold text-[var(--text-primary)]">
            Skills
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {skillGroups.map((group, index) => {
            let Icon = group.icon
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-3xl border border-[var(--border)] bg-[var(--card)]/80 backdrop-blur-xl p-6 shadow-[var(--shadow)] transition hover:-translate-y-2"
              >

                <div className="flex items-center gap-4">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary)] text-white">
                    {/* {group.icon} */}
                    <Icon size={22}/>
                  </div>

                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                    {group.title}
                  </h3>

                </div>


                <div className="mt-6 space-y-5">

                  {group.skills.map((skill) => (

                    <div key={skill.name}>

                      <div className="mb-2 flex justify-between text-sm">

                        <span className="text-[var(--text-secondary)]">
                          {skill.name}
                        </span>

                        <span className="text-[var(--text-muted)]">
                          {skill.level}%
                        </span>

                      </div>


                      <div className="h-1.5 overflow-hidden rounded-full bg-[var(--surface)]">

                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1 }}
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                        />

                      </div>

                    </div>

                  ))}

                </div>

              </motion.div>

            )
          })}

        </div>

      </div>
    </section>
  );
}