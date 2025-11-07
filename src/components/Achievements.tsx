import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Trophy, Award, Star } from "lucide-react";

const achievements = [
  {
    title: "GeoNova Hackathon",
    award: "1st Prize",
    domain: "HealthTech Domain",
    icon: Trophy,
  },
  {
    title: "Hack-4-Mini 2.0",
    award: "3rd Place",
    domain: "Genetic Disease Identification",
    icon: Award,
  },
  {
    title: "Smart India Hackathon 2025",
    award: "Top 45 Teams",
    domain: "AI-Driven Telemedicine Solution",
    icon: Star,
  },
];

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
        >
          Achievements & Awards
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full hover:shadow-lg transition-smooth border-border/50 hover:border-primary/50 group">
                  <div className="mb-4 mx-auto p-4 rounded-full bg-primary/10 w-fit group-hover:bg-primary/20 transition-smooth">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{achievement.title}</h3>
                  <p className="text-primary font-semibold mb-2">{achievement.award}</p>
                  <p className="text-sm text-muted-foreground">{achievement.domain}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
