import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Brain, Activity } from "lucide-react";

const projects = [
  {
    title: "Telemedicine Access Platform for Rural Healthcare",
    description: "Developed for Smart India Hackathon 2025. A comprehensive multilingual telemedicine app with offline medical records (IndexedDB + PWA) and USSD-based emergency support for low-connectivity regions.",
    tech: ["React.js", "Vite", "TypeScript", "Tailwind CSS", "Supabase", "Flask", "TensorFlow"],
    icon: Heart,
    color: "text-red-500",
  },
  {
    title: "AI-Powered Symptom Analysis & Disease Prediction",
    description: "Built an intelligent ML model that predicts diseases from text-based symptoms with 95% accuracy. Leverages NLP and advanced classification algorithms for real-time health insights.",
    tech: ["Python", "scikit-learn", "Pandas", "NumPy", "Keras"],
    icon: Brain,
    color: "text-purple-500",
  },
  {
    title: "Genetic Disease Identification System",
    description: "Developed during Hack-4-Mini 2.0 (3rd Place). An AI system that analyzes genetic markers and patient data to identify potential hereditary diseases, improving early diagnosis capabilities.",
    tech: ["Python", "TensorFlow", "React.js", "Flask"],
    icon: Activity,
    color: "text-green-500",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 bg-card" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Card className="h-full hover:shadow-lg transition-smooth border-border/50 hover:border-primary/50 group">
                  <CardHeader>
                    <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-smooth">
                      <Icon className={`w-8 h-8 ${project.color}`} />
                    </div>
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
