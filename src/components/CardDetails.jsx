import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RiDeleteBin7Line } from "react-icons/ri";
import { REMOVE, ADD, DLT } from '../redux/actions/action';
import Header from './Header';

const CardDetails = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  
  const getdata = useSelector((state) => state.cartreducer.carts);
  
  useEffect(() => {
    // Filter data based on ID from URL params
    const compareData = getdata.filter((el) => el.id == id);
    setData(compareData);
  }, [id, getdata]);
  
  const incrementQuantity = (item) => {
    dispatch(ADD(item));
  };
  
  const decrementQuantity = (item) => {
    if (item.qnty <= 1) {
      removeItem(item.id);
    } else {
      dispatch(DLT(item));
    }
  };
  
  const removeItem = (itemId) => {
    dispatch(REMOVE(itemId));
    navigate('/order');
  };
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 py-6 text-black">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 font-montserrat mb-6">
          Item Details
        </h2>
        
        {data.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No item found</p>
          </div>
        ) : (
          data.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="md:w-1/2">
                  <img 
                    src={item.imgdata} 
                    alt={item.rname} 
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                
                {/* Details Section */}
                <div className="md:w-1/2 p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div>
                      <div className="mb-4">
                        <p className="font-semibold text-gray-700">Restaurant Name:</p>
                        <p className="text-lg">{item.rname}</p>
                      </div>
                      
                      <div className="mb-4">
                        <p className="font-semibold text-gray-700">Price:</p>
                        <p className="text-lg">₹ {item.price}</p>
                      </div>
                      
                      <div className="mb-4">
                        <p className="font-semibold text-gray-700">Dishes:</p>
                        <p className="text-lg">{item.address}</p>
                      </div>
                      
                      <div className="mb-4">
                        <p className="font-semibold text-gray-700">Total:</p>
                        <p className="text-lg font-bold">₹ {item.price * item.qnty}</p>
                      </div>
                      
                      <div className="flex items-center">
                        <p className="font-semibold text-gray-700 mr-3">Quantity:</p>
                        <div className="flex items-center bg-gray-200 rounded-md">
                          <button 
                            onClick={() => decrementQuantity(item)}
                            className="px-3 py-1 text-xl font-medium hover:bg-gray-300 rounded-l-md transition-colors"
                          >
                            -
                          </button>
                          <span className="px-3 py-1 text-lg font-medium">{item.qnty}</span>
                          <button 
                            onClick={() => incrementQuantity(item)}
                            className="px-3 py-1 text-xl font-medium hover:bg-gray-300 rounded-r-md transition-colors"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right Column */}
                    <div>
                      <div className="mb-4">
                        <p className="font-semibold text-gray-700">Rating:</p>
                        <span className="bg-green-600 text-white px-2 py-1 rounded-md">
                          {item.rating} ★
                        </span>
                      </div>
                      
                      <div className="mb-4">
                        <p className="font-semibold text-gray-700">Review:</p>
                        <p className="text-lg">{item.somedata}</p>
                      </div>
                      
                      <button
                        onClick={() => removeItem(item.id)}
                        className="mt-4 flex items-center text-red-600 hover:text-red-800 transition-colors"
                      >
                        <RiDeleteBin7Line className="text-2xl mr-2" />
                        <span className="font-medium">Remove Item</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CardDetails;