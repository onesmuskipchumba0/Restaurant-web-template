import { useEffect, useState } from 'react';
import axios from 'axios';
import MenuCard from '../components/MenuCard';
import { motion } from 'framer-motion';

function Menu() {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        setCategories(response.data.categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchMeals = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          selectedCategory
            ? `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`
            : 'https://www.themealdb.com/api/json/v1/1/search.php?s='
        );
        
        // Fetch full details for each meal
        const mealsWithDetails = await Promise.all(
          (response.data.meals || []).slice(0, 9).map(async (meal) => {
            const detailsResponse = await axios.get(
              `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`
            );
            return detailsResponse.data.meals[0];
          })
        );
        
        setMeals(mealsWithDetails);
      } catch (error) {
        console.error('Error fetching meals:', error);
      }
      setLoading(false);
    };

    fetchMeals();
  }, [selectedCategory]);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-8"
        >
          Our Menu
        </motion.h1>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory('')}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === '' 
                ? 'bg-primary text-white' 
                : 'bg-white text-dark hover:bg-gray-100'
            } transition`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.strCategory}
              onClick={() => setSelectedCategory(category.strCategory)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category.strCategory 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-dark hover:bg-gray-100'
              } transition`}
            >
              {category.strCategory}
            </button>
          ))}
        </div>

        {/* Meals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {meals.map((meal) => (
            <MenuCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu; 