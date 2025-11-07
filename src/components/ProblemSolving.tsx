import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";

const stats = [
  { platform: "LeetCode", count: 250, color: "text-orange-500" },
  { platform: "HackerRank", count: 50, color: "text-green-500" },
  { platform: "CodeChef", count: 400, color: "text-amber-600" },
];

const Counter = ({ value, isInView }: { value: number; isInView: boolean }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, count, value]);

  return <motion.span>{rounded}</motion.span>;
};

const ProblemSolving = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problem-solving" className="py-20 bg-card" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
        >
          Problem Solving
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.platform}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-8 text-center hover:shadow-lg transition-smooth border-border/50 hover:border-primary/50">
                <div className="mb-4">
                  <span className={`text-5xl font-bold ${stat.color}`}>
                    <Counter value={stat.count} isInView={isInView} />+
                  </span>
                </div>
                <p className="text-lg font-semibold text-foreground">{stat.platform}</p>
                <p className="text-sm text-muted-foreground mt-1">Problems Solved</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolving;
