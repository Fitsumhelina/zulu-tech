"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const stats = [
  { value: 100, label: "Success Rate", suffix: "%" },
  { value: 10, label: "Happy Customer", suffix: "+" },
  { value: 20, label: "Completed Projects", suffix: "+" },
  { value: 5, label: "Trade In The World", suffix: "+" },
];

export const Stats = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="bg-white dark:bg-[#05132e] py-20 max-w-full">
      <div className="container mx-auto px-4">
        <motion.div
          // initial={{ opacity: 0, y: 20 }}
          // animate={inView ? { opacity: 1, y: 0 } : {}}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              // initial={{ opacity: 0, y: 20 }}
              // animate={inView ? { opacity: 1, y: 0 } : {}}
              // transition={{ delay: index * 0.1 }}
            >
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const AnimatedNumber = ({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < value) {
      const interval = setInterval(() => {
        setCount((prev) => Math.min(prev + 1, value)); // increment number until it reaches the target value
      }, 10); // adjust speed here (in ms)
      return () => clearInterval(interval); // clear interval on unmount
    }
  }, [count, value]);

  return (
    <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
      {count}
      {suffix}
    </div>
  );
};
