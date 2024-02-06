import React from "react";
import SkillsItem from "./SkillsItem";
import SkillsLanguage from "./SkillsLanguage";

const Skills = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a] ">
      <h1 className="heading">
        MIS <span className="text-yellow-400">SKILLS</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
        <div>
          <SkillsItem title="Desarrollo React" year="Desde el año 2023" />
          <SkillsItem title="Desarrollo MERN " year="Desde el año 2023" />
          <SkillsLanguage
            skill1="HTML"
            skill2="Css"
            skill3="JavaScript"
            level1="w-[91%]"
            level2="w-[88%]"
            level3="w-[90%]"
          />
        </div>
        <div>
          <SkillsItem title="Desarrollo NEXT JS" year="Desde el año 2023" />
          <SkillsItem title="Desarrollo NODE JS" year="Desde el año 2023" />
          <SkillsLanguage
            skill1="React Js"
            skill2="Next Js"
            skill3="TypeScript"
            level1="w-[81%]"
            level2="w-[65%]"
            level3="w-[80%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
