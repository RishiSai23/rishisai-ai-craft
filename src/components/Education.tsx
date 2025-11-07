import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { GraduationCap, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "SRM Easwari Engineering College",
    year: "Expected May 2027",
    grade: "CGPA: 8.5",
    icon: GraduationCap,
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Secondary Education",
    year: "2023",
    grade: "85%",
    icon: BookOpen,
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "Secondary Education",
    year: "2021",
    grade: "94%",
    icon: BookOpen,
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 bg-card" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
        >
          Education
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-smooth border-border/50 hover:border-primary/50">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 p-3 rounded-lg bg-primary/10 h-fit">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-lg mb-1">{edu.degree}</h3>
                      <p className="text-foreground/80 mb-2">{edu.institution}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span>{edu.year}</span>
                        <span className="text-primary font-semibold">{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
