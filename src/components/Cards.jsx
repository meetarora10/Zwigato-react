import React from 'react';
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';
import Header from './Header';
import Cardsdata from './Cardsdata';

const Cards = () => {
  const [data] = React.useState(Cardsdata);
  const dispatch = useDispatch();
  
  const addToCart = (item) => {
    dispatch(ADD(item));
  };
  
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8 font-montserrat">Popular Restaurants</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.map((restaurant) => (
            <div key={restaurant.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src={restaurant.imgdata} 
                  alt={restaurant.rname}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{restaurant.rname}</h3>
                <p className="text-gray-700 mb-4">Meal for one: ₹{restaurant.price}</p>
                
                <button 
                  onClick={() => addToCart(restaurant)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors duration-300 font-medium"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;