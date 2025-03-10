import React from 'react';

const ProfileCard = (props) => {
  return (
    <div className=" mt-50 max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6">
       
        <div className="flex justify-center mb-4">
          <div className="h-24 w-24 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
            <img  src={props.image} placeholder='not found'/>
          </div>
        </div>
        
       
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-2">{props.name}</h2>
          
          <div className="space-y-2">
            <div className="flex items-center justify-center space-x-2">
              <span className="text-gray-600">{props.email}</span>
            </div>
            
            <div className="flex items-center justify-center space-x-2">
              <span className="text-gray-600">{props.phone}</span>
            </div>
          </div>
        </div>
        
       
        <div className="mt-6">
          <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;