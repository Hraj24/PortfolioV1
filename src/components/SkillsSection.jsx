// import { useState } from "react";
// import { cn } from "@/lib/utils";

// const skills = [
//   // Frontend
//   { name: "HTML/CSS", level: 95, category: "frontend" },
//   { name: "JavaScript", level: 90, category: "frontend" },
//   { name: "React", level: 90, category: "frontend" },
//   { name: "TypeScript", level: 85, category: "frontend" },
//   { name: "Tailwind CSS", level: 90, category: "frontend" },
//   { name: "Next.js", level: 80, category: "frontend" },

//   // Backend
//   { name: "Node.js", level: 80, category: "backend" },
//   { name: "Express", level: 75, category: "backend" },
//   { name: "MongoDB", level: 70, category: "backend" },
//   { name: "PostgreSQL", level: 65, category: "backend" },
//   { name: "GraphQL", level: 60, category: "backend" },

//   // Tools
//   { name: "Git/GitHub", level: 90, category: "tools" },
//   { name: "Docker", level: 70, category: "tools" },
//   { name: "Figma", level: 85, category: "tools" },
//   { name: "VS Code", level: 95, category: "tools" },
// ];

// const categories = ["all", "frontend", "backend", "tools"];

// const getExpertiseLevel = (level) => {
//   if (level >= 90) return "Proficient";
//   if (level >= 80) return "Very Good";
//   if (level >= 70) return "Good";
//   if (level >= 50) return "Intermediate";
//   return "Novice";
// };


// export const SkillsSection = () => {
//   const [activeCategory, setActiveCategory] = useState("all");

//   const filteredSkills = skills.filter(
//     (skill) => activeCategory === "all" || skill.category === activeCategory
//   );
//   return (
//     <section id="skills" className="py-24 px-4 relative bg-secondary/30">
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
//           My <span className="text-primary"> Skills</span>
//         </h2>

//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {categories.map((category, key) => (
//             <button
//               key={key}
//               onClick={() => setActiveCategory(category)}
//               className={cn(
//                 "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
//                 activeCategory === category
//                   ? "bg-primary text-primary-foreground"
//                   : "bg-secondary/70 text-forefround hover:bd-secondary"
//               )}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {filteredSkills.map((skill, key) => (
//             <div
//               key={key}
//               className="bg-card p-6 rounded-lg shadow-xs card-hover"
//             >
//               <div className="text-left mb-4">
//                 {/* <h3 className="font-semibold text-lg"> {skill.name}</h3> */}
//               </div>
//               {/* <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
//                 <div
//                   className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
//                   style={{ width: skill.level + "%" }}
//                 />
//               </div> */}

//               {/* <div className="text-right mt-1">
//                 <span className="text-sm text-muted-foreground">
//                   {skill.level}%
//                 </span>
//               </div> */}
              
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };





//hiii
import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  
  { name: "Java", level: 95, category: "backend" },
  { name: "JavaScript", level: 80, category: "frontend" },
  { name: "Python", level: 75, category: "backend" },

  { name: "Spring", level: 75, category: "backend" },
  { name: "HTML", level: 95, category: "frontend" },
  { name: "CSS", level: 95, category: "frontend" },
  { name: "React", level: 70, category: "frontend" },
  { name: "Node.js", level: 75, category: "backend" },
  { name: "Express", level: 70, category: "backend" },
  { name: "TensorFlow", level: 55, category: "backend" },
  { name: "OpenCV", level: 40, category: "backend" },

  { name: "MySql", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  { name: "Hibernate", level: 75, category: "backend" },
  { name: "Tailwind CSS", level: 60, category: "frontend" },
  { name: "Thymeleaf", level: 50, category: "frontend" },
  { name: "Bootstrap", level: 80, category: "frontend" },
  { name: "GraphQL", level: 30, category: "backend" },
  { name: "Redis", level: 20, category: "backend" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Git", level: 90, category: "tools" },
  { name: "GitHub", level: 85, category: "tools" },
  { name: "Docker", level: 30, category: "tools" },
  { name: "Kafka", level: 20, category: "tools" },
  { name: "Jira", level: 20, category: "tools" },
  { name: "AWS", level: 20, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

const getExpertiseLevel = (level) => {
  if (level >= 90) return "Proficient";
  if (level >= 80) return "Very Good";
  if (level >= 70) return "Good";
  if (level >= 50) return "Intermediate";
  return "Novice";
};


const StarBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
    </div>
  );
};


export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    // --- CHANGE: Set background to transparent to show the stars ---
    <section id="skills" className="py-24 px-4 bg-transparent">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize font-semibold",
                activeCategory === category
                  ? "bg-violet-400 text-gray-900"
                  : "bg-gray-800 bg-opacity-50 text-gray-300 hover:bg-gray-700"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2 group relative overflow-hidden border border-gray-700"
            >
              {/* Default view  */}
              <div className="transition-opacity duration-300 group-hover:opacity-0">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-lg text-gray-200">{skill.name}</h3>
                </div>
              </div>

              {/* Hover view (expertise level text) */}
              <div className="absolute inset-0  bg-opacity-90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <span className="text-white text-1xl font-bold">{getExpertiseLevel(skill.level)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main App component to render the SkillsSection
export default function App() {
  // --- CHANGE: Added StarBackground and its styles ---
  // The main container is now black and positioned relatively to hold the star background.
  const starStyles = `
    @function random_range($min, $max) {
      @return $min + floor(random() * ($max - $min + 1));
    }

    .stars-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      z-index: -1;
    }
    
    #stars, #stars2, #stars3 {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    #stars:after, #stars2:after, #stars3:after {
      content: " ";
      position: absolute;
      top: 2000px;
      width: 1px;
      height: 1px;
      background: transparent;
    }
  `;

  // Function to generate box-shadows for stars
  const generateStars = (count) => {
    let shadows = '';
    for (let i = 0; i < count; i++) {
      shadows += `${Math.random() * 2000}px ${Math.random() * 2000}px #FFF${i < count - 1 ? ',' : ''}`;
    }
    return shadows;
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <style>
        {`
          #stars {
            animation: animStar 50s linear infinite;
            box-shadow: ${generateStars(700)};
          }
          #stars2 {
            animation: animStar 100s linear infinite;
            box-shadow: ${generateStars(700)};
          }
          #stars3 {
            animation: animStar 150s linear infinite;
            box-shadow: ${generateStars(700)};
          }
          @keyframes animStar {
            from { transform: translateY(0px); }
            to { transform: translateY(-2000px); }
          }
        `}
      </style>
      <StarBackground />
      <SkillsSection />
    </div>
  );
}
