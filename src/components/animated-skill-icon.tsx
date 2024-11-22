"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface AnimatedSkillIconProps {
  Icon: LucideIcon;
  color: string;
}

export function AnimatedSkillIcon({ Icon, color }: AnimatedSkillIconProps) {
  return (
    <motion.div
      className={`w-20 h-20 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center ${color}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      >
        <Icon size={40} />
      </motion.div>
    </motion.div>
  );
}
