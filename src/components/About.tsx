import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-card">
      <div className="container px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8 text-center">
            About Me
          </h2>
          
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Hi, I'm Priyanka Andhale, a second-year B.Tech student in Electronics and 
              Computer Engineering at Zeal College of Engineering and Research. I enjoy 
              exploring new concepts in web development and basic programming.
            </p>
            
            <p>
              My goal is to build a strong foundation in computer science and contribute 
              to innovative projects. I'm passionate about the intersection of hardware 
              and software, and I'm actively seeking opportunities to apply my theoretical 
              knowledge in practical settings.
            </p>
            
            <p>
              I believe in continuous learning and collaboration to achieve impactful results.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
