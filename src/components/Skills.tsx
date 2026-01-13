import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Brain, Wrench, Users } from "lucide-react";

const technicalSkills = [
  {
    category: "Programming Languages",
    skills: ["C", "C++", "Python (basic)"],
    icon: Code2,
  },
  {
    category: "Core Computer Science",
    skills: ["Data Structures & Algorithms", "Computer Organization", "Operating Systems"],
    icon: Brain,
  },
  {
    category: "Web Technologies",
    skills: ["HTML", "CSS", "JavaScript (basics)", "Database Fundamentals"],
    icon: Code2,
  },
  {
    category: "Tools",
    skills: ["MS Word", "PowerPoint", "Project Documentation"],
    icon: Wrench,
  },
];

const softSkills = [
  "Problem Solving",
  "Analytical Thinking",
  "Time Management",
  "Team Collaboration",
  "Technical Writing",
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-card">
      <div className="container px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12 text-center">
            Skills
          </h2>

          {/* Technical Skills */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-foreground mb-8 text-center">
              Technical Skills
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {technicalSkills.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-background rounded-xl p-6 card-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-accent">
                      <category.icon className="w-4 h-4 text-accent-foreground" />
                    </div>
                    <h4 className="font-medium text-foreground">{category.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-8 text-center">
              Soft Skills
            </h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto"
            >
              {softSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                  className="px-4 py-2 bg-primary/10 text-primary font-medium rounded-full flex items-center gap-2"
                >
                  <Users className="w-4 h-4" />
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
