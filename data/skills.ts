
export interface SkillItem {
  name: string;
  level: number;
}


export interface SkillGroup {
  title: string;
  icon: any;
  skills: SkillItem[];
}

import {
  Code2,
  Database,
  Server,
  GitBranch,
  ShieldCheck,
  Palette,
} from "lucide-react";

export  const skillGroups: SkillGroup[] = [
  {
    title:"Frontend",
    icon:Code2,
    skills:[
      {name:"React.js", level:95},
      {name:"Next.js", level:90},
      {name:"JavaScript", level:92},
      {name:"TypeScript", level:80},
    ]
  },


  {
    title:"Frontend Libraries",
    icon:Palette,
    skills:[
      {name:"Tailwind CSS", level:92},
      {name:"Bootstrape", level:92},
      {name:"Ant Design", level:88},
      {name:"Material UI", level:85},
      {name:"Framer Motion", level:80},
    ]
  },


  {
    title:"Backend",
    icon:Server,
    skills:[
      {name:"Node.js", level:92},
      {name:"Express.js", level:90},
      {name:"REST APIs", level:94},
      {name:"GraphQL", level:75},
    ]
  },


  {
    title:"Database",
    icon:Database ,
    skills:[
      {name:"MongoDB", level:88},
      {name:"MySQL", level:85},
      {name:"Sequelize", level:80},
    ]
  },


  {
    title:"API & Security",
    icon:ShieldCheck,
    skills:[
      {name:"GraphQL Frontend", level:80},
      {name:"GraphQL Backend", level:75},
      {name:"JWT", level:90},
      {name:"Bcrypt", level:85},
    ]
  },


  {
    title:"Tools",
    icon:GitBranch,
    skills:[
      {name:"Git & GitHub", level:90},
      {name:"Postman", level:92},
      {name:"VS Code", level:95},
    ]
  }

];