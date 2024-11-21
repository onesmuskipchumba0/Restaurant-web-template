import { motion } from 'framer-motion';

function MenuCard({ meal }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
    >
      <img 
        src={meal.strMealThumb} 
        alt={meal.strMeal} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-dark mb-2">{meal.strMeal}</h3>
        <p className="text-gray-600 text-sm mb-4">
          {meal.strCategory} • {meal.strArea}
        </p>
        <button 
          className="bg-primary text-white px-4 py-2 rounded-md w-full hover:bg-primary/90 transition"
        >
          View Details
        </button>
      </div>
    </motion.div>
  );
}

export default MenuCard; 