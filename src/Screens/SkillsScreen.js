import React, { useContext } from "react";
import Skill from "../components/Skill";
import { ThemeContext } from "../components/ThemeContext";

function SkillsScreen() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={darkMode ? 'skills-dark' : 'skills'}>
      <h1>Skills</h1>
      <section id="skills">
        <Skill></Skill>
      </section>
    </div>
  );
}
export default SkillsScreen;