"use client";

import { Mail, Phone, MapPin } from "lucide-react";


export default function Contact(){


return (

<section
id="contact"
className="py-24 px-6"
>


<div
className="
max-w-6xl
mx-auto

grid
md:grid-cols-2

gap-10
"
>


{/* Left Info */}


<div>


<h2
className="
text-4xl
font-bold
"
>
Contact Me
</h2>


<p
className="
mt-4
text-[var(--text-secondary)]
"
>
Feel free to reach out for projects,
collaboration or opportunities.
</p>



<div className="mt-10 space-y-5">



<div className="
flex
gap-4
items-center
"
>

<Mail/>

<div>
<p className="text-sm text-[var(--text-secondary)]">
Email
</p>

<p>
yourmail@gmail.com
</p>
</div>

</div>



<div className="
flex
gap-4
items-center
">

<Phone/>

<div>
<p className="text-sm text-[var(--text-secondary)]">
Phone
</p>

<p>
+91 XXXXX XXXXX
</p>

</div>

</div>




<div className="
flex
gap-4
items-center
">

<MapPin/>

<div>
<p className="text-sm text-[var(--text-secondary)]">
Location
</p>

<p>
India
</p>

</div>

</div>


</div>



</div>





{/* Form */}


<form
className="
rounded-3xl

border
border-[var(--border)]

bg-[var(--card)]

p-8

space-y-5
"
>


<input
placeholder="Your Name"
className="
w-full
rounded-xl

bg-[var(--surface)]

border
border-[var(--border)]

p-3

outline-none
"
/>



<input
placeholder="Your Email"
className="
w-full
rounded-xl

bg-[var(--surface)]

border
border-[var(--border)]

p-3

outline-none
"
/>



<input
placeholder="Subject"
className="
w-full
rounded-xl

bg-[var(--surface)]

border
border-[var(--border)]

p-3

outline-none
"
/>




<textarea
placeholder="Message"

rows={5}

className="
w-full
rounded-xl

bg-[var(--surface)]

border
border-[var(--border)]

p-3

outline-none
"
/>



<button
className="
w-full

rounded-xl

bg-[var(--primary)]

py-3

text-white

font-semibold

hover:opacity-90

transition
"
>

Send Message

</button>



</form>


</div>


</section>

)

}