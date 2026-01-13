import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "B.Tech in Electronics and Computer Engineering",
    institution: "Zeal College of Engineering and Research",
    period: "2024 - Present",
    highlight: "Current",
  },
  {
    degree: "HSC (12th Grade)",
    institution: "Kamaladevi Junior College",
    period: "Completed",
    highlight: "72%",
  },
  {
    degree: "SSC (10th Grade)",
    institution: "St. Mary's High School, Kalyan",
    period: "Completed",
    highlight: "87%",
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 bg-background">
      <div className="container px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12 text-center">
            Education
          </h2>

          <div className="max-w-2xl mx-auto space-y-6">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent">
                    <GraduationCap className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                      <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                        {edu.highlight}
                      </span>
                    </div>
                    <p className="text-muted-foreground mt-1">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground/70 mt-1">{edu.period}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
