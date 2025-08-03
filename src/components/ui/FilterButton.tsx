
import { motion } from 'framer-motion';

export const FilterButton = ({ label, isActive, onClick }: any) => {
  return (
    <motion.button
      className={`px-4 py-2 rounded-full border ${isActive 
        ? 'border-green-500 text-green-500 bg-green-500 bg-opacity-10' 
        : 'border-gray-600 text-gray-400 hover:border-gray-500'}`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {label}
    </motion.button>
  );
};