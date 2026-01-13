import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Code, Layers } from "lucide-react";

const projects = [
  {
    title: "Basic Personal Website",
    tech: "HTML",
    description:
      "Created a simple static website using HTML to learn the fundamentals of web page structure. This project helped me understand how to organize content and link different pages.",
    learnings: ["HTML tags", "Basic page layout", "Page linking"],
    icon: Code,
  },
  {
    title: "Web-Based Object Tracking System",
    tech: "Web Application",
    description:
      "Designed a web application to manage lost and found items on campus. Implemented structured data handling and user-friendly interfaces.",
    learnings: [
      "System design",
      "Data organization",
      "Documentation (synopsis, report, PPT, flowcharts)",
      "User interface design",
    ],
    icon: Layers,
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12 text-center">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group bg-card rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-accent group-hover:bg-primary/10 transition-colors">
                    <project.icon className="w-5 h-5 text-accent-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <span className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
                    {project.tech}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="space-y-2">
                  <p className="text-xs font-medium text-foreground/80 uppercase tracking-wider">
                    What I learned:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.learnings.map((learning) => (
                      <span
                        key={learning}
                        className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
                      >
                        {learning}
                      </span>
                    ))}
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

export default Projects;
