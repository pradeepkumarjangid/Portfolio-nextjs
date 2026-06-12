"use client";

import Link from "next/link";
import { Moon, Sun, Download } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";


const Navbar = () => {

  const { theme, setTheme } = useTheme();
  const [mounted,setMounted] = useState(false);


  useEffect(()=>{
    setMounted(true);
  },[]);


  const navItems = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Contact",
  ];


  return (
    <header className="
      fixed
      top-5
      left-0
      w-full
      z-50
    ">


      <nav
        className="
        mx-auto
        max-w-5xl

        flex
        items-center
        justify-between

        px-5
        py-3

        rounded-full

        border
        border-[var(--border)]

        bg-[var(--background)]/70

        backdrop-blur-xl

        shadow-xl
        "
      >



        {/* Logo */}

        <Link
          href="/"
          className="
          font-bold
          text-lg

          bg-linear-to-r
          from-blue-500
          to-purple-500

          bg-clip-text
          text-transparent
          "
        >
          Pradeep.
        </Link>



        {/* Links */}

        <div
          className="
          hidden
          lg:flex
          items-center
          gap-7
          "
        >

          {
            navItems.map(item=>(
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="
                relative

                text-sm
                text-[var(--text-secondary)]

                hover:text-[var(--primary)]

                transition

                after:absolute
                after:left-0
                after:-bottom-1
                after:h-[2px]
                after:w-0

                after:bg-[var(--primary)]

                hover:after:w-full

                after:transition-all
                "
              >
                {item}
              </Link>
            ))
          }


        </div>



        {/* Actions */}


        <div
        className="
        flex
        items-center
        gap-3
        "
        >


        {
          mounted && (

          <button
            onClick={()=>
              setTheme(
                theme==="dark"
                ?"light"
                :"dark"
              )
            }

            className="
            h-10
            w-10

            rounded-full

            flex
            items-center
            justify-center

            bg-[var(--surface)]

            hover:scale-110

            transition
            "
          >

            {
              theme==="dark"
              ?
              <Sun size={18}/>
              :
              <Moon size={18}/>
            }

          </button>

          )
        }




        <a
          href="/resume/Pradeep-Kumar-Resume.pdf"
          download
          className="
          hidden
          sm:flex

          items-center
          gap-2

          rounded-full

          px-5
          py-2.5

          bg-[var(--primary)]

          text-white

          text-sm
          font-semibold

          hover:shadow-lg
          hover:shadow-blue-500/30

          transition
          "
        >

          <Download size={16}/>

          Resume

        </a>


        </div>



      </nav>


    </header>
  );
};


export default Navbar;