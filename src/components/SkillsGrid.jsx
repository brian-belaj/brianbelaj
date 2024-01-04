import React from 'react';

const skills = [
    { id: 1, name: 'HTML', icon: 'html5' },
    { id: 2, name: 'CSS', icon: 'css3' },
    { id: 3, name: 'JavaScript', icon: 'javascript' },
    { id: 4, name: 'Bootstrap', icon: 'bootstrap'},
    { id: 5, name: 'Tailwind', icon: 'tailwindcss'},
    { id: 6, name: 'Vue', icon: 'vuejs'},
    { id: 7, name: 'Php', icon: 'php'},
    { id: 8, name: 'React', icon: 'react'},
    { id: 9, name: 'Jquery', icon: 'jquery'},
    { id: 10, name: 'WordPress', icon: 'wordpress'},
    { id: 11, name: 'Linux', icon: 'linux'},
    { id:12, name: 'Sass', icon: 'sass'},
  ];

const SkillsGrid = () => {
  return (
    <div className="px-12 mx-auto mt-12 bg-orange-300 p-8 shadow-md" id='skills'>
      <h2 className="text-5xl font-bold mb-6">My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-col items-center justify-center bg-white p-6 rounded-md shadow-md"
          >
            <i className={`devicon-${skill.icon}-plain colored text-8xl mb-4`} />
            <p className="text-center font-bold text-xl">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsGrid;
