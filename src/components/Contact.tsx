import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";

const contactLinks = [
  {
    name: "Email",
    value: "piyuandhale1@gmail.com",
    href: "mailto:piyuandhale1@gmail.com",
    icon: Mail,
  },
  {
    name: "LinkedIn",
    value: "priyanka-andhale-b94573332",
    href: "https://linkedin.com/in/priyanka-andhale-b94573332",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    value: "priyankaa112",
    href: "https://github.com/priyankaa112",
    icon: Github,
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground mb-12">
            I'm always excited to connect with fellow students, developers, and anyone
            interested in technology. Feel free to reach out!
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.name !== "Email" ? "_blank" : undefined}
                rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-background rounded-xl p-6 card-shadow hover:card-shadow-hover hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 rounded-full bg-accent group-hover:bg-primary/10 transition-colors">
                    <link.icon className="w-5 h-5 text-accent-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{link.name}</p>
                    <p className="text-sm text-muted-foreground truncate max-w-[150px]">
                      {link.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-12"
          >
            <a
              href="mailto:piyuandhale1@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-opacity"
            >
              <Send className="w-4 h-4" />
              Send me a message
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
