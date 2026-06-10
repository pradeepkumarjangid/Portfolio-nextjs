import ThemeToggle from "../ui/ThemeToggle"

const Navbar = () => {
  return (
    <div>Navbar
<div
  className="
    bg-white
    text-black

    dark:bg-black
    dark:text-white
  "
>
  Hello
</div>
      <ThemeToggle/>
    </div>
  )
}

export default Navbar