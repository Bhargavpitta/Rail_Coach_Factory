import React, { useState } from 'react';
import { gmData } from './gmData'; // Using the data provided in the previous step

const GMDashboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // 1. Identify the current GM for the top display
  const currentGM = gmData.find(gm => gm.id === 36);

  // 2. Filter data for the table and gallery
  const filteredGMs = gmData.filter(gm => 
    gm.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 bg-white text-gray-900 font-sans">
      
      {/* SECTION 1: TOP FEATURED PHOTO */}
      {currentGM && (
        <div className="flex flex-col items-center mb-10 border-b pb-8">
          <div className="relative p-1 bg-gradient-to-b from-blue-900 to-blue-600 rounded-sm shadow-xl">
             <img 
              src={currentGM.image} 
              alt={currentGM.name}
              className="w-48 h-60 object-cover border-4 border-white"
              onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/200x250?text=Photo+Unavailable')}
            />
          </div>
          <h2 className="mt-4 text-2xl font-bold text-blue-900 uppercase">{currentGM.name}</h2>
          <p className="text-lg font-semibold text-red-700">General Manager, RCF</p>
          <p className="text-sm text-gray-500 font-medium">Tenure: {currentGM.from} - {currentGM.to}</p>
        </div>
      )}

      {/* SEARCH BAR */}
      <div className="mb-6 flex justify-end">
        <input 
          type="text" 
          placeholder="Search by name..." 
          className="border-2 border-blue-100 p-2 rounded-md w-full md:w-64 focus:border-blue-500 outline-none transition-all"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* SECTION 2: THE TABLE */}
      <div className="overflow-x-auto shadow-md rounded-t-lg mb-16">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-blue-900 text-white">
              <th className="p-4 border border-blue-800">S.No.</th>
              <th className="p-4 border border-blue-800">Name of the General Manager</th>
              <th className="p-4 border border-blue-800 text-center">From</th>
              <th className="p-4 border border-blue-800 text-center">To</th>
            </tr>
          </thead>
          <tbody>
            {filteredGMs.map((gm) => (
              <tr key={gm.id} className="odd:bg-white even:bg-gray-50 hover:bg-blue-50 transition-colors">
                <td className="p-3 border text-center font-bold text-gray-600">{gm.id}</td>
                <td className="p-3 border font-semibold text-blue-900">{gm.name}</td>
                <td className="p-3 border text-center">{gm.from}</td>
                <td className="p-3 border text-center">{gm.to}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* SECTION 3: ALL PHOTOS (DOWNSIDE) */}
      <div className="mt-10">
        <h3 className="text-xl font-bold text-blue-900 border-l-4 border-blue-900 pl-3 mb-8 uppercase tracking-wider">
          Gallery of General Managers
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {/* Even if filtered in the table, we show all here, or use filteredGMs if you want gallery search too */}
          {filteredGMs.map((gm) => (
            <div key={gm.id} className="group bg-white border p-2 shadow hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="overflow-hidden bg-gray-100 mb-2 h-44">
                <img 
                  src={gm.image} 
                  alt={gm.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>
              <div className="text-center">
                <p className="text-[10px] font-extrabold text-red-800 leading-tight uppercase min-h-[24px]">
                  {gm.name}
                </p>
                <div className="mt-1 border-t pt-1">
                  <p className="text-[9px] text-gray-500 font-bold">{gm.from}</p>
                  <p className="text-[9px] text-gray-500">to</p>
                  <p className="text-[9px] text-gray-500 font-bold">{gm.to}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GMDashboard;