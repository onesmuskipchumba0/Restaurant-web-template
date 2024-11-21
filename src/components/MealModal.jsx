import { motion, AnimatePresence } from 'framer-motion';

function MealModal({ meal, isOpen, onClose }) {
  if (!meal) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="relative">
                <img 
                  src={meal.strMealThumb} 
                  alt={meal.strMeal}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{meal.strMeal}</h2>
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {meal.strCategory}
                  </span>
                  <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm">
                    {meal.strArea}
                  </span>
                </div>

                {/* Ingredients */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Ingredients</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {Array.from({ length: 20 }, (_, i) => i + 1)
                      .filter(i => meal[`strIngredient${i}`])
                      .map(i => (
                        <div 
                          key={i}
                          className="flex items-center gap-2 bg-gray-50 p-2 rounded"
                        >
                          <img 
                            src={`https://www.themealdb.com/images/ingredients/${meal[`strIngredient${i}`]}-Small.png`}
                            alt={meal[`strIngredient${i}`]}
                            className="w-8 h-8 object-cover"
                          />
                          <span className="text-sm">
                            {meal[`strMeasure${i}`]} {meal[`strIngredient${i}`]}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Instructions */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Instructions</h3>
                  <p className="text-gray-600 whitespace-pre-line">
                    {meal.strInstructions}
                  </p>
                </div>

                {/* Video Tutorial */}
                {meal.strYoutube && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-3">Video Tutorial</h3>
                    <div className="aspect-video">
                      <iframe
                        className="w-full h-full rounded-lg"
                        src={`https://www.youtube.com/embed/${meal.strYoutube.split('v=')[1]}`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default MealModal; 